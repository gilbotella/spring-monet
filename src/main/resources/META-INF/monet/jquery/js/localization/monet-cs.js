/* --------------------- */
/* Czech translation for the jQuery Timepicker Addon: Written by Ondřej Vodáček */
/* Czech initialisation for the jQuery UI date picker plugin. Written by Tomas Muller (tomas@tomas-muller.net). */
/* --------------------- */
/* Locale: CS            */
/* --------------------- */

(function($) {
	$.timepicker.regional['cs'] = {
		timeOnlyTitle : 'Vyberte čas',
		timeText : 'Čas',
		hourText : 'Hodiny',
		minuteText : 'Minuty',
		secondText : 'Vteřiny',
		millisecText : 'Milisekundy',
		timezoneText : 'Časové pásmo',
		currentText : 'Nyní',
		closeText : 'Zavřít',
		timeFormat : 'h:m',
		amNames : [ 'dop.', 'AM', 'A' ],
		pmNames : [ 'odp.', 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['cs'] = {
		closeText : 'Zavřít',
		prevText : '&#x3c;Dříve',
		nextText : 'Později&#x3e;',
		currentText : 'Nyní',
		monthNames : [ 'leden', 'únor', 'březen', 'duben', 'květen', 'červen',
				'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec' ],
		monthNamesShort : [ 'led', 'úno', 'bře', 'dub', 'kvě', 'čer', 'čvc',
				'srp', 'zář', 'říj', 'lis', 'pro' ],
		dayNames : [ 'neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek',
				'pátek', 'sobota' ],
		dayNamesShort : [ 'ne', 'po', 'út', 'st', 'čt', 'pá', 'so' ],
		dayNamesMin : [ 'ne', 'po', 'út', 'st', 'čt', 'pá', 'so' ],
		weekHeader : 'Týd',
		dateFormat : 'dd.mm.yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['es'] = {
		required : "Tento údaj je povinný.",
		remote : "Prosím, opravte tento údaj.",
		email : "Prosím, zadejte platný e-mail.",
		url : "Prosím, zadejte platné URL.",
		date : "Prosím, zadejte platné datum.",
		dateISO : "Prosím, zadejte platné datum (ISO).",
		number : "Prosím, zadejte číslo.",
		digits : "Prosím, zadávejte pouze číslice.",
		creditcard : "Prosím, zadejte číslo kreditní karty.",
		equalTo : "Prosím, zadejte znovu stejnou hodnotu.",
		accept : "Prosím, zadejte soubor se správnou příponou.",
		maxlength : jQuery.validator
				.format("Prosím, zadejte nejvíce {0} znaků."),
		minlength : jQuery.validator
				.format("Prosím, zadejte nejméně {0} znaků."),
		rangelength : jQuery.validator
				.format("Prosím, zadejte od {0} do {1} znaků."),
		range : jQuery.validator
				.format("Prosím, zadejte hodnotu od {0} do {1}."),
		max : jQuery.validator
				.format("Prosím, zadejte hodnotu menší nebo rovnu {0}."),
		min : jQuery.validator
				.format("Prosím, zadejte hodnotu větší nebo rovnu {0}.")
	};
})(jQuery);
