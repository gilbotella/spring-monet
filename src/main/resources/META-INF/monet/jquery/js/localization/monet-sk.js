/* --------------------- */
/* Slovak translation for the jQuery Timepicker Addon. Written by David Vallner */
/* Slovak initialisation for the jQuery UI date picker plugin. Written by Vojtech Rinik (vojto@hmm.sk). */
/* --------------------- */
/* Locale: SK            */
/* --------------------- */

(function($) {
	$.timepicker.regional['sk'] = {
		timeOnlyTitle : 'Zvoľte čas',
		timeText : 'Čas',
		hourText : 'Hodiny',
		minuteText : 'Minúty',
		secondText : 'Sekundy',
		millisecText : 'Milisekundy',
		timezoneText : 'Časové pásmo',
		currentText : 'Teraz',
		closeText : 'Zavrieť',
		timeFormat : 'h:m',
		amNames : [ 'dop.', 'AM', 'A' ],
		pmNames : [ 'pop.', 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['sk'] = {
		closeText : 'Zavrieť',
		prevText : '&#x3c;Predchádzajúci',
		nextText : 'Nasledujúci&#x3e;',
		currentText : 'Dnes',
		monthNames : [ 'Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún',
				'Júl', 'August', 'September', 'Október', 'November', 'December' ],
		monthNamesShort : [ 'Jan', 'Feb', 'Mar', 'Apr', 'Máj', 'Jún', 'Júl',
				'Aug', 'Sep', 'Okt', 'Nov', 'Dec' ],
		dayNames : [ 'Nedel\'a', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok',
				'Piatok', 'Sobota' ],
		dayNamesShort : [ 'Ned', 'Pon', 'Uto', 'Str', 'Štv', 'Pia', 'Sob' ],
		dayNamesMin : [ 'Ne', 'Po', 'Ut', 'St', 'Št', 'Pia', 'So' ],
		weekHeader : 'Ty',
		dateFormat : 'dd.mm.yy',
		firstDay : 0,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['sk'] = {
		required : "Povinné zadať.",
		maxlength : jQuery.validator.format("Maximálne {0} znakov."),
		minlength : jQuery.validator.format("Minimálne {0} znakov."),
		rangelength : jQuery.validator
				.format("Minimálne {0} a Maximálne {0} znakov."),
		email : "E-mailová adresa musí byť platná.",
		url : "URL musí byť platný.",
		date : "Musí byť dátum.",
		number : "Musí byť číslo.",
		digits : "Môže obsahovať iba číslice.",
		equalTo : "Dva hodnoty sa musia rovnať.",
		range : jQuery.validator.format("Musí byť medzi {0} a {1}."),
		max : jQuery.validator.format("Nemôže byť viac ako{0}."),
		min : jQuery.validator.format("Nemôže byť menej ako{0}."),
		creditcard : "Číslo platobnej karty musí byť platné."
	};

})(jQuery);
