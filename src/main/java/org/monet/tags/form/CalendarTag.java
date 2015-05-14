package org.monet.tags.form;

import freemarker.template.*;
import java.io.IOException;
import java.lang.annotation.Annotation;
import java.util.*;
import javax.servlet.jsp.JspException;
import javax.validation.constraints.*;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.monet.freemarker.FreemarkerParser;
import org.monet.meta.MetadataParserFormatAnnotation;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.util.Assert;
import org.springframework.web.servlet.tags.form.TagWriter;
import org.springframework.web.util.ExpressionEvaluationUtils;

/**
 * Tag que renderiza un input con un calendario de jQuery. Se puede indicar el rango de la fecha.
 */
public class CalendarTag extends InputMonetTag implements FormatAnnotationTag {
	private static final long serialVersionUID = 4879873609732938373L;

	/** Atributo de fecha mínima en el calendario */
	public static final String MINDATE_ATTRIBUTE = "minDate";

	/** Atributo de fecha máxima en el calendario */
	public static final String MAXDATE_ATTRIBUTE = "maxDate";

	/** Atributo de fecha máxima en el calendario */
	public static final String NUMBER_OF_MONTHS_ATTRIBUTE = "numberOfMonths";

	/** Atributo de selector de mes */
	public static final String CHANGE_MONTH_ATTRIBUTE = "changeMonth";

	/** Atributo de selector de año */
	public static final String CHANGE_YEAR_ATTRIBUTE = "changeYear";

	/** Flag para mostrar el icono del calendario para levantar la capa */
	public static final String ICON_TRIGGER_ATTRIBUTE = "iconTrigger";

	/** Atributo de formato de la fecha */
	private static final String DATE_FORMAT_ATTRIBUTE = "dateFormat";

	/** Atributo de formato de la hora*/
	private static final String TIME_FORMAT_ATTRIBUTE = "timeFormat";

	/** Atributo de fecha mínima en el calendario */
	protected String minDate;

	/** Atributo de fecha máxima en el calendario */
	protected String maxDate;

	/** Atributo de selector de mes */
	protected Boolean changeMonth = Boolean.FALSE;

	/** Atributo de selector de año */
	protected Boolean changeYear = Boolean.FALSE;

	/** Atributo de número de meses a mostrar. Por defecto 1 */
	protected Integer numberOfMonths = 1;

	/** Flag para mostrar el icono del calendario para levantar la capa */
	protected Boolean iconTrigger = Boolean.FALSE;

	/**
	 * Implementa el interface para obtener la anotación de formato para un m:calendar.
	 *
	 * @param annotationList Lista de anotaciones del atributo.
	 *
	 * @return La anotación de formato o null, si no la hay.
	 */
	@Override
	public Annotation getFormatAnnotation(List<Annotation> annotationList) {
		Assert.notNull(annotationList);

		for (Annotation a : annotationList) {
			if (a.annotationType().isAssignableFrom(DateTimeFormat.class)) {
				return a;
			}
		}
		return null;
	}

	/**
	 * Establece el valor del atributo '<code>changeMonth</code>'. Puede ser una expresión regular.
	 *
	 * @param changeMonth Flag para activar el selector de mes.
	 */
	public void setChangeMonth(String changeMonth) throws JspException {
		this.changeMonth = evaluateBoolean(CHANGE_MONTH_ATTRIBUTE, changeMonth);
	}

	/**
	 * Establece el valor del atributo '<code>changeYear</code>'. Puede ser una expresión regular.
	 *
	 * @param changeYear Flag para activar el selector de año.
	 */
	public void setChangeYear(String changeYear) throws JspException {
		this.changeYear = evaluateBoolean(CHANGE_YEAR_ATTRIBUTE, changeYear);
	}

	/**
	 * Establece el valor del atributo '<code>iconTrigger</code>'. Puede ser una expresión regular.
	 *
	 * @param iconTrigger Flag para activar el calendario como trigger de la capa.
	 */
	public void setIconTrigger(String iconTrigger) throws JspException {
		this.iconTrigger = evaluateBoolean(ICON_TRIGGER_ATTRIBUTE, iconTrigger);
	}

	/**
	 * Establece el valor del atributo '<code>maxDate</code>'. Puede ser una expresión regular.
	 *
	 * @param maxDate Fecha máxima permitida en el calendario.
	 */
	public void setMaxDate(String maxDate) throws JspException {
		this.maxDate = (String)evaluate(MAXDATE_ATTRIBUTE, maxDate);
	}

	/**
	 * Establece el valor del atributo '<code>minDate</code>'. Puede ser una expresión regular.
	 *
	 * @param minDate Fecha mínima permitida en el calendario.
	 */
	public void setMinDate(String minDate) throws JspException {
		this.minDate = (String)evaluate(MINDATE_ATTRIBUTE, minDate);
	}

	/**
	 * Establece el valor del atributo '<code>numberOfMonths</code>'. Puede ser una expresión regular.
	 *
	 * @param numberOfMonths Número de meses que mostrará el calendario.
	 */
	public void setNumberOfMonths(String numberOfMonths) throws JspException {
		this.numberOfMonths = ExpressionEvaluationUtils.evaluateInteger(NUMBER_OF_MONTHS_ATTRIBUTE, numberOfMonths, this.pageContext);
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
		if (!novalidate) {
			//Si no trae un format annotation de algún tipo, no podemos crear el calendar con un formato compatible,
			//pues un constructor para Date o DateTime no siempre existe con distintos locales.
			Annotation formatAnnotation = getFormatAnnotation(annotationFormatList);

			if (formatAnnotation != null) {
				// Generamos en código de la validación js antes de llamar al renderizado propio del form de Spring
				tagWriter.startTag("script");
				tagWriter.writeOptionalAttributeValue("type", "text/javascript");

				//Los datos para el template
				Map<String, Object> data = new HashMap<String, Object>();

				//Identificador del input para linkarlo con el calendar
				data.put("id", resolveId());

				//Si la fecha mínima está vacía y existe una anotación de future, ponemos minDate a 0 para que la fecha seleccionada sea futura.
				String minimaDate = StringUtils.defaultString(minDate);
				if (minimaDate.isEmpty() && hasFutureAnnotation(annotationFormatList)) {
					minimaDate = "+1d";
				}
				data.put(MINDATE_ATTRIBUTE, minimaDate);

				//Si la fecha máxima está vacía y existe una anotación de past, ponemos maxDate a 0 para que la fecha seleccionada sea pasada.
				String maximaDate = StringUtils.defaultString(maxDate);
				if (maximaDate.isEmpty() && hasPastAnnotation(annotationFormatList)) {
					maximaDate = "0";
				}
				data.put(MAXDATE_ATTRIBUTE, maximaDate);

				//Formato para el calendar, de acuerdo con la anotación.
				String[] format = getFormatUpdated(formatAnnotation);
				data.put(DATE_FORMAT_ATTRIBUTE, format[0]);
				data.put(TIME_FORMAT_ATTRIBUTE, format[1]);

				//Selector de mes y año
				data.put(CHANGE_MONTH_ATTRIBUTE, changeMonth.toString());
				data.put(CHANGE_YEAR_ATTRIBUTE, changeYear.toString());

				//Número de meses a mostrar
				data.put(NUMBER_OF_MONTHS_ATTRIBUTE, numberOfMonths);

				//¿Se levantará el calendario al pinchar en el icono del calendar o al entrar en el input?
				data.put(ICON_TRIGGER_ATTRIBUTE, iconTrigger.toString());
				if (iconTrigger) {
					setSize("16");  //Para el hueco del icono
				}

				//El idioma inglés es el de defecto, no ponemos 'en', sino, '' 
				Locale locale = getRequestContext().getLocale();
				if (locale.equals(Locale.ENGLISH)) {
					data.put("locale", StringUtils.EMPTY);
				} else {
					data.put("locale", locale.getLanguage());
				}

				try {
					Template template = FreemarkerParser.getInstance().getTemplate("datePicker.ftl");
					tagWriter.appendValue(FreeMarkerTemplateUtils.processTemplateIntoString(template, data));
				} catch (IOException e) {
					throw new JspException(e);
				} catch (TemplateException e) {
					throw new JspException(e);
				}
				tagWriter.endTag();
			}
		}
		return super.writeTagContent(tagWriter);
	}

	/**
	 * Obtiene el formato del DateTimeFormat adaptado al datepicker de jQuery.
	 *
	 * @param pattern Patrón de la anotación.
	 *
	 * @return Formato a utilizar en el input para mostrar el calendario.
	 */
	private String[] getFormatUpdated(Annotation a) {
		Assert.isAssignable(DateTimeFormat.class, a.getClass());

		DateTimeFormat dtfAnnotation = (DateTimeFormat)a;

		String pattern = MetadataParserFormatAnnotation.getPattern(dtfAnnotation);

		return pattern2Js(pattern);
	}

	/**
	 * Comprueba si entre la lista de anotaciones está {@link javax.validation.constraints.Future}.
	 *
	 * @param annotationList Lista de anotaciones del campo.
	 *
	 * @return True, si está la anotación {@link javax.validation.constraints.Future}; false, en otro caso.
	 */
	private boolean hasFutureAnnotation(List<Annotation> annotationList) {
		Assert.notNull(annotationList);

		for (Annotation a : annotationList) {
			if (a.annotationType().isAssignableFrom(Future.class)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Comprueba si entre la lista de anotaciones está {@link javax.validation.constraints.Past}.
	 *
	 * @param annotationList Lista de anotaciones del campo.
	 *
	 * @return True, si está la anotación {@link javax.validation.constraints.Past}; false, en otro caso.
	 */
	private boolean hasPastAnnotation(List<Annotation> annotationList) {
		Assert.notNull(annotationList);

		for (Annotation a : annotationList) {
			if (a.annotationType().isAssignableFrom(Past.class)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Convertimos un pattern de java a otro de javascript válido para jQuery. Las posibilidades son:
	 * <ul>
	 * <li>Y/y: year       -> y: year</li>
	 * <li>M: month        -> m: month</li>
	 * <li>d: day          -> d: day</li>
	 * <li>H/h: hour       -> h: hour</li>
	 * <li>m: minutes      -> m: minutes</li>
	 * <li>s: seconds      -> s: seconds</li>
	 * <li>S: milliseconds -> l: millis</li>
	 * <li>Z: zone         -> z: zone</li>
	 * </ul>
	 *
	 * @param pattern El pattern de java.
	 *
	 * @return El pattern del dateFormat y del timeFormat.
	 */
	private String[] pattern2Js(String pattern) {
		int posYear = StringUtils.indexOfIgnoreCase(pattern, "y");
		if (posYear == StringUtils.INDEX_NOT_FOUND) {
			posYear = Integer.MAX_VALUE;
		}

		int posMonth = StringUtils.indexOf(pattern, 'M');
		if (posMonth == StringUtils.INDEX_NOT_FOUND) {
			posMonth = Integer.MAX_VALUE;
		}

		int posDay = StringUtils.indexOf(pattern, 'd');
		if (posDay == StringUtils.INDEX_NOT_FOUND) {
			posDay = Integer.MAX_VALUE;
		}

		int posDate = NumberUtils.min(posYear, posMonth, posDay);

		int posHour = StringUtils.indexOfIgnoreCase(pattern, "H");
		if (posHour == StringUtils.INDEX_NOT_FOUND) {
			posHour = Integer.MAX_VALUE;
		}

		int posMinute = StringUtils.indexOf(pattern, 'm');
		if (posMinute == StringUtils.INDEX_NOT_FOUND) {
			posMinute = Integer.MAX_VALUE;
		}

		int posSecond = StringUtils.indexOf(pattern, 's');
		if (posSecond == StringUtils.INDEX_NOT_FOUND) {
			posSecond = Integer.MAX_VALUE;
		}

		int posTime = NumberUtils.min(posHour, posMinute, posSecond);

		String date = "";
		String time = "";
		if (posDate < posTime) {
			if (posDate != Integer.MAX_VALUE) {
				date = StringUtils.substring(pattern, posDate, Math.min(posTime, pattern.length())).trim();
			}
			if (posTime != Integer.MAX_VALUE) {
				time = StringUtils.substring(pattern, posTime, pattern.length()).trim();
			}
		} else {
			if (posTime != Integer.MAX_VALUE) {
				time = StringUtils.substring(pattern, posTime, Math.min(posDate, pattern.length())).trim();
			}
			if (posDate != Integer.MAX_VALUE) {
				date = StringUtils.substring(pattern, posDate, pattern.length()).trim();
			}
		}

		// Sustituimos las M mayúsculas del mes por minúsculas y cada dos 'y' del año por una sola
		date = date.replaceAll("M", "m").replaceAll("yy", "y");

		// - Reemplazamos la hora, la zona y los milisegundos
		time = time.replaceAll("SSS", "l").replace('H', 'h').replace('Z', 'z');

		return new String[] {date, time};
	}
}
