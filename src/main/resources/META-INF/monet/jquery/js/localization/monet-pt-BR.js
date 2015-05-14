/* --------------------- */
/* Brazilian Portuguese translation for the jQuery Timepicker Addon. Written by Diogo Damiani (diogodamiani@gmail.com) */
/* Brazilian initialisation for the jQuery UI date picker plugin. Written by Leonildo Costa Silva (leocsilva@gmail.com). */
/* --------------------- */
/* Locale: PT-BR         */
/* --------------------- */

(function($) {
	$.timepicker.regional['pt-BR'] = {
		timeOnlyTitle : 'Escolha a hora',
		timeText : 'Hora',
		hourText : 'Horas',
		minuteText : 'Minutos',
		secondText : 'Segundos',
		millisecText : 'Milissegundos',
		timezoneText : 'Fuso hor�rio',
		currentText : 'Agora',
		closeText : 'Fechar',
		timeFormat : 'hh:mm',
		amNames : [ 'a.m.', 'AM', 'A' ],
		pmNames : [ 'p.m.', 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['pt-BR'] = {
		closeText : 'Fechar',
		prevText : '&#x3c;Anterior',
		nextText : 'Pr&oacute;ximo&#x3e;',
		currentText : 'Hoje',
		monthNames : [ 'Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio',
				'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro',
				'Dezembro' ],
		monthNamesShort : [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul',
				'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
		dayNames : [ 'Domingo', 'Segunda-feira', 'Ter&ccedil;a-feira',
				'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado' ],
		dayNamesShort : [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab' ],
		dayNamesMin : [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab' ],
		weekHeader : 'Sm',
		dateFormat : 'dd/mm/yy',
		firstDay : 0,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['pt-BR'] = {
		required : "Este campo &eacute; requerido.",
		remote : "Por favor, corrija este campo.",
		email : "Por favor, forne&ccedil;a um endere&ccedil;o eletr&ocirc;nico v&aacute;lido.",
		url : "Por favor, forne&ccedil;a uma URL v&aacute;lida.",
		date : "Por favor, forne&ccedil;a uma data v&aacute;lida.",
		dateISO : "Por favor, forne&ccedil;a uma data v&aacute;lida (ISO).",
		number : "Por favor, forne&ccedil;a um n&uacute;mero v&aacute;lido.",
		digits : "Por favor, forne&ccedil;a somente d&iacute;gitos.",
		creditcard : "Por favor, forne&ccedil;a um cart&atilde;o de cr&eacute;dito v&aacute;lido.",
		equalTo : "Por favor, forne&ccedil;a o mesmo valor novamente.",
		accept : "Por favor, forne&ccedil;a um valor com uma extens&atilde;o v&aacute;lida.",
		maxlength : jQuery.validator
				.format("Por favor, forne&ccedil;a n&atilde;o mais que {0} caracteres."),
		minlength : jQuery.validator
				.format("Por favor, forne&ccedil;a ao menos {0} caracteres."),
		rangelength : jQuery.validator
				.format("Por favor, forne&ccedil;a um valor entre {0} e {1} caracteres de comprimento."),
		range : jQuery.validator
				.format("Por favor, forne&ccedil;a um valor entre {0} e {1}."),
		max : jQuery.validator
				.format("Por favor, forne&ccedil;a um valor menor ou igual a {0}."),
		min : jQuery.validator
				.format("Por favor, forne&ccedil;a um valor maior ou igual a {0}.")
	};
})(jQuery);
