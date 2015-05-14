/* --------------------- */
/* Italian translation for the jQuery Timepicker Addon. Written by Marco "logicoder" Del Tongo */
/* Italian initialisation for the jQuery UI date picker plugin. Written by Antonello Pasella (antonello.pasella@gmail.com). */
/* --------------------- */
/* Locale: IT            */
/* --------------------- */

(function($) {
	$.timepicker.regional['it'] = {
		timeOnlyTitle : 'Scegli orario',
		timeText : 'Orario',
		hourText : 'Ora',
		minuteText : 'Minuto',
		secondText : 'Secondo',
		millisecText : 'Millisecondo',
		timezoneText : 'Fuso orario',
		currentText : 'Adesso',
		closeText : 'Chiudi',
		timeFormat : 'hh:mm',
		amNames : [ 'm.', 'AM', 'A' ],
		pmNames : [ 'p.', 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['it'] = {
		closeText : 'Chiudi',
		prevText : '&#x3c;Prec',
		nextText : 'Succ&#x3e;',
		currentText : 'Oggi',
		monthNames : [ 'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio',
				'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre',
				'Novembre', 'Dicembre' ],
		monthNamesShort : [ 'Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug',
				'Ago', 'Set', 'Ott', 'Nov', 'Dic' ],
		dayNames : [ 'Domenica', 'Luned&#236', 'Marted&#236', 'Mercoled&#236',
				'Gioved&#236', 'Venerd&#236', 'Sabato' ],
		dayNamesShort : [ 'Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab' ],
		dayNamesMin : [ 'Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa' ],
		weekHeader : 'Sm',
		dateFormat : 'dd/mm/yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['it'] = {
		required : "Campo obbligatorio.",
		remote : "Controlla questo campo.",
		email : "Inserisci un indirizzo email valido.",
		url : "Inserisci un indirizzo web valido.",
		date : "Inserisci una data valida.",
		dateISO : "Inserisci una data valida (ISO).",
		number : "Inserisci un numero valido.",
		digits : "Inserisci solo numeri.",
		creditcard : "Inserisci un numero di carta di credito valido.",
		equalTo : "Il valore non corrisponde.",
		accept : "Inserisci un valore con un&apos;estensione valida.",
		maxlength : jQuery.validator
				.format("Non inserire pi&ugrave; di {0} caratteri."),
		minlength : jQuery.validator.format("Inserisci almeno {0} caratteri."),
		rangelength : jQuery.validator
				.format("Inserisci un valore compreso tra {0} e {1} caratteri."),
		range : jQuery.validator
				.format("Inserisci un valore compreso tra {0} e {1}."),
		max : jQuery.validator
				.format("Inserisci un valore minore o uguale a {0}."),
		min : jQuery.validator
				.format("Inserisci un valore maggiore o uguale a {0}.")
	};
})(jQuery);
