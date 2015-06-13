package org.monet.meta.jb;

/**
 * Tipos de metainformación a utilizar por las validaciones del modelo.
 */
public class Metadata {
	/**
	 * Tipos de metadatos que vamos a contemplar en monet.
	 */
	public enum TipoMetadata {
		/**
		 * El valor no puede ser null o empty.
		 * 
		 * {@link javax.validations.constraints.NotNull} {@link org.hibernate.validator.constraints.NotEmpty}
		 */
		REQUIRED("required"),
		/**
		 * Debe ser una expresión email correcta.
		 * 
		 * {@link org.hibernate.validator.constraints.Email}
		 */
		EMAIL("email"),
		/**
		 * Debe ser un expresión que representa una URL.
		 * 
		 * {@link org.hibernate.validator.constraints.URL}
		 */
		URL("url"),
		/**
		 * Rango de caracteres, no tiene en cuenta si son numéricos o alfanuméricos.
		 * 
		 * {@link javax.validations.constraints.Size} {@link org.hibernate.validator.constraints.Length}
		 */
		RANGELENGTH("rangelength"),
		/**
		 * Un número con valor mínimo. Valida que sea numérico o decimal.
		 * 
		 * {@link javax.validations.constraints.DecimalMin} {@link javax.validations.constraints.Min}
		 */
		MIN("min"),
		/**
		 * Un número con valor máximo. Valida que sea numérico o decimal.
		 * 
		 * {@link javax.validations.constraints.DecimalMax} {@link javax.validations.constraints.Max}
		 */
		MAX("max"),
		/**
		 * Un número en el rango. Valida que sea numérico o decimal.
		 * 
		 * {@link org.hibernate.validator.constraints.Range}
		 */
		RANGE("range"),
		/**
		 * Valida que sea una fecha con un determinado formato, extraído de las anotaciones o del tipo de dato por defecto.
		 * 
		 * Generada cuando el tipo del dato es {@link java.util.Date} o {@link org.joda.time.DateTime}.
		 */
		DATE("dateFormat"),
		/**
		 * Valida que sea un número decimal, con separador decimal '.' y sin separador de miles. P.e.: 3152.48
		 * 
		 * Generada cuando el tipo del dato es {@link java.math.BigDecimal}.
		 */
		NUMBER("number"),
		/**
		 * Valida que sea un número con un determinado formato, extrído de las anotaciones del tipo de dato.
		 * 
		 * Generada cuando el tipo del dato es {@link java.lang.Number}.
		 */
		NUMBER_FORMAT("numberFormat"),
		/**
		 * Valida que todos los caracteres son dígitos. Válido para números enteros.
		 * 
		 * Generada cuando el tipo de dato es: {@link Integer}, {@link Byte}, {@link Short}, {@link Long} o {@link java.math.BigInteger}.
		 */
		DIGITS("digits"),
		/**
		 * Valida que es número un decimal y que tiene un número máximo de digitos enteros y decimales.
		 * 
		 * {@link org.hibernate.validator.constraints.Digits}
		 */
		DIGITS_DECIMAL("digitsdecimal"),
		/**
		 * Valida que el texto cumple el pattern indicado.
		 * 
		 * {@link org.hibernate.validator.constraints.Pattern}
		 */
		PATTERN("patron");

		// El nombre de la función de validación javascript
		private String tipo;

		/**
		 * Construye el tipo enumerado a partir del tipo.
		 * 
		 * @param tipo El tipo de metadata.
		 */
		private TipoMetadata(String tipo) {
			this.tipo = tipo;
		}

		/**
		 * Obtiene el tipo de metainformación.
		 * 
		 * @return Tipo del metadato.
		 */
		public String getValor() {
			return tipo;
		}
	}

	private TipoMetadata tipo;
	private String valor;
	private String message;
	private Object[] args;

	/**
	 * Construye el tipo de metainformación con el tipo, valor y descripción a utilizar en el texto de errpr.
	 * 
	 * @param tipo Tipo de metainformación.
	 * @param valor Valor de la propiedad.
	 * @param message El mensaje a mostrar en el error, si se produce.
	 */
	public Metadata(TipoMetadata tipo, String valor, String message, Object... args) {
		this.tipo = tipo;
		this.valor = valor;
		this.message = message;
		this.args = args;
	}

	/**
	 * Obtiene la lista de argumentos para construir el mensaje relacionado con el metadata.
	 * 
	 * @return Lista de argumentos para el mensaje.
	 */
	public Object[] getArgs() {
		return args;
	}

	/**
	 * Obtiene el mensaje de error a utilizar en la validación.
	 * 
	 * @return mensaje de error de la validación.
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * Obtiene el tipo de metadata que utilizará el validador.
	 * 
	 * @return Tipo de metadata.
	 */
	public TipoMetadata getTipo() {
		return tipo;
	}

	/**
	 * Obtiene el valor que se ha añadido a la validación. P.e. Mayor que 124.45, valor=124.5.
	 * 
	 * @return El valor utilizado para validar.
	 */
	public String getValor() {
		if (tipo.equals(TipoMetadata.PATTERN)) {
			return "'" + valor + "'";
		}
		return valor;
	}
}
