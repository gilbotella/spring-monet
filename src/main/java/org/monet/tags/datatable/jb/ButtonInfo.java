package org.monet.tags.datatable.jb;

import java.io.Serializable;

/**
 * Información de los botones.
 */
public class ButtonInfo implements Serializable {
	private static final long serialVersionUID = -8317749944471339294L;
	protected String label;
	protected String function;

	/**
	 * Crea nu nuevo botón para la tabla
	 *
	 * @param label Label del botón
	 * @param function Función que se ejecutará al hacer click.
	 */
	public ButtonInfo(String label, String function) {
		this.label = label;
		this.function = function;
	}

	/**
	 * Obtiene la función a ejecutar.
	 *
	 * @return función a ejecutar
	 */
	public String getFunction() {
		return function;
	}

	/**
	 * Obtiene el label de botón. Puede ser una etiqueta.
	 *
	 * @return Label del botón.
	 */
	public String getLabel() {
		return label;
	}
}
