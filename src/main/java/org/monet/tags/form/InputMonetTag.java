package org.monet.tags.form;

import java.lang.annotation.Annotation;
import java.util.*;
import javax.servlet.jsp.JspException;
import javax.validation.constraints.*;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.monet.meta.MetadataParser;
import org.monet.meta.jb.Metadata;
import org.springframework.beans.*;
import org.springframework.core.convert.TypeDescriptor;
import org.springframework.format.annotation.*;
import org.springframework.util.Assert;
import org.springframework.validation.BindingResult;
import org.springframework.web.servlet.support.BindStatus;
import org.springframework.web.servlet.tags.form.*;

/**
 * Componente de monet que renderiza un <code>input</code> a partir del tipo de campo sobre el que hace binding.
 */
@SuppressWarnings("serial")
public class InputMonetTag extends InputTag implements FormatAnnotationTag {
	/** Flag para aplicar o no validaciones en cliente */
	public static final String NOVALIDATE_ATTRIBUTE = "novalidate";

	/** Flag para aplicar o no validaciones en cliente */
	protected Boolean novalidate = Boolean.FALSE;

	/** La anotación de formato (sólo puede ser una) y algunas especiales para la generación del javascript */
	protected List<Annotation> annotationFormatList = null;

	/** La lista de metainformación aplicable al atributo del modelo */
	private List<Metadata> metadataList = null;

	/**
	 * Finalizamos el renderizado del tag. Liberamos los atributos rellenos en la carga.
	 * 
	 * @return El end tag del padre.
	 * 
	 * @throws JspException Error al cerrar el tag.
	 */
	@Override
	public int doEndTag() throws JspException {
		// Liberamos la información recogida
		annotationFormatList = null;
		metadataList = null;

		return super.doEndTag();
	}

	/**
	 * Obtiene, de la lista de anotaciones del campo, la correspondiente al formato.
	 * 
	 * @param annotationList Lista de anotaciones del atributo.
	 * 
	 * @return La anotación de formato, o null, si no hay ninguna.
	 */
	@Override
	public Annotation getFormatAnnotation(List<Annotation> annotationList) {
		Assert.notNull(annotationList);

		for (Annotation a : annotationList) {
			if (a.annotationType().isAssignableFrom(NumberFormat.class) || a.annotationType().isAssignableFrom(DateTimeFormat.class)) {
				return a;
			}
		}
		return null;
	}

	/**
	 * Establece el valor del atributo '<code>novalidate</code>'. Puede ser una expresión regular.
	 * 
	 * @param novalidate True, para que no se hagan validaciones en cliente; false, (valor por defecto) sí se hacen.
	 */
	public void setNovalidate(String novalidate) throws JspException {
		this.novalidate = evaluateBoolean(NOVALIDATE_ATTRIBUTE, novalidate);
	}

	/**
	 * Utilizamos el método de la creación del TagWriter para inicializar la información del metadata.
	 * 
	 * @return El writer del componente.
	 */
	@Override
	protected final TagWriter createTagWriter() {
		try {
			annotationFormatList = getAnnotationFormatList();
			metadataList = getMetadata(getFormatAnnotation(annotationFormatList));
		} catch (JspException e) {
			logger.fatal("No he podido obtener la información de los metadatas del atributo", e);
		}
		return super.createTagWriter();
	}

	/**
	 * Sobreescribo el cssClass que es donde va a ir la validación de jquery utilizando metada.
	 * 
	 * @return El estilo y la validación jquery del input.
	 */
	@Override
	protected String getCssClass() {
		String cssClass = super.getCssClass();
		if (!novalidate) {
			try {
				// Añadimos las validaciones jquery de cliente
				String c = getClassFromMetadata(metadataList);
				cssClass = StringUtils.defaultString(cssClass) + " " + c;
			} catch (JspException je) {
				logger.error("Al obtener el metadata del input", je);
			}
		}
		return cssClass;
	}

	/**
	 * Sobreescribo el cssErrorClass que es donde va a ir la validación de jquery utilizando metada.
	 * 
	 * @return El estilo y la validación jquery del input.
	 */
	@Override
	protected String getCssErrorClass() {
		String cssErrorClass = StringUtils.defaultString(super.getCssErrorClass()) + " error ";
		if (!novalidate) {
			try {
				// Añadimos las validaciones jquery de cliente
				String c = getClassFromMetadata(metadataList);
				cssErrorClass += c;
			} catch (JspException je) {
				logger.error("Al obtener el metadata del input", je);
			}
		}
		return cssErrorClass;
	}

	/**
	 * Get the model attribute description which represents this <code>input</code> tag. With this object, you will be able to get both the
	 * data type and annotations in order to add client side validations.
	 * 
	 * @return Model attribute description for this tag.
	 * 
	 * @throws JspException Error al obtener la lista de metadatas de un campo.
	 */
	protected TypeDescriptor getTypeDescriptor() throws JspException {
		// Objeto relleno tras el bind
		BindStatus bs = getBindStatus();

		BeanWrapper accessor = PropertyAccessorFactory.forBeanPropertyAccess(((BindingResult) bs.getErrors()).getTarget());

		// Y la expresión indica el campo.
		String id = bs.getExpression();
		return accessor.getPropertyTypeDescriptor(id);
	}

	/**
	 * Escribe el span donde se coloca el error del campo. El id será el del input más '_error'.
	 * 
	 * @param tagWriter Writer para el renderizado.
	 * 
	 * @throws JspException Error al renderizar la salida sobre el writer.
	 */
	protected void writeSpanDeError(TagWriter tagWriter) throws JspException {
		tagWriter.startTag("span");
		tagWriter.writeOptionalAttributeValue("id", resolveId() + "_error");
		tagWriter.appendValue(" "); // Si no en IE8 no funciona...
		tagWriter.endTag();
	}

	/**
	 * Escribe el tag '<code>input</code>' en el {@link TagWriter}.
	 * 
	 * @param tagWriter Writer para el renderizado.
	 * 
	 * @throws JspException Error al renderizar la salida sobre el writer.
	 */
	@Override
	protected int writeTagContent(TagWriter tagWriter) throws JspException {
		int res = super.writeTagContent(tagWriter);

		writeSpanDeError(tagWriter);

		return res;
	}

	/**
	 * Obtiene la anotación de formato asociada al atributo del objeto del modelo. Puede ser:
	 * <ol>
	 * <li>{@link org.springframework.format.annotation.DateTimeFormat}</li>
	 * <li>{@link javax.validation.constraints.Past}</li>
	 * <li>{@link javax.validation.constraints.Future}</li>
	 * <li>{@link org.springframework.format.annotation.NumberFormat NumberFormat}</li>
	 * </ol>
	 * 
	 * @return La anotación de formato
	 * @see DateTimeFormat
	 * @see NumberFormat
	 * @see Past
	 * @see Future
	 * 
	 * @throws JspException Error al obtener el tipo y las anotaciones del campo.
	 */
	private List<Annotation> getAnnotationFormatList() throws JspException {
		List<Annotation> annotationList = new ArrayList<Annotation>();

		TypeDescriptor typeDescriptor = getTypeDescriptor();
		for (Annotation a : typeDescriptor.getAnnotations()) {
			if (a.annotationType().isAssignableFrom(DateTimeFormat.class) || a.annotationType().isAssignableFrom(Past.class)
					|| a.annotationType().isAssignableFrom(Future.class) || a.annotationType().isAssignableFrom(NumberFormat.class)) {
				annotationList.add(a);
			}
		}
		return annotationList;
	}

	/**
	 * Obtenemos el metadata que se va a colocar en el class para la validación en cliente.
	 * 
	 * @return El class (json) para la validación en cliente.
	 * 
	 * @throws JspException Error al gererar el metadata.
	 */
	private String getClassFromMetadata(List<Metadata> metas) throws JspException {
		StringBuffer clase = new StringBuffer("{");
		StringBuffer msg = new StringBuffer("messages: {");

		Metadata meta;
		for (int i = 0; i < metas.size(); i++) {
			meta = metas.get(i);
			clase.append(meta.getTipo().getValor()).append(':').append(meta.getValor()).append(',');

			if (StringUtils.isNotEmpty(meta.getMessage())) {
				msg.append(meta.getTipo().getValor()).append(":'").append(meta.getMessage()).append("',");
			}
		}
		removeEnd(msg, ',');

		if (msg.length() > 11) {
			clase.append(msg).append("}}");
		} else {
			removeEnd(clase, ',').append("}");
		}
		return clase.toString();
	}

	/**
	 * Obtiene la lista de condiciones que se van a aplicar a partir de las anotaciones y del tipo de dato.
	 * 
	 * @return Lista de comprobaciones que deberán serializarse en json para la parte cliente.
	 * 
	 * @throws JspException Error al obtener la lista de metadatas de un campo.
	 */
	private List<Metadata> getMetadata(Annotation formatAnnotation) throws JspException {
		TypeDescriptor typeDescriptor = getTypeDescriptor();

		List<Metadata> metas = new ArrayList<Metadata>();

		// Añadimos los metadatas asociados al tipo del dato
		List<Metadata> mds = MetadataParser.getMetadatasFromType(typeDescriptor.getType(), formatAnnotation);
		if (mds != null) {
			metas.addAll(mds);
		}

		// Añadimos los metadatas asociados a las anotaciones
		for (Annotation a : typeDescriptor.getAnnotations()) {
			CollectionUtils.addIgnoreNull(metas, MetadataParser.getMetadata(a, typeDescriptor.getType()));
		}

		return metas;
	}

	/**
	 * Elimina un caracter por el final
	 * 
	 * @param sb Buffer cona cadena.
	 * @param car El caracter a eliminar por el final.
	 * 
	 * @return La cadena sin el caracter.
	 */
	private StringBuffer removeEnd(StringBuffer sb, Character car) {
		if (sb.charAt(sb.length() - 1) == car) {
			sb.deleteCharAt(sb.length() - 1);
		}
		return sb;
	}
}
