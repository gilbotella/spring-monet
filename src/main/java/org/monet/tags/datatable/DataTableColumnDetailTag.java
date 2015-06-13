package org.monet.tags.datatable;

import java.io.IOException;
import org.monet.style.TagStyles;

/**
 * Define una columna de desplegable de detalle en un datatable.
 */
public class DataTableColumnDetailTag extends DataTableColumnTag {
	private static final long serialVersionUID = -7653057784039058839L;

	/**
	 * Antes de pintar la columna, ponemos valores fijos.
	 * 
	 * @return <code>EVAL_BODY_INCLUDE</code>, es decir, que evalúe el contenido.
	 * 
	 * @throws IOException Al renderizar la columna.
	 */
	@Override
	public int doStartTagInternal() throws IOException {
		this.cssClassColumn = TagStyles.DT_DETAIL_BUTTON_STYLE;
		this.ordenar = Boolean.FALSE;
		this.buscar = Boolean.FALSE;
		this.radiobutton = Boolean.FALSE;
		this.details = Boolean.TRUE;

		return super.doStartTagInternal();
	}
}
