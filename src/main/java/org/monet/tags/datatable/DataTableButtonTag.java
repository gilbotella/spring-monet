package org.monet.tags.datatable;

import javax.servlet.jsp.JspException;
import org.springframework.util.Assert;
import org.springframework.web.servlet.tags.HtmlEscapingAwareTag;
import org.springframework.web.util.ExpressionEvaluationUtils;

/**
 * Define un botón al pie en un datatable.
 */
public class DataTableButtonTag extends HtmlEscapingAwareTag {
	private static final long serialVersionUID = -7653057784039058839L;

	// Atributo con el texto del botón
	public static final String LABEL_ATTRIBUTE = "label";

	// Atributo con la función a ejecutar en el click
	public static final String FUNCTION_ATTRIBUTE = "function";

	// Atributo con el texto del botón
	private String label;

	// Atributo con la función a ejecutar en el click
	private String function;

	// Componente padre donde se volcará la información.
	private DataTableTag dataTable;

	/**
	 * Limpia los datos almacenados.
	 */
	@Override
	public void doFinally() {
		super.doFinally();
		dataTable = null;
	}

	/**
	 * Al inicio del tag, validamos que esté bajo un datatable. Guardamos los valores en el datatable para generar la salida al final.
	 *
	 * @return Continúa con el resto de componentes.
	 *
	 * @throws JspException Error al parsear un botón del pie de la tabla.
	 */
	@Override
	public int doStartTagInternal() {
		Assert.notNull(findAncestorWithClass(this, DataTableButtonsTag.class), "El tag dtButton debe ser descendiente del tag dtButtons");

		dataTable = (DataTableTag)findAncestorWithClass(this, DataTableTag.class);

		Assert.notNull(dataTable, "El tag dtButton debe ser descendiente del tag datatable");

		dataTable.addButtonInfo(label, function);

		return EVAL_BODY_INCLUDE;
	}

	/**
	 * Establece la función a ejecutar cuando se selecciona el botón.
	 *
	 * @param function Función que se lanzará al pinchar sobre el botón.
	 */
	public void setFunction(String function) throws JspException {
		this.function = ExpressionEvaluationUtils.evaluateString(FUNCTION_ATTRIBUTE, function, this.pageContext);
	}

	/**
	 * Establece el label del botón.
	 *
	 * @param label El texto del botón. Puede ser una etiqueta.
	 */
	public void setLabel(String label) throws JspException {
		this.label = ExpressionEvaluationUtils.evaluateString(LABEL_ATTRIBUTE, label, this.pageContext);
	}
}
