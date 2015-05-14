package org.monet.tags.datatable;

import java.io.IOException;
import javax.servlet.jsp.JspException;
import org.apache.commons.lang.StringUtils;
import org.springframework.util.Assert;
import org.springframework.web.servlet.support.RequestContext;
import org.springframework.web.servlet.tags.HtmlEscapingAwareTag;
import org.springframework.web.util.ExpressionEvaluationUtils;

/**
 * Define una columna del datatable
 */
public class DataTableColumnTag extends HtmlEscapingAwareTag {
	private static final long serialVersionUID = -7653057784039058839L;

	// Atributo flag se puede buscar
	public static final String BUSCAR_ATTRIBUTE = "searchable";

	// Atributo flag se puede ordenar
	public static final String ORDENAR_ATTRIBUTE = "sortable";

	// Atributo flag se puede ordenar
	public static final String VISIBLE_ATTRIBUTE = "visible";

	// Atributo flag si se trata de radiobotón
	public static final String RADIO_ATTRIBUTE = "radiobutton";

	// Atributo flag si se trata de radiobotón
	public static final String NAME_RADIO_ATTRIBUTE = "nameRadiobutton";

	// Atributo title para el tootltip
	public static final String TITLE_ATTRIBUTE = "title";

	// Atributo class standard de html
	public static final String CSS_CLASS_ATTRIBUTE = "cssClass";

	// Atributo style standard de html
	public static final String CSS_STYLE_ATTRIBUTE = "cssStyle";

	// Atributo class standard de html
	public static final String CSS_CLASS_COLUMN_ATTRIBUTE = "cssClassColumn";

	// Atributo flag se puede buscar
	protected Boolean buscar = Boolean.TRUE;

	// Atributo flag se puede ordenar
	protected Boolean ordenar = Boolean.TRUE;

	// Atributo flag de columna visible
	protected Boolean visible = Boolean.TRUE;

	// Atributo flag de tipo de columna details
	protected Boolean details = Boolean.FALSE;

	// Atributo flag de tipo de columna radiobutton
	protected Boolean radiobutton = Boolean.FALSE;

	// Atributo title para el tootltip
	protected String title;

	//Atributo cssClass
	protected String cssClass;

	//Atributo cssClass
	protected String cssClassColumn;

	// Atributo name de la variable seleccionada por el radio button
	protected String nameRadiobutton;

	//Componente padre donde se volcará la información.
	private DataTableTag dataTable;

	/**
	 * Cierra el bloque '<code>th</code>'.
	 */
	@Override
	public int doEndTag() throws JspException {
		try {
			pageContext.getOut().print("</th>");
		} catch (IOException io) {
			throw new JspException(io);
		}

		return EVAL_PAGE;
	}

	/**
	 * Limpia los datos almacenados.
	 */
	@Override
	public void doFinally() {
		super.doFinally();
		dataTable = null;
	}

	/**
	 * Al inicio del tag, pintamos la cabecera de la columna y guardamos los datos para renderizar la tabla al final.
	 *
	 * @return Continúa con el resto de la página
	 *
	 * @throws IOException Error al renderizar la tabla.
	 */
	@Override
	public int doStartTagInternal() throws IOException {
		Assert.notNull(findAncestorWithClass(this, DataTableHeadTag.class), "El tag dtColumn debe ser descendiente del tag dtHead");

		dataTable = (DataTableTag)findAncestorWithClass(this, DataTableTag.class);

		Assert.notNull(dataTable, "El tag dtColumn debe ser descendiente del tag datatable");

		dataTable.addColumnInfo(cssClassColumn, buscar, ordenar, visible, details, radiobutton, nameRadiobutton);

		pageContext.getOut().print("<th");
		if (StringUtils.isNotEmpty(cssClass)) {
			pageContext.getOut().print(" class=\"" + cssClass + "\"");
		}
		if (StringUtils.isNotEmpty(title)) {
			RequestContext rc = getRequestContext();

			pageContext.getOut().print(" title=\"" + rc.getMessageSource().getMessage(title, null, title, rc.getLocale()) + "\"");
		}
		pageContext.getOut().print(">");

		return EVAL_BODY_INCLUDE;

	}

	/**
	 * Establece el estilo css de la cabecera de la columna.
	 *
	 * @param cssClass Clase css de la cabecera de la columna.
	 */
	public void setCssClass(String cssClass) throws JspException {
		this.cssClass = ExpressionEvaluationUtils.evaluateString(CSS_CLASS_ATTRIBUTE, cssClass, this.pageContext);
	}

	/**
	 * Establece el estilo de los datos de la columna.
	 *
	 * @param cssClassColumn Clase css de los datos de la columna.
	 *
	 * @throws JspException Error al evaluar el valor.
	 */
	public void setCssClassColumn(String cssClassColumn) throws JspException {
		this.cssClassColumn = ExpressionEvaluationUtils.evaluateString(CSS_CLASS_COLUMN_ATTRIBUTE, cssClassColumn, this.pageContext);
	}

	/**
	 * Establece el nombre de la variable del radiobotón en una columna de este tipo.
	 *
	 * @param nameRadiobutton Nombre del radiobotón en una columna de radiobotones.
	 *
	 * @throws JspException Error al evaluar el valor.
	 */
	public void setNameRadiobutton(String nameRadiobutton) throws JspException {
		this.nameRadiobutton = ExpressionEvaluationUtils.evaluateString(NAME_RADIO_ATTRIBUTE, nameRadiobutton, this.pageContext);
	}

	/**
	 * Establece el flag columna en la que se puede buscar.
	 *
	 * @param buscar true, se permitirá buscar en la columna; false, en otro caso.
	 *
	 * @throws JspException Error al evaluar el valor.
	 */
	public void setSearchable(String buscar) throws JspException {
		this.buscar = ExpressionEvaluationUtils.evaluateBoolean(BUSCAR_ATTRIBUTE, buscar, this.pageContext);
	}

	/**
	 * Establece el flag de ordenación. True, será una columna ordenable; false, no.
	 *
	 * @param ordenar Flag que permite ordenar la columna.
	 *
	 * @throws JspException Error al evaluar el valor.
	 */
	public void setSortable(String ordenar) throws JspException {
		this.ordenar = ExpressionEvaluationUtils.evaluateBoolean(ORDENAR_ATTRIBUTE, ordenar, this.pageContext);
	}

	/**
	 * Establece el atributo title de la columna.
	 *
	 * @param title El atributo title de la columna.
	 *
	 * @throws JspException Error al evaluar el valor.
	 */
	public void setTitle(String title) throws JspException {
		this.title = ExpressionEvaluationUtils.evaluateString(TITLE_ATTRIBUTE, title, this.pageContext);
	}

	/**
	 * Establece el falg de columna visible o no.
	 *
	 * @param visible Es una columna visible; false, no lo es.
	 *
	 * @throws JspException Error al evaluar el valor.
	 */
	public void setVisible(String visible) throws JspException {
		this.visible = ExpressionEvaluationUtils.evaluateBoolean(VISIBLE_ATTRIBUTE, visible, this.pageContext);
	}
}
