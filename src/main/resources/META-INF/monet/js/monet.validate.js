validation = {};
validation.regional = {};

function isValidJavaNumberPattern(value, pattern) {
	var posComa = value.indexOf(",");
	var posPunto = value.indexOf(".");

	if (pattern.indexOf(",") >= 0) {
		// I can admit ',' and '.', because there is thounsads separator, but
		// they can't be overlapping.
		if (posComa >= 0 && posPunto >= 0) {
			if (posComa < posPunto) {
				return value.lastIndexOf(",") < posPunto;
			} else {
				return value.lastIndexOf(".") < posComa;
			}
		} else {
			// There is just one, either ',' or '.'.
			return true;
		}
	} else {
		// It can have one of them (and just one time), despite it will be wrong
		// (locale:en with ',') in some cases.
		return (posComa == -1 || posPunto == -1)
				&& posComa == value.lastIndexOf(",")
				&& posPunto == value.lastIndexOf(".");
	}
}

(function($) {
	jQuery.extend(jQuery.validator.methods, {
		patron : function(value, element, regexp) {
			return this.optional(element)
					|| new RegExp("^" + regexp + "$").test(value);
		},
		numberFormat : function(value, element, pattern) {
			return this.optional(element)
					|| (pattern.indexOf("(") != 0 && isValidJavaNumberPattern(
							value, pattern)) || // This is a customer pattern
					new RegExp("^" + pattern + "?$").test(value);
		},
		digits : function(value, element) {
			return this.optional(element) || /^-?\d+$/.test(value)
		},
		dateFormat : function(value, element, pattern) {
			// alert(pattern);
			return true;
		},
		digitsdecimal : function(value, element, param) {
			var expresion = "^\\d{0," + param[0] + "}";
			if (param[1] > 0) {
				expresion += "([\\,\\.]\\d{1," + param[1] + "})";
			}
			return this.optional(element)
					|| new RegExp(expresion + "?$").test(value);
		}
	});
})(jQuery);
