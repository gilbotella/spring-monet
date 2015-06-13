package org.monet.meta;

import java.lang.annotation.Annotation;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Map;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;
import org.hibernate.validator.constraints.Range;
import org.hibernate.validator.constraints.URL;
import org.joda.time.DateTime;
import org.monet.meta.jb.Metadata;
import org.monet.meta.jb.Metadata.TipoMetadata;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;
import org.springframework.util.Assert;

/**
 * Parseador de las anotaciones a tipos de metainformación, que se renderizarán en validaciones de cliente.
 */
public class MetadataParser {
	private static final String DECIMAL_FORMAT = "####.##########";
	private static final DecimalFormat DECIMAL_FORMATTER = new DecimalFormat(DECIMAL_FORMAT);

	/**
	 * Obtiene el metadata para una determinada anotación.
	 * 
	 * @param a la anotación del campo que hace binding.
	 * 
	 * @return Metadata asociado al campo.
	 */
	public static Metadata getMetadata(Annotation a, Class<?> tipoDato) {
		Metadata mt = getMetadataFromJSR303(a, tipoDato);
		if (mt == null) {
			mt = getMetadataFromHibernateValidator(a, tipoDato);
		}
		return mt;
	}

	/**
	 * Obtiene el metadata para un campo a partir del tipo de dato.
	 * 
	 * @param tipoDato la clase del atributo.
	 * 
	 * @return Metadata asociado al campo.
	 */
	public static List<Metadata> getMetadatasFromType(Class<?> tipoDato, Annotation formatAnnotation) {
		List<Metadata> metadataList;
		if (String.class.isAssignableFrom(tipoDato)) {
			metadataList = null;
		} else if (BigDecimal.class.isAssignableFrom(tipoDato)) {
			metadataList = getMetadatasFromDecimalType(formatAnnotation);
		} else if (Integer.class.isAssignableFrom(tipoDato) || Long.class.isAssignableFrom(tipoDato)
				|| Short.class.isAssignableFrom(tipoDato) || Byte.class.isAssignableFrom(tipoDato)
				|| BigInteger.class.isAssignableFrom(tipoDato)) {
			metadataList = getMetadatasFromNotDecimalType();
		} else if (DateTime.class.isAssignableFrom(tipoDato) || Date.class.isAssignableFrom(tipoDato)) {
			metadataList = getMetadatasFromDateTimeType(formatAnnotation);
		} else {
			metadataList = null;
		}
		return metadataList;
	}

	/**
	 * Obtiene el metadata para la anotación <code>DecimalMax</code>.
	 * 
	 * @param a Anotación del campo.
	 * 
	 * @return Valor decimal máximo que puede contener un atributo anotado como <code>DecimalMax</code>.
	 */
	private static Metadata getMetadataFromDecimalMax(Annotation a) {
		DecimalMax decimalMax = (DecimalMax) a;

		String msg = null;
		String param = null;
		if (decimalMax.message().charAt(0) != '{') {
			msg = decimalMax.message();
			param = DECIMAL_FORMATTER.format(Double.valueOf(decimalMax.value()));
		}
		return new Metadata(TipoMetadata.MAX, decimalMax.value(), msg, param);
	}

	/**
	 * Obtiene el metadata para la anotación <code>DecimalMin</code>.
	 * 
	 * @param a Anotación del campo.
	 * 
	 * @return Valor decimal mínimo que puede contener un atributo anotado como <code>DecimalMin</code>.
	 */
	private static Metadata getMetadataFromDecimalMin(Annotation a) {
		DecimalMin decimalMin = (DecimalMin) a;

		String msg = null;
		String param = null;
		if (decimalMin.message().charAt(0) != '{') {
			msg = decimalMin.message();
			param = DECIMAL_FORMATTER.format(Double.valueOf(decimalMin.value()));
		}
		return new Metadata(TipoMetadata.MIN, decimalMin.value(), msg, param);
	}

	/**
	 * Obtiene el metadata para la anotación <code>Digits</code>.
	 * 
	 * @param a Anotación del campo.
	 * 
	 * @return Número de enteros y decimales que puede tener un atributo anotado con <code>Digits</code>.
	 */
	private static Metadata getMetadataFromDigits(Annotation a) {
		Digits digits = (Digits) a;

		String msg = null;
		Integer enteros = null;
		Integer fraccion = null;

		if (digits.message().charAt(0) != '{') {
			msg = digits.message();
			enteros = digits.integer();
			fraccion = digits.fraction();
		}
		return new Metadata(TipoMetadata.DIGITS_DECIMAL, "[" + digits.integer() + ", " + digits.fraction() + "]", msg, enteros, fraccion);

	}

	/**
	 * Obtiene el metadata para la anotación <code>Email</code>.
	 * 
	 * @param a Anotación del campo.
	 * 
	 * @return Expresión regular para la validación de un atributo anotado como <code>EMail</code>.
	 */
	private static Metadata getMetadataFromEmail(Annotation a) {
		Email email = (Email) a;

		String msg = null;
		if (email.message().charAt(0) != '{') {
			msg = email.message();
		}
		return new Metadata(TipoMetadata.EMAIL, Boolean.TRUE.toString(), msg);
	}

	/**
	 * Obtiene el metadata para una determinada anotación, si es del tipo org.hibernate.validator.constraints.
	 * 
	 * @param a la anotación del campo que hace binding.
	 * 
	 * @return Metadata asociado al campo.
	 */
	private static Metadata getMetadataFromHibernateValidator(Annotation a, Class<?> tipoDato) {
		Metadata mt = null;

		// Anotaciones de Hibernate validator
		if (Email.class.isAssignableFrom(a.annotationType())) { // ----- Email ----- Aplicable a String
			if (String.class.isAssignableFrom(tipoDato)) {
				mt = getMetadataFromEmail(a);
			}
		} else if (Length.class.isAssignableFrom(a.annotationType())) { // ----- Length ----- Aplicable a String
			if (String.class.isAssignableFrom(tipoDato)) {
				mt = getMetadataFromLength(a);
			}
		} else if (NotEmpty.class.isAssignableFrom(a.annotationType())) { // ----- NotEmpty ----- Aplicable a String, Collection, Map o
																		  // Array
			if (String.class.isAssignableFrom(tipoDato) || Collection.class.isAssignableFrom(tipoDato)
					|| Map.class.isAssignableFrom(tipoDato) || tipoDato.isArray()) {
				mt = getMetadataFromNotEmpty(a);
			}
		} else if (URL.class.isAssignableFrom(a.annotationType())) { // ----- URL ----- Aplicable a String
			if (String.class.isAssignableFrom(tipoDato)) {
				mt = getMetadataFromUrl(a);
			}
		} else if (Range.class.isAssignableFrom(a.annotationType())) { // ----- Range ----- Aplicable a Number o String
			if (Number.class.isAssignableFrom(tipoDato) || String.class.isAssignableFrom(tipoDato)) {
				mt = getMetadataFromRange(a);
			}
		}
		return mt;
	}

	/**
	 * Obtiene el metadata para una determinada anotación, si es del tipo javax.validation.constraints, es decir, de la JSR-303.
	 * 
	 * @param a la anotación del campo que hace binding.
	 * 
	 * @return Metadata asociado al campo.
	 */
	private static Metadata getMetadataFromJSR303(Annotation a, Class<?> tipoDato) {
		Metadata mt = null;

		// Anotaciones de la JSR-303
		if (NotNull.class.isAssignableFrom(a.annotationType())) {
			// Aplicable a cualquier tipo de dato
			mt = getMetadataFromNotNull(a);
		} else if (DecimalMax.class.isAssignableFrom(a.annotationType())) {
			// Aplicable a Number o String
			if (Number.class.isAssignableFrom(tipoDato) || String.class.isAssignableFrom(tipoDato)) {
				mt = getMetadataFromDecimalMax(a);
			}
		} else if (DecimalMin.class.isAssignableFrom(a.annotationType())) {
			// Aplicable a Number o String
			if (Number.class.isAssignableFrom(tipoDato) || String.class.isAssignableFrom(tipoDato)) {
				mt = getMetadataFromDecimalMin(a);
			}
		} else if (Max.class.isAssignableFrom(a.annotationType())) {
			// Aplicable a Number
			if (Number.class.isAssignableFrom(tipoDato)) {
				mt = getMetadataFromMax(a);
			}
		} else if (Min.class.isAssignableFrom(a.annotationType())) {
			// Aplicable a Number
			if (Number.class.isAssignableFrom(tipoDato)) {
				mt = getMetadataFromMin(a);
			}
		} else if (Size.class.isAssignableFrom(a.annotationType())) {
			// Aplicable a String, Collection, Map o Array
			if (String.class.isAssignableFrom(tipoDato) || Collection.class.isAssignableFrom(tipoDato)
					|| Map.class.isAssignableFrom(tipoDato) || tipoDato.isArray()) {
				mt = getMetadataFromSize(a);
			}
		} else if (Pattern.class.isAssignableFrom(a.annotationType())) {
			// Aplicable a String
			if (String.class.isAssignableFrom(tipoDato)) {
				mt = getMetadataFromPattern(a);
			}
		} else if (Digits.class.isAssignableFrom(a.annotationType())) {
			// Aplicable a Number o String
			if (Number.class.isAssignableFrom(tipoDato) || String.class.isAssignableFrom(tipoDato)) {
				mt = getMetadataFromDigits(a);
			}
		}
		return mt;
	}

	/**
	 * Obtiene el metadata para la anotación <code>Length</code>.
	 * 
	 * @param a Anotación del campo.
	 * 
	 * @return Longitud mínima y máxima que puede tener un atributo anotado con <code>Length</code>.
	 */
	private static Metadata getMetadataFromLength(Annotation a) {
		Length longitud = (Length) a;

		String msg = null;
		Integer minima = null;
		Integer maxima = null;

		if (longitud.message().charAt(0) != '{') {
			msg = longitud.message();
			minima = longitud.min();
			maxima = longitud.max();
		}
		return new Metadata(TipoMetadata.RANGELENGTH, "[" + longitud.min() + ", " + longitud.max() + "]", msg, minima, maxima);
	}

	/**
	 * Obtiene el metadata para la anotación <code>Max</code>.
	 * 
	 * @param a Anotación del campo.
	 * 
	 * @return Valor decimal máximo que puede contener un atributo anotado como <code>Max</code>.
	 */
	private static Metadata getMetadataFromMax(Annotation a) {
		Max max = (Max) a;

		String msg = null;
		String param = null;
		if (max.message().charAt(0) != '{') {
			msg = max.message();
			param = DECIMAL_FORMATTER.format(max.value());
		}
		return new Metadata(TipoMetadata.MAX, String.valueOf(max.value()), msg, param);
	}

	/**
	 * Obtiene el metadata para la anotación <code>Min</code>.
	 * 
	 * @param a Anotación del campo.
	 * 
	 * @return Valor decimal mínimo que puede contener un atributo anotado como <code>Min</code>.
	 */
	private static Metadata getMetadataFromMin(Annotation a) {
		Min min = (Min) a;

		String msg = null;
		String param = null;
		if (min.message().charAt(0) != '{') {
			msg = min.message();
			param = DECIMAL_FORMATTER.format(min.value());
		}
		return new Metadata(TipoMetadata.MIN, String.valueOf(min.value()), msg, param);
	}

	/**
	 * Obtiene el metadata para la anotación <code>NotEmpty</code>.
	 * 
	 * @param a Anotación del campo.
	 * 
	 * @return Validación para un atributo anotado con <code>NotEmpty</code>.
	 */
	private static Metadata getMetadataFromNotEmpty(Annotation a) {
		NotEmpty notEmpty = (NotEmpty) a;

		String msg = null;
		if (notEmpty.message().charAt(0) != '{') {
			msg = notEmpty.message();
		}
		return new Metadata(TipoMetadata.REQUIRED, Boolean.TRUE.toString(), msg);
	}

	/**
	 * Obtiene el metadata para la anotación <code>NotNull</code>.
	 * 
	 * @param a Anotación del campo.
	 * 
	 * @return Validación de atributo anotado con <code>NotNull</code>.
	 */
	private static Metadata getMetadataFromNotNull(Annotation a) {
		NotNull notNull = (NotNull) a;

		String msg = null;
		if (notNull.message().charAt(0) != '{') {
			msg = notNull.message();
		}
		return new Metadata(TipoMetadata.REQUIRED, Boolean.TRUE.toString(), msg);
	}

	/**
	 * Obtiene el metadata para la anotación <code>Pattern</code>.
	 * 
	 * @param a Anotación del campo.
	 * 
	 * @return La expresión regular que puede tener un atributo anotado con <code>Pattern</code>.
	 */
	private static Metadata getMetadataFromPattern(Annotation a) {
		Pattern regexp = (Pattern) a;

		String msg = null;
		String param = null;
		if (regexp.message().charAt(0) != '{') {
			msg = regexp.message();
			param = regexp.regexp();
		}
		return new Metadata(TipoMetadata.PATTERN, regexp.regexp(), msg, param);
	}

	/**
	 * Obtiene el metadata para la anotación <code>Range</code>.
	 * 
	 * @param a Anotación del campo.
	 * 
	 * @return Regla a aplicar en un atributo anotado como <code>Range</code>.
	 */
	private static Metadata getMetadataFromRange(Annotation a) {
		Range range = (Range) a;

		String msg = null;
		String minimo = null;
		String maximo = null;

		if (range.message().charAt(0) != '{') {
			msg = range.message();
			minimo = DECIMAL_FORMATTER.format(range.min());
			maximo = DECIMAL_FORMATTER.format(range.max());
		}
		return new Metadata(TipoMetadata.RANGE, "[" + range.min() + ", " + range.max() + "]", msg, minimo, maximo);
	}

	/**
	 * Obtiene el metadata para la anotación <code>Size</code>.
	 * 
	 * @param a Anotación del campo.
	 * 
	 * @return Longitud mínima y máxima que puede tener un atributo anotado con <code>Size</code>.
	 */
	private static Metadata getMetadataFromSize(Annotation a) {
		Size longitud = (Size) a;

		String msg = null;
		Integer minimo = null;
		Integer maximo = null;

		if (longitud.message().charAt(0) != '{') {
			msg = longitud.message();
			minimo = longitud.min();
			maximo = longitud.max();
		}
		return new Metadata(TipoMetadata.RANGELENGTH, "[" + longitud.min() + ", " + longitud.max() + "]", msg, minimo, maximo);
	}

	/**
	 * Obtiene el metadata para la anotación <code>Url</code>.
	 * 
	 * @param a Anotación del campo.
	 * 
	 * @return Expresión regular para validar un atributo anotado con <code>Size</code>.
	 */
	private static Metadata getMetadataFromUrl(Annotation a) {
		URL url = (URL) a;

		String msg = null;
		if (url.message().charAt(0) != '{') {
			msg = url.message();
		}
		return new Metadata(TipoMetadata.URL, Boolean.TRUE.toString(), msg);
	}

	/**
	 * Obtiene el metadata para el tipo de dato <code>DateTime</code> o <code>DateTimeRange</code>.
	 * 
	 * @return Validación para un atributo de tipo <code>DateTime</code> o <code>DateTimeRange</code>.
	 */
	private static List<Metadata> getMetadatasFromDateTimeType(Annotation formatAnnotation) {
		List<Metadata> mds = new ArrayList<Metadata>();
		if (formatAnnotation == null) {
			// No generamos código en cliente
		} else {
			Assert.isAssignable(DateTimeFormat.class, formatAnnotation.getClass());

			DateTimeFormat dtfAnnotation = (DateTimeFormat) formatAnnotation;

			mds.add(new Metadata(TipoMetadata.DATE, "'" + MetadataParserFormatAnnotation.getPattern(dtfAnnotation) + "'", null));
		}
		return mds;
	}

	/**
	 * Obtiene el metadata para el tipo de dato decimal: <code>BigDecimal</code>, <code>Double</code> o <code>Float</code>.
	 * 
	 * @return Validación para un campo de tipo <code>BigDecimal</code>, <code>Double</code> o <code>Float</code>.
	 */
	private static List<Metadata> getMetadatasFromDecimalType(Annotation formatAnnotation) {
		List<Metadata> mds = new ArrayList<Metadata>();
		if (formatAnnotation == null) {
			// Generamos código en cliente estándar
			mds.add(new Metadata(TipoMetadata.NUMBER_FORMAT, "'" + DECIMAL_FORMAT + "'", null));
		} else {
			Assert.isAssignable(NumberFormat.class, formatAnnotation.getClass());

			NumberFormat nfAnnotation = (NumberFormat) formatAnnotation;

			mds.add(new Metadata(TipoMetadata.NUMBER_FORMAT, "'" + MetadataParserFormatAnnotation.getPatternNumber(nfAnnotation) + "'",
					null));

		}
		return mds;
	}

	/**
	 * Obtiene el metadata para el tipo de dato entero: <code>Integer</code>, <code>Long</code>, <code>Short</code> o
	 * <code>BigInteger</code>,.
	 * 
	 * @return Validación para un atributo de tipo <code>Integer</code>, <code>Long</code>, <code>Short</code> o <code>BigInteger</code>.
	 */
	private static List<Metadata> getMetadatasFromNotDecimalType() {
		List<Metadata> mds = new ArrayList<Metadata>();
		mds.add(new Metadata(TipoMetadata.DIGITS, Boolean.TRUE.toString(), null));

		return mds;
	}
}
