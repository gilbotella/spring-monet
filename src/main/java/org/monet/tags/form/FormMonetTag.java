package org.monet.tags.form;

import freemarker.template.*;
import java.io.IOException;
import java.util.*;
import javax.servlet.jsp.JspException;
import org.monet.freemarker.FreemarkerParser;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.web.servlet.tags.form.*;

/**
 * Renderiza un formulario de monet. Con la propiedad novalidate, podemos generar o no validaciones en el cliente, utilizando el plugin
 * validate de jQuery y las anotaciones de la JSR-303.
 */
public class FormMonetTag extends FormTag {
	private static final long serialVersionUID = 2215437772757227828L;

	/** Flag para aplicar validaciones en cliente o no */
	public static final String NOVALIDATE_ATTRIBUTE = "novalidate";

	/** Flag para aplicar validaciones en cliente o no */
	protected Boolean novalidate = Boolean.FALSE;

	/**
	 * Escribe la salida del componente form.
	 * 
	 * @param tagWriter El writer para el renderizado.
	 * 
	 * @return {@link javax.servlet.jsp.tagext.Tag#EVAL_BODY_INCLUDE}
	 * 
	 * @throws JspException Error al renderizar el formulario.
	 */
	@Override
	protected int writeTagContent(TagWriter tagWriter) throws JspException {
		if (!novalidate) {
			// Generamos en código de la validación js antes de llamar al renderizado propio del form de Spring
			tagWriter.startTag("script");
			tagWriter.writeOptionalAttributeValue("type", "text/javascript");

			Map<String, Object> data = new HashMap<String, Object>();
			data.put("id", resolveId());
			data.put("locale", LocaleContextHolder.getLocale().getLanguage());

			try {
				Template template = FreemarkerParser.getInstance().getTemplate("form.ftl");
				tagWriter.appendValue(FreeMarkerTemplateUtils.processTemplateIntoString(template, data));
			} catch (IOException e) {
				throw new JspException(e);
			} catch (TemplateException e) {
				throw new JspException(e);
			}
			tagWriter.endTag();
		}
		return super.writeTagContent(tagWriter);
	}
}
