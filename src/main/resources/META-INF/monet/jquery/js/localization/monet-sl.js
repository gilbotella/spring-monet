/* --------------------- */
/* Slovenian initialisation for the jQuery UI date picker plugin. Written by Jaka Jancar (jaka@kubje.org). */
/* c = &#x10D;, s = &#x161; z = &#x17E; C = &#x10C; S = &#x160; Z = &#x17D; */
/* --------------------- */
/* Locale: SL            */
/* --------------------- */

(function($) {
	$.datepicker.regional['sl'] = {
		closeText : 'Zapri',
		prevText : '&lt;Prej&#x161;nji',
		nextText : 'Naslednji&gt;',
		currentText : 'Trenutni',
		monthNames : [ 'Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij',
				'Julij', 'Avgust', 'September', 'Oktober', 'November',
				'December' ],
		monthNamesShort : [ 'Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul',
				'Avg', 'Sep', 'Okt', 'Nov', 'Dec' ],
		dayNames : [ 'Nedelja', 'Ponedeljek', 'Torek', 'Sreda',
				'&#x10C;etrtek', 'Petek', 'Sobota' ],
		dayNamesShort : [ 'Ned', 'Pon', 'Tor', 'Sre', '&#x10C;et', 'Pet', 'Sob' ],
		dayNamesMin : [ 'Ne', 'Po', 'To', 'Sr', '&#x10C;e', 'Pe', 'So' ],
		weekHeader : 'Teden',
		dateFormat : 'dd.mm.yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['sl'] = {
		required : "To polje je obvezno.",
		remote : "Prosimo popravite to polje.",
		email : "Prosimo vnesite veljaven email naslov.",
		url : "Prosimo vnesite veljaven URL naslov.",
		date : "Prosimo vnesite veljaven datum.",
		dateISO : "Prosimo vnesite veljaven ISO datum.",
		number : "Prosimo vnesite veljavno število.",
		digits : "Prosimo vnesite samo števila.",
		creditcard : "Prosimo vnesite veljavno številko kreditne kartice.",
		equalTo : "Prosimo ponovno vnesite vrednost.",
		accept : "Prosimo vnesite vrednost z veljavno končnico.",
		maxlength : jQuery.validator
				.format("Prosimo vnesite največ {0} znakov."),
		minlength : jQuery.validator
				.format("Prosimo vnesite najmanj {0} znakov."),
		rangelength : jQuery.validator
				.format("Prosimo vnesite najmanj {0} in največ {1} znakov."),
		range : jQuery.validator
				.format("Prosimo vnesite vrednost med {0} in {1}."),
		max : jQuery.validator
				.format("Prosimo vnesite vrednost manjše ali enako {0}."),
		min : jQuery.validator
				.format("Prosimo vnesite vrednost večje ali enako {0}.")
	};
})(jQuery);
