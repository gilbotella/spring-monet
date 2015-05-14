/* --------------------- */
/* Catalan translation for the jQuery Timepicker Addon: Written by Sergi Faber */
/* Inicialització en català per a l'extenció 'calendar' per jQuery. Writers: (joan.leon@gmail.com). */
/* --------------------- */
/* Locale: CA            */
/* --------------------- */
(function($) {
	$.timepicker.regional['ca'] = {
		timeOnlyTitle : 'Escollir una hora',
		timeText : 'Hora',
		hourText : 'Hores',
		minuteText : 'Minuts',
		secondText : 'Segons',
		millisecText : 'Milisegons',
		timezoneText : 'Fus horari',
		currentText : 'Ara',
		closeText : 'Tancar',
		timeFormat : 'hh:mm',
		amNames : [ 'AM', 'A' ],
		pmNames : [ 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['ca'] = {
		closeText : 'Tancar',
		prevText : '&#x3c;Ant',
		nextText : 'Seg&#x3e;',
		currentText : 'Avui',
		monthNames : [ 'Gener', 'Febrer', 'Mar&ccedil;', 'Abril', 'Maig',
				'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre',
				'Desembre' ],
		monthNamesShort : [ 'Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul',
				'Ago', 'Set', 'Oct', 'Nov', 'Des' ],
		dayNames : [ 'Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous',
				'Divendres', 'Dissabte' ],
		dayNamesShort : [ 'Dug', 'Dln', 'Dmt', 'Dmc', 'Djs', 'Dvn', 'Dsb' ],
		dayNamesMin : [ 'Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds' ],
		weekHeader : 'Sm',
		dateFormat : 'dd/mm/yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['ca'] = {
		required : "Aquest camp és obligatori.",
		remote : "Si us plau, omple aquest camp.",
		email : "Si us plau, escriu una adreça de correu-e vàlida",
		url : "Si us plau, escriu una URL vàlida.",
		date : "Si us plau, escriu una data vàlida.",
		dateISO : "Si us plau, escriu una data (ISO) vàlida.",
		number : "Si us plau, escriu un número enter vàlid.",
		digits : "Si us plau, escriu només dígits.",
		creditcard : "Si us plau, escriu un número de tarjeta vàlid.",
		equalTo : "Si us plau, escriu el maateix valor de nou.",
		accept : "Si us plau, escriu un valor amb una extensió acceptada.",
		maxlength : jQuery.validator
				.format("Si us plau, no escriguis més de {0} caracters."),
		minlength : jQuery.validator
				.format("Si us plau, no escriguis menys de {0} caracters."),
		rangelength : jQuery.validator
				.format("Si us plau, escriu un valor entre {0} i {1} caracters."),
		range : jQuery.validator
				.format("Si us plau, escriu un valor entre {0} i {1}."),
		max : jQuery.validator
				.format("Si us plau, escriu un valor menor o igual a {0}."),
		min : jQuery.validator
				.format("Si us plau, escriu un valor major o igual a {0}.")
	};
})(jQuery);
