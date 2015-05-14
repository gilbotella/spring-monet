/* --------------------- */
/* Dutch translation for the jQuery Timepicker Addon. Written by Martijn van der Lee */
/* Dutch (UTF-8) initialisation for the jQuery UI date picker plugin. Written by Mathias Bynens <http://mathiasbynens.be/> */
/* --------------------- */
/* Locale: NL            */
/* --------------------- */

(function($) {
	$.timepicker.regional['nl'] = {
		timeOnlyTitle : 'Tijdstip',
		timeText : 'Tijd',
		hourText : 'Uur',
		minuteText : 'Minuut',
		secondText : 'Seconde',
		millisecText : 'Milliseconde',
		timezoneText : 'Tijdzone',
		currentText : 'Vandaag',
		closeText : 'Sluiten',
		timeFormat : 'hh:mm tt',
		amNames : [ 'AM', 'A' ],
		pmNames : [ 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['nl'] = {
		closeText : 'Sluiten',
		prevText : '←',
		nextText : '→',
		currentText : 'Vandaag',
		monthNames : [ 'januari', 'februari', 'maart', 'april', 'mei', 'juni',
				'juli', 'augustus', 'september', 'oktober', 'november',
				'december' ],
		monthNamesShort : [ 'jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul',
				'aug', 'sep', 'okt', 'nov', 'dec' ],
		dayNames : [ 'zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag',
				'vrijdag', 'zaterdag' ],
		dayNamesShort : [ 'zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat' ],
		dayNamesMin : [ 'zo', 'ma', 'di', 'wo', 'do', 'vr', 'za' ],
		weekHeader : 'Wk',
		dateFormat : 'dd-mm-yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['nl'] = {
		required : "Dit is een verplicht veld.",
		remote : "Controleer dit veld.",
		email : "Vul hier een geldig e-mailadres in.",
		url : "Vul hier een geldige URL in.",
		date : "Vul hier een geldige datum in.",
		dateISO : "Vul hier een geldige datum in (ISO-formaat).",
		number : "Vul hier een geldig getal in.",
		digits : "Vul hier alleen getallen in.",
		creditcard : "Vul hier een geldig creditcardnummer in.",
		equalTo : "Vul hier dezelfde waarde in.",
		accept : "Vul hier een waarde in met een geldige extensie.",
		maxlength : jQuery.validator.format("Vul hier maximaal {0} tekens in."),
		minlength : jQuery.validator.format("Vul hier minimaal {0} tekens in."),
		rangelength : jQuery.validator
				.format("Vul hier een waarde in van minimaal {0} en maximaal {1} tekens."),
		range : jQuery.validator
				.format("Vul hier een waarde in van minimaal {0} en maximaal {1}."),
		max : jQuery.validator
				.format("Vul hier een waarde in kleiner dan of gelijk aan {0}."),
		min : jQuery.validator
				.format("Vul hier een waarde in groter dan of gelijk aan {0}.")
	};
})(jQuery);
