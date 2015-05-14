package org.monet.meta;

import org.apache.commons.lang.StringUtils;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.format.annotation.NumberFormat;
import org.springframework.format.annotation.NumberFormat.Style;

/**
 * Parseador de las anotaciones de formateao.
 */
public class MetadataParserFormatAnnotation {
	/**
	 * Obtiene el pattern a aplicar en la validación según la anotación que acompaña al campo.
	 *
	 * @param annotation Anotación de formato fecha.
	 *
	 * @return El pattern a aplicar.
	 */
	public static String getPattern(DateTimeFormat annotation) {
		if (StringUtils.isNotEmpty(annotation.pattern())) {
			return annotation.pattern();
		} else if (annotation.iso() != ISO.NONE) {
			return forIso(annotation.iso());
		} else {
			return forStyle(annotation.style());
		}
	}

	/**
	 * Obtiene el pattern a aplicar en la validación según la anotación que acompaña al campo.
	 *
	 * @param annotation Anotación de formato fecha.
	 *
	 * @return El pattern a aplicar.
	 */
	public static String getPatternNumber(NumberFormat annotation) {
		if (StringUtils.isNotEmpty(annotation.pattern())) {
			return annotation.pattern();
		} else {
			return forStyleNumber(annotation.style());
		}
	}

	/**
	 * Obtiene el pattern para la validación en cliente a partir del ISO del DateTimeFormat.
	 *
	 * @param iso El ISO a aplicar
	 *
	 * @return Pattern en formato validable en cliente.
	 */
	private static String forIso(ISO iso) {
		switch (iso) {
			case DATE:
				return "yyyy-MM-dd";
			case DATE_TIME:
				return "yyyy-MM-dd hh:mm:ss.SSSZ";
			case TIME:
				return "hh:mm:ss.SSSZ";
			case NONE:default:
				return "";
		}
	}

	/**
	 * Obtiene el pattern para la validación en cliente a partir del style del DateTimeFormat.
	 *
	 * @param style two characters from the set {"S", "M", "L", "F", "-"}
	 *
	 * @return Pattern en formato validable en cliente.
	 */
	private static String forStyle(String style) {
		String pattern = org.joda.time.format.DateTimeFormat.patternForStyle(style, LocaleContextHolder.getLocale());

		//Eliminamos el flag de am o pm
		return StringUtils.removeEnd(pattern, "a").trim();
	}

	/**
	 * Obtiene la expresión regular para la validación en cliente a partir del style del NumberFormat.
	 *
	 * @param style el tipo de dato.
	 *
	 * @return Pattern en formato validable en cliente.
	 */
	private static String forStyleNumber(Style style) {
		switch (style) {
			case CURRENCY:
				return "(\\\\+|-)?((\\\\d+(\\\\.\\\\d+)?)|(\\\\.\\\\d+))";
			case NUMBER:
				return "(\\\\+|-)?((\\\\d+((\\\\.|,)\\\\d+)?)|((\\\\.|,)\\\\d+))";
			case PERCENT:
				return "(\\\\+|-)?(((\\\\d+((\\\\.|,)\\\\d+)?)|((\\\\.|,)\\\\d+))[ ]?%|((\\\\d+(\\\\.\\\\d+)?)|(\\\\.\\\\d+)))";
			default:
				return "";
		}
	}
}
