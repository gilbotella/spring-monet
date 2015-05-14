/* --------------------- */
/* Hungarian translation for the jQuery Timepicker Addon. Written by Vas Gábor */
/* Hungarian initialisation for the jQuery UI date picker plugin. Written by Istvan Karaszi (jquery@spam.raszi.hu). */
/* --------------------- */
/* Locale: HU            */
/* --------------------- */

(function($) {
	$.timepicker.regional['hu'] = {
		timeOnlyTitle : 'Válasszon időpontot',
		timeText : 'Idő',
		hourText : 'Óra',
		minuteText : 'Perc',
		secondText : 'Másodperc',
		millisecText : 'Milliszekundumos',
		timezoneText : 'Időzóna',
		currentText : 'Most',
		closeText : 'Kész',
		timeFormat : 'hh:mm tt',
		amNames : [ 'de.', 'AM', 'A' ],
		pmNames : [ 'du.', 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['hu'] = {
		closeText : 'bezárás',
		prevText : '&laquo;&nbsp;vissza',
		nextText : 'előre&nbsp;&raquo;',
		currentText : 'ma',
		monthNames : [ 'Január', 'Február', 'Március', 'Április', 'Május',
				'Június', 'Július', 'Augusztus', 'Szeptember', 'Október',
				'November', 'December' ],
		monthNamesShort : [ 'Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún', 'Júl',
				'Aug', 'Szep', 'Okt', 'Nov', 'Dec' ],
		dayNames : [ 'Vasárnap', 'Hétfö', 'Kedd', 'Szerda', 'Csütörtök',
				'Péntek', 'Szombat' ],
		dayNamesShort : [ 'Vas', 'Hét', 'Ked', 'Sze', 'Csü', 'Pén', 'Szo' ],
		dayNamesMin : [ 'V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo' ],
		weekHeader : 'Hé',
		dateFormat : 'yy-mm-dd',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['hu'] = {
		required : "Kötelező megadni.",
		maxlength : jQuery.validator
				.format("Legfeljebb {0} karakter hosszú legyen."),
		minlength : jQuery.validator
				.format("Legalább {0} karakter hosszú legyen."),
		rangelength : jQuery.validator
				.format("Legalább {0} és legfeljebb {1} karakter hosszú legyen."),
		email : "Érvényes e-mail címnek kell lennie.",
		url : "Érvényes URL-nek kell lennie.",
		date : "Dátumnak kell lennie.",
		number : "Számnak kell lennie.",
		digits : "Csak számjegyek lehetnek.",
		equalTo : "Meg kell egyeznie a két értéknek.",
		range : jQuery.validator.format("{0} és {1} közé kell esnie."),
		max : jQuery.validator.format("Nem lehet nagyobb, mint {0}."),
		min : jQuery.validator.format("Nem lehet kisebb, mint {0}."),
		creditcard : "Érvényes hitelkártyaszámnak kell lennie."
	};
})(jQuery);
