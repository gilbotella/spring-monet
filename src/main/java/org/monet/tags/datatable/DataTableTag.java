package org.monet.tags.datatable;

import freemarker.template.*;
import java.io.*;
import java.util.*;
import javax.servlet.jsp.JspException;
import org.apache.commons.lang.StringUtils;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;
import org.monet.freemarker.FreemarkerParser;
import org.monet.style.TagStyles;
import org.monet.tags.datatable.jb.*;
import org.springframework.context.MessageSource;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.util.Assert;
import org.springframework.web.servlet.support.RequestContext;
import org.springframework.web.servlet.tags.HtmlEscapingAwareTag;
import org.springframework.web.util.ExpressionEvaluationUtils;

/**
 * Componente datatable.
 */
public class DataTableTag extends HtmlEscapingAwareTag {
	private static final long serialVersionUID = 4202406642439494575L;
	private static final String DATATABLE_TEMPLATE = "datatable.ftl";

	// Atributo del dibujado de la fila
	public static final String ON_ROW_DRAW_ATTRIBUTE = "onRowDraw";

	// Atributo del detalle de una fila
	public static final String ON_FORMAT_DETAILS_ATTRIBUTE = "onFormatDetails";

	// Atributo del init de la tabla
	public static final String ON_INIT_ATTRIBUTE = "onInit";

	// Atributo con los datos de la tabla
	public static final String JSON_DATA_ATTRIBUTE = "jsonData";

	// Atributo flag guardar el estado
	public static final String SAVE_STATE_ATTRIBUTE = "saveState";

	// Atributo flag para poder seleccionar el rango de paginación
	public static final String LENGTH_CHANGE_ATTRIBUTE = "lengthChange";

	// Atributo con el summary de la tabla
	public static final String SUMMARY_ATTRIBUTE = "summary";

	// Atributo para activar el filter o no
	public static final String WITH_FILTER_ATTRIBUTE = "withFilter";

	// Atributo del dibujado de la fila
	protected String onRowDraw;

	// Atributo del detalle de una fila
	protected String onFormatDetails;

	// Atributo del init de la tabla
	protected String onInit;

	// Atributo con el summary de la tabla
	protected String summary;

	// / Atributo con los datos de la tabla
	protected Object jsonData;

	// / Atributo flag guardar el estado
	protected Boolean saveState = Boolean.TRUE;

	// Atributo flag para poder seleccionar el rango de paginación
	protected Boolean lengthChange = Boolean.TRUE;

	// / Atributo flag para mostrar o no el filtro
	protected Boolean withFilter = Boolean.TRUE;

	// Columna ordenada por defecto. Este dato lo tiene el <code>DataTableHeadTag</code>
	private Integer defOrdCol = -1;

	// Ordenación ascendente o descendente. Este dato lo tiene el <code>DataTableHeadTag</code>
	private String defOrd;

	// Datos de las columnas. Lo irá rellenando el <code>DataTableColumnTag</code>.
	private List<ColumnInfo> columnas = new ArrayList<ColumnInfo>();

	// Datos de los botones. Lo irá rellenando el <code>DataTableButonTag</code>.
	private List<ButtonInfo> botones = new ArrayList<ButtonInfo>();

	/**
	 * Añade la información de los botones.
	 * 
	 * @param label El label del botón.
	 * @param function La función que se ejecutará al hacer click.
	 */
	public void addButtonInfo(String label, String function) {
		botones.add(new ButtonInfo(label, function));
	}

	/**
	 * Añade la información de una columna.
	 * 
	 * @param cssClassColumn Clase de la columna.
	 * @param buscar Flag para permitir buscar por la columna.
	 * @param ordenar Flag para permitir ordenar por la columna.
	 * @param visible Flag para columna visible o no.
	 * @param details Flag para columna de tipo detalle o no.
	 * @param radiobutton Falg para columna de radiobotón o no.
	 * @param nameRadiobutton Nombre del radiobotón si es una columna de radiobotón.
	 */
	public void addColumnInfo(String cssClassColumn, boolean buscar, boolean ordenar, boolean visible, boolean details,
			boolean radiobutton, String nameRadiobutton) {
		columnas.add(new ColumnInfo(cssClassColumn, buscar, ordenar, visible, details, radiobutton, nameRadiobutton));
	}

	/**
	 * Cierra el bloque '<code>table</code>'.
	 * 
	 * @return Flag para el renderizado del resto de tags internos.
	 * 
	 * @throws JspException Error al renderizar la salida de la tabla.
	 */
	@Override
	public int doEndTag() throws JspException {
		try {
			pageContext.getOut().print("<tbody><tr>");
			for (int i = 0; i < columnas.size(); i++) {
				pageContext.getOut().print("<td></td>");
			}
			pageContext.getOut().print("</tr></tbody></table>");

			writeDataTable();

			return EVAL_PAGE;
		} catch (IOException io) {
			throw new JspException(io);
		}
	}

	/**
	 * Limpia los datos almacenados.
	 */
	@Override
	public void doFinally() {
		super.doFinally();
		defOrdCol = -1;
		defOrd = null;
		columnas = new ArrayList<ColumnInfo>();
		botones = new ArrayList<ButtonInfo>();
	}

	/**
	 * Método para el inicio del tag.
	 * 
	 * @return Flag para continuar con el renderizado del resto de componentes internos.
	 * 
	 * @throws IOException Error al renderizar la salida de la tabla.
	 */
	@Override
	public int doStartTagInternal() throws IOException {
		pageContext.getOut().print("<table ");

		if (StringUtils.isNotEmpty(id)) {
			pageContext.getOut().print(" id=\"" + id + "\"");
		}
		pageContext.getOut().print(" class=\"" + TagStyles.DT_TABLE_STYLE + "\"");
		if (StringUtils.isNotEmpty(summary)) {
			pageContext.getOut().print(" summary=\"" + summary + "\"");
		}
		pageContext.getOut().print(">");

		return EVAL_BODY_INCLUDE;
	}

	/**
	 * Establece la ordenación por defecto: asc o desc. No puede ser una expresión regular.
	 * 
	 * @param defOrd Ordenación por defecto.
	 */
	public void setDefOrd(String defOrd) {
		this.defOrd = defOrd;
	}

	/**
	 * Establece la columna ordenada por defecto. No puede ser una expresión regular.
	 * 
	 * @param defOrdCol Columna ordenada por defecto.
	 */
	public void setDefOrdCol(Integer defOrdCol) {
		this.defOrdCol = defOrdCol;
	}

	/**
	 * Establece los datos de la tabla en formato json.
	 * 
	 * @param jsonData Datos de la tabla en formato json.
	 * 
	 * @throws JspException Error al evaluar la expresión regular que nos da como resultado los datos de la tabla.
	 */
	public void setJsonData(String jsonData) throws JspException {
		this.jsonData = ExpressionEvaluationUtils.evaluate(JSON_DATA_ATTRIBUTE, jsonData, this.pageContext);
	}

	/**
	 * Flag para que el usuario pueda cambiar la paginación o no.
	 * 
	 * @param lengthChange Flag para mostrar el desplegable de paginación.
	 * 
	 * @throws JspException Error al evaluar la expresión regular que nos da como resultado el valor.
	 */
	public void setLengthChange(String lengthChange) throws JspException {
		this.lengthChange = ExpressionEvaluationUtils.evaluateBoolean(LENGTH_CHANGE_ATTRIBUTE, lengthChange, this.pageContext);
	}

	/**
	 * Flag para que activar el filtro de la tabla.
	 * 
	 * @param withFilter Flag para mostrar el filtro de la tabla.
	 * 
	 * @throws JspException Error al evaluar la expresión regular que nos da como resultado el valor.
	 */
	public void setWithFilter(String withFilrer) throws JspException {
		this.withFilter = ExpressionEvaluationUtils.evaluateBoolean(WITH_FILTER_ATTRIBUTE, withFilrer, this.pageContext);
	}

	/**
	 * Establece la función que se ejecutará en el pintado del detalle de una fila.
	 * 
	 * @param onFormatDetails Función que se ejecutará en el pintado del detalle de una fila.
	 * 
	 * @throws JspException Error al evaluar la expresión regular que nos da como resultado el valor.
	 */
	public void setOnFormatDetails(String onFormatDetails) throws JspException {
		this.onFormatDetails = ExpressionEvaluationUtils.evaluateString(ON_FORMAT_DETAILS_ATTRIBUTE, onFormatDetails, this.pageContext);
	}

	/**
	 * Establece la función inicial que ejecutará la tabla.
	 * 
	 * @param onInit Función que se ejecutará al inicio.
	 * 
	 * @throws JspException Error al evaluar la expresión regular que nos da como resultado el valor.
	 */
	public void setOnInit(String onInit) throws JspException {
		this.onInit = ExpressionEvaluationUtils.evaluateString(ON_INIT_ATTRIBUTE, onInit, this.pageContext);
	}

	/**
	 * Establece la función que se ejecutará en el pintado de cada fila.
	 * 
	 * @param onRowDraw Función que se ejecutará en el pintado de cada fila.
	 * 
	 * @throws JspException Error al evaluar la expresión regular que nos da como resultado el valor.
	 */
	public void setOnRowDraw(String onRowDraw) throws JspException {
		this.onRowDraw = ExpressionEvaluationUtils.evaluateString(ON_ROW_DRAW_ATTRIBUTE, onRowDraw, this.pageContext);
	}

	/**
	 * Establece el flag para guardar en una cookie el estado de la tabla para la siguiente vez.
	 * 
	 * @param saveState True, conserva el estado de la tabla (ordenación,...); false, no lo hace.
	 * 
	 * @throws JspException Error al evaluar la expresión regular que nos da como resultado el valor.
	 */
	public void setSaveState(String saveState) throws JspException {
		this.saveState = ExpressionEvaluationUtils.evaluateBoolean(SAVE_STATE_ATTRIBUTE, saveState, this.pageContext);
	}

	/**
	 * Establece el summary de la tabla.
	 * 
	 * @param summary Texto descriptivo resumen de la información de la tabla.
	 * 
	 * @throws JspException Error al evaluar la expresión regular que nos da como resultado el valor.
	 */
	public void setSummary(String summary) throws JspException {
		this.summary = ExpressionEvaluationUtils.evaluateString(SUMMARY_ATTRIBUTE, summary, this.pageContext);
	}

	/**
	 * Obtiene la información de las columnas en formato json.
	 * 
	 * @return Json con la información de las columnas.
	 * 
	 * @throws IOException Error al serializar a json la información de las columnas.
	 */
	private String getColumnsJson() throws IOException {
		ObjectMapper om = new ObjectMapper();
		StringWriter writer = new StringWriter();

		om.writeValue(writer, columnas);

		return writer.toString();
	}

	/**
	 * Obtenemos el renderizado de la lista de botones al pie de la tabla.
	 * 
	 * @return Salida json para incluir en el datatable botones al pie.
	 */
	private String getTableTools() throws JspException {
		// Voy a buscar la columna que es radiobotón.
		ColumnInfo colRadio = null;
		for (ColumnInfo ci : columnas) {
			if (ci.isRadiobutton()) {
				colRadio = ci;
			}
		}
		Assert.notNull(colRadio, "Debe exitir una columna de radiobotones para usar la botonera");

		// Error si no hay selección de fila
		RequestContext rc = getRequestContext();
		MessageSource ms = rc.getMessageSource();
		Locale locale = rc.getLocale();

		String textoAlert = ms.getMessage("monet.SeleccionaFila", null, "Please, select a row", locale);

		// Creo el tableTool con los botones del datatable
		StringBuffer text = new StringBuffer(512);
		text.append("{ \"aButtons\": [");
		for (ButtonInfo bi : botones) {
			text.append("{ \"sExtends\": \"monet_owner\", \"sButtonText\": \"")
					.append(ms.getMessage(bi.getLabel(), null, bi.getLabel(), locale))
					.append("\",\"fnClick\": function( nButton, oConfig ) {var opc = $(\"input[name='")
					.append(colRadio.getNameRadiobutton()).append("']:checked\").val(); if(opc == undefined) { alert(\"")
					.append(textoAlert).append("\"); } else { ").append(bi.getFunction()).append("(opc);}}},");
		}
		return StringUtils.removeEnd(text.toString(), ",") + "]}";
	}

	/**
	 * Comprobamos si los datos necesitan o no paginación, por tener menos de 10 elementos.
	 * 
	 * @return Si hay 10 o menos filas, no mostramos la paginación.
	 * 
	 * @throws JspException Error al leer los datos de la tabla.
	 */
	private Boolean hasPaginacion() throws IOException {
		ObjectMapper om = new ObjectMapper();
		JsonNode lista = om.readValue((String) jsonData, JsonNode.class);
		return lista.size() > 10;
	}

	/**
	 * Escribe el contenido de la tabla a través de una plantilla de Freemarker.
	 * 
	 * @param tagWriter El writer donde escribir la salida.
	 * 
	 * @throws JspExcepcion Error al renderizar la tabla.
	 */
	private void writeDataTable() throws JspException, IOException {
		Map<String, Object> data = new HashMap<String, Object>();
		data.put("id", getId());
		data.put("tableData", jsonData);
		data.put("saveState", saveState.toString());
		data.put("lengthChange", lengthChange.toString());
		data.put("withPagination", hasPaginacion().toString());
		data.put("withFilter", withFilter.toString());
		data.put("onRowDraw", StringUtils.defaultString(onRowDraw));
		data.put("onFormatDetails", StringUtils.defaultString(onFormatDetails));
		data.put("onInit", StringUtils.defaultString(onInit));
		data.put("defOrdCol", defOrdCol);
		data.put("defOrd", StringUtils.defaultString(defOrd));
		data.put("columnsJson", getColumnsJson());
		data.put("locale", getRequestContext().getLocale().getLanguage());
		if (botones.isEmpty()) {
			data.put("sDom", "null");
			data.put("oTableTools", "{}");
		} else {
			data.put("sDom", "'lfrtip<\"clear dtspacer\">T'");
			data.put("oTableTools", getTableTools());
		}

		try {
			Template template = FreemarkerParser.getInstance().getTemplate(DATATABLE_TEMPLATE);
			String output = FreeMarkerTemplateUtils.processTemplateIntoString(template, data);
			pageContext.getOut().print("<script type=\"text/javascript\">");
			pageContext.getOut().print(output);
			pageContext.getOut().print("</script>");
		} catch (IOException e) {
			throw new JspException(e);
		} catch (TemplateException e) {
			throw new JspException(e);
		}
	}
}
