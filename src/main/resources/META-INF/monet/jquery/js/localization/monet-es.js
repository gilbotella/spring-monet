/* --------------------- */
/* Spanish translation for the jQuery Timepicker Addon. Written by Ianaré Sévi */
/* Inicialización en español para la extensión 'UI date picker' para jQuery. Traducido por Vester (xvester@gmail.com). */
/* --------------------- */
/* Locale: ES            */
/* --------------------- */

(function($) {
	$.timepicker.regional['es'] = {
		timeOnlyTitle : 'Elige una hora',
		timeText : 'Hora',
		hourText : 'Horas',
		minuteText : 'Minutos',
		secondText : 'Segundos',
		millisecText : 'Milisegundos',
		timezoneText : 'Huso horario',
		currentText : 'Ahora',
		closeText : 'Cerrar',
		timeFormat : 'hh:mm',
		amNames : [ 'a.m.', 'AM', 'A' ],
		pmNames : [ 'p.m.', 'PM', 'P' ],
		ampm : false,
		timezone : "+0100"
	};
	$.datepicker.regional['es'] = {
		closeText : 'Cerrar',
		prevText : '&#x3c;Ant',
		nextText : 'Sig&#x3e;',
		currentText : 'Hoy',
		monthNames : [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
				'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
				'Diciembre' ],
		monthNamesShort : [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul',
				'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
		dayNames : [ 'Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles',
				'Jueves', 'Viernes', 'S&aacute;bado' ],
		dayNamesShort : [ 'Dom', 'Lun', 'Mar', 'Mi&eacute;', 'Juv', 'Vie',
				'S&aacute;b' ],
		dayNamesMin : [ 'Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S&aacute;' ],
		weekHeader : 'Sm',
		dateFormat : 'dd/mm/yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['es'] = {
		required : "Este campo es obligatorio.",
		remote : "Por favor, rellena este campo.",
		email : "Por favor, escribe una dirección de correo válida",
		url : "Por favor, escribe una URL válida.",
		date : "Por favor, escribe una fecha válida.",
		dateISO : "Por favor, escribe una fecha (ISO) válida.",
		number : "Por favor, escribe un número válido.",
		digits : "Por favor, escribe sólo dígitos.",
		creditcard : "Por favor, escribe un número de tarjeta válido.",
		equalTo : "Por favor, escribe el mismo valor de nuevo.",
		accept : "Por favor, escribe un valor con una extensión aceptada.",
		maxlength : jQuery.validator
				.format("Por favor, no escribas más de {0} caracteres."),
		minlength : jQuery.validator
				.format("Por favor, no escribas menos de {0} caracteres."),
		rangelength : jQuery.validator
				.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
		range : jQuery.validator
				.format("Por favor, escribe un valor entre {0} y {1}."),
		max : jQuery.validator
				.format("Por favor, escribe un valor menor o igual a {0}."),
		min : jQuery.validator
				.format("Por favor, escribe un valor mayor o igual a {0}."),
		patron : "Escribe un texto que cumpla el formato indicado.",
		numberFormat : "Por favor, escribe un número válido."
	};
})(jQuery);
