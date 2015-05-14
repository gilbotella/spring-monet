/* --------------------- */
/* Norwegian translation for the jQuery Timepicker Addon. Written by Morten Hauan (http://hauan.me) */
/* Norwegian initialisation for the jQuery UI date picker plugin. Written by Naimdjon Takhirov (naimdjon@gmail.com). */
/* --------------------- */
/* Locale: NO            */
/* --------------------- */

(function($) {
	$.timepicker.regional['no'] = {
		timeOnlyTitle : 'Velg tid',
		timeText : 'Tid',
		hourText : 'Time',
		minuteText : 'Minutt',
		secondText : 'Sekund',
		millisecText : 'Millisekund',
		timezoneText : 'Tidssone',
		currentText : 'Nå',
		closeText : 'Lukk',
		timeFormat : 'hh:mm',
		amNames : [ 'am', 'AM', 'A' ],
		pmNames : [ 'pm', 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['no'] = {
		closeText : 'Lukk',
		prevText : '&laquo;Forrige',
		nextText : 'Neste&raquo;',
		currentText : 'I dag',
		monthNames : [ 'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni',
				'Juli', 'August', 'September', 'Oktober', 'November',
				'Desember' ],
		monthNamesShort : [ 'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul',
				'Aug', 'Sep', 'Okt', 'Nov', 'Des' ],
		dayNamesShort : [ 'Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør' ],
		dayNames : [ 'Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag',
				'Fredag', 'Lørdag' ],
		dayNamesMin : [ 'Sø', 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø' ],
		weekHeader : 'Uke',
		dateFormat : 'yy-mm-dd',
		firstDay : 0,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['no'] = {
		required : "Dette feltet er obligatorisk.",
		maxlength : jQuery.validator.format("Maksimalt {0} tegn."),
		minlength : jQuery.validator.format("Minimum {0} tegn."),
		rangelength : jQuery.validator
				.format("Angi minimum {0} og maksimum {1} tegn."),
		email : "Oppgi en gyldig epostadresse.",
		url : "Angi en gyldig URL.",
		date : "Angi en gyldig dato.",
		dateISO : "Angi en gyldig dato (&ARING;&ARING;&ARING;&ARING;-MM-DD).",
		dateSE : "Angi en gyldig dato.",
		number : "Angi et gyldig nummer.",
		numberSE : "Angi et gyldig nummer.",
		digits : "Skriv kun tall.",
		equalTo : "Skriv samme verdi igjen.",
		range : jQuery.validator.format("Angi en verdi mellom {0} og {1}."),
		max : jQuery.validator
				.format("Angi en verdi som er mindre eller lik {0}."),
		min : jQuery.validator
				.format("Angi en verdi som er st&oslash;rre eller lik {0}."),
		creditcard : "Angi et gyldig kredittkortnummer."
	};
})(jQuery);
