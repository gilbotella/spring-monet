package org.monet.tags.datatable;

import org.springframework.util.Assert;
import org.springframework.web.servlet.tags.HtmlEscapingAwareTag;

/**
 * Define el nodo donde van los buttons.
 */
public class DataTableButtonsTag extends HtmlEscapingAwareTag {
	private static final long serialVersionUID = -7653057784039058839L;

	/**
	 * Validamos que esté en el sitio esperado.
	 *
	 * @return Continúa con la lista de botones.
	 */
	@Override
	public int doStartTagInternal() {
		Assert.notNull(findAncestorWithClass(this, DataTableTag.class), "El tag dtButton debe ser descendiente del tag datatable");

		return EVAL_BODY_INCLUDE;
	}
}
