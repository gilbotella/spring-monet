package org.monet.tags.datatable;

import java.io.IOException;
import javax.servlet.jsp.JspException;
import org.springframework.util.Assert;
import org.springframework.web.servlet.tags.HtmlEscapingAwareTag;
import org.springframework.web.util.ExpressionEvaluationUtils;

/**
 * Define la cabecera del datatable
 */
public class DataTableHeadTag extends HtmlEscapingAwareTag {
	private static final long serialVersionUID = -7653057784039058839L;

	// Atributo columna ordenada por defecto
	private static final String DEF_ORD_COL_ATTRIBUTE = "defOrdCol";

	// Atributo ordenación por defecto
	private static final String DEF_ORD_ATTRIBUTE = "defOrd";

	// Atributo columna ordenada por defecto
	private Integer defOrdCol = -1;

	// Atributo ordenación por defecto
	private String defOrd;

	// El componente padre, donde volcaremos la información
	private DataTableTag dataTable;

	/**
	 * Cierra el bloque '<code>tr</code>'.
	 */
	@Override
	public int doEndTag() throws JspException {
		try {
			pageContext.getOut().print("</tr></thead>");
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
	 * Al inicio del tab, abrimos la fila de la cabecera de la tabla.
	 *
	 * @return Continúa evaluando la cabecera con las columnas.
	 *
	 * @throws IOException Error al renderizar la cabecera.
	 */
	@Override
	public int doStartTagInternal() throws IOException {
		dataTable = (DataTableTag)findAncestorWithClass(this, DataTableTag.class);

		Assert.notNull(dataTable, "El tag dtHead debe ser descendiente del tag datatable");

		dataTable.setDefOrd(defOrd);
		dataTable.setDefOrdCol(defOrdCol);

		pageContext.getOut().print("<thead><tr>");

		return EVAL_BODY_INCLUDE;
	}

	/**
	 * Establece la ordenación por defecto.
	 *
	 * @param defOrd Ordenación por defecto.
	 *
	 * @throws JspException Error al evaluar el valor.
	 */
	public void setDefOrd(String defOrd) throws JspException {
		this.defOrd = ExpressionEvaluationUtils.evaluateString(DEF_ORD_ATTRIBUTE, defOrd, this.pageContext);
	}

	/**
	 * Establece la columna que está ordenada por defecto.
	 *
	 * @param defOrdCol Columna ordenada por defecto.
	 *
	 * @throws JspException Error al evaluar el valor.
	 */
	public void setDefOrdCol(String defOrdCol) throws JspException {
		this.defOrdCol = ExpressionEvaluationUtils.evaluateInteger(DEF_ORD_COL_ATTRIBUTE, defOrdCol, this.pageContext);
	}
}
