/* --------------------- */
/* German translation for the jQuery Timepicker Addon: Written by Marvin */
/* German initialisation for the jQuery UI date picker plugin. Written by Milian Wolff (mail@milianw.de). */
/* --------------------- */
/* Locale: DE            */
/* --------------------- */

(function($) {
	$.timepicker.regional['de'] = {
		timeOnlyTitle : 'Zeit Wählen',
		timeText : 'Zeit',
		hourText : 'Stunde',
		minuteText : 'Minute',
		secondText : 'Sekunde',
		millisecText : 'Millisekunde',
		timezoneText : 'Zeitzone',
		currentText : 'Jetzt',
		closeText : 'Fertig',
		timeFormat : 'hh:mm tt',
		amNames : [ 'vorm.', 'AM', 'A' ],
		pmNames : [ 'nachm.', 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['de'] = {
		closeText : 'schließen',
		prevText : '&#x3c;zurück',
		nextText : 'Vor&#x3e;',
		currentText : 'heute',
		monthNames : [ 'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
				'Juli', 'August', 'September', 'Oktober', 'November',
				'Dezember' ],
		monthNamesShort : [ 'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul',
				'Aug', 'Sep', 'Okt', 'Nov', 'Dez' ],
		dayNames : [ 'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag',
				'Freitag', 'Samstag' ],
		dayNamesShort : [ 'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa' ],
		dayNamesMin : [ 'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa' ],
		weekHeader : 'Wo',
		dateFormat : 'dd.mm.yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['de'] = {
		required : "Dieses Feld ist ein Pflichtfeld.",
		maxlength : jQuery.validator
				.format("Geben Sie bitte maximal {0} Zeichen ein."),
		minlength : jQuery.validator
				.format("Geben Sie bitte mindestens {0} Zeichen ein."),
		rangelength : jQuery.validator
				.format("Geben Sie bitte mindestens {0} und maximal {1} Zeichen ein."),
		email : "Geben Sie bitte eine gültige E-Mail Adresse ein.",
		url : "Geben Sie bitte eine gültige URL ein.",
		date : "Bitte geben Sie ein gültiges Datum ein.",
		number : "Geben Sie bitte eine Nummer ein.",
		digits : "Geben Sie bitte nur Ziffern ein.",
		equalTo : "Bitte denselben Wert wiederholen.",
		range : jQuery.validator
				.format("Geben Sie bitten einen Wert zwischen {0} und {1}."),
		max : jQuery.validator
				.format("Geben Sie bitte einen Wert kleiner oder gleich {0} ein."),
		min : jQuery.validator
				.format("Geben Sie bitte einen Wert größer oder gleich {0} ein."),
		creditcard : "Geben Sie bitte ein gültige Kreditkarten-Nummer ein."
	};
})(jQuery);
