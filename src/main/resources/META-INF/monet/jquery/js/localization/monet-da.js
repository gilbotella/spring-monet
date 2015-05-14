/* --------------------- */
/* Danish initialisation for the jQuery UI date picker plugin. Written by Jan Christensen ( deletestuff@gmail.com). */
/* --------------------- */
/* Locale: DA            */
/* --------------------- */

(function($) {
	$.datepicker.regional['da'] = {
		closeText : 'Luk',
		prevText : '&#x3c;Forrige',
		nextText : 'Næste&#x3e;',
		currentText : 'Idag',
		monthNames : [ 'Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni',
				'Juli', 'August', 'September', 'Oktober', 'November',
				'December' ],
		monthNamesShort : [ 'Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul',
				'Aug', 'Sep', 'Okt', 'Nov', 'Dec' ],
		dayNames : [ 'Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag',
				'Fredag', 'Lørdag' ],
		dayNamesShort : [ 'Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør' ],
		dayNamesMin : [ 'Sø', 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø' ],
		weekHeader : 'Uge',
		dateFormat : 'dd-mm-yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['da'] = {
		required : "Dette felt er påkrævet.",
		maxlength : jQuery.validator.format("Indtast højst {0} tegn."),
		minlength : jQuery.validator.format("Indtast mindst {0} tegn."),
		rangelength : jQuery.validator
				.format("Indtast mindst {0} og højst {1} tegn."),
		email : "Indtast en gyldig email-adresse.",
		url : "Indtast en gyldig URL.",
		date : "Indtast en gyldig dato.",
		number : "Indtast et tal.",
		digits : "Indtast kun cifre.",
		equalTo : "Indtast den samme værdi igen.",
		range : jQuery.validator.format("Angiv en værdi mellem {0} og {1}."),
		max : jQuery.validator.format("Angiv en værdi der højst er {0}."),
		min : jQuery.validator.format("Angiv en værdi der mindst er {0}."),
		creditcard : "Indtast et gyldigt kreditkortnummer."
	};
})(jQuery);