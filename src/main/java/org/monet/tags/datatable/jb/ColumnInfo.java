package org.monet.tags.datatable.jb;

import java.io.Serializable;

/**
 * Información de las columnas.
 */
public class ColumnInfo implements Serializable {
	private static final long serialVersionUID = -8317749944471339294L;
	protected String cssClassColumn;
	protected boolean buscar;
	protected boolean ordenar;
	protected boolean visible;
	protected boolean details;
	protected boolean radiobutton;
	protected String nameRadiobutton;

	/**
	 * Crea unos nuevos datos para las columnas de una tabla.
	 *
	 * @param cssClassColumn Atributo class de la columna.
	 * @param buscar Flag que permite buscar en la columna o no.
	 * @param ordenar Flag que hace a la columna ordenable o no.
	 * @param visible Flag que hace a la columna visible o no.
	 * @param details Flag que indica que la columna es de tipo detalle.
	 * @param radiobutton Flag que indica que la columna es de tiporadiobutt on.
	 */
	public ColumnInfo(String cssClassColumn, boolean buscar, boolean ordenar, boolean visible, boolean details, boolean radiobutton,
	                  String nameRadiobutton) {
		this.cssClassColumn = cssClassColumn;
		this.buscar = buscar;
		this.ordenar = ordenar;
		this.visible = visible;
		this.details = details;
		this.radiobutton = radiobutton;
		this.nameRadiobutton = nameRadiobutton;
	}

	/**
	 * Obtiene el class de la columna.
	 *
	 * @return Atributo class para la columna.
	 */
	public String getCssClassColumn() {
		return cssClassColumn;
	}

	/**
	 * Obtiene el name de la variable asociada al radiobutton.
	 *
	 * @return Nombre de la variable asociada al radiobutton.
	 */
	public String getNameRadiobutton() {
		return nameRadiobutton;
	}

	/**
	 * Obtiene el flag de buscar en la columna.
	 *
	 * @return True, se buscará en la columna; false, no.
	 */
	public boolean isBuscar() {
		return buscar;
	}

	/**
	 * Obtiene el flag de si la columna es un desplegable de detalle.
	 *
	 * @return True, si la columna es de detalle; false, en otro caso.
	 */
	public boolean isDetails() {
		return details;
	}

	/**
	 * Obtiene el flag de ordenar la columna.
	 *
	 * @return True, se ordenará la columna; false, no.
	 */
	public boolean isOrdenar() {
		return ordenar;
	}

	/**
	 * Obtiene el flag de si la columna es un radio botón.
	 *
	 * @return True, si la columna es radiobotón; false, en otro caso.
	 */
	public boolean isRadiobutton() {
		return radiobutton;
	}

	/**
	 * Obtiene el flag de columna visible.
	 *
	 * @return True, columna visible; false, no.
	 */
	public boolean isVisible() {
		return visible;
	}
}
