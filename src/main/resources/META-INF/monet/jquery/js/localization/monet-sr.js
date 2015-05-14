/* --------------------- */
/* Serbian i18n for the jQuery UI date picker plugin. Written by Dejan Dimić. */
/* --------------------- */
/* Locale: SR            */
/* --------------------- */

(function($) {
	$.datepicker.regional['sr'] = {
		closeText : 'Zatvori',
		prevText : '&#x3c;',
		nextText : '&#x3e;',
		currentText : 'Danas',
		monthNames : [ 'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun',
				'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar' ],
		monthNamesShort : [ 'Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul',
				'Avg', 'Sep', 'Okt', 'Nov', 'Dec' ],
		dayNames : [ 'Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak',
				'Petak', 'Subota' ],
		dayNamesShort : [ 'Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub' ],
		dayNamesMin : [ 'Ne', 'Po', 'Ut', 'Sr', 'Če', 'Pe', 'Su' ],
		weekHeader : 'Sed',
		dateFormat : 'dd/mm/yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['sr'] = {
		required : "Поље је обавезно.",
		remote : "Средите ово поље.",
		email : "Унесите исправну и-мејл адресу",
		url : "Унесите исправан URL.",
		date : "Унесите исправан датум.",
		dateISO : "Унесите исправан датум (ISO).",
		number : "Унесите исправан број.",
		digits : "Унесите само цифе.",
		creditcard : "Унесите исправан број кредитне картице.",
		equalTo : "Унесите исту вредност поново.",
		accept : "Унесите вредност са одговарајућом екстензијом.",
		maxlength : $.validator.format("Унесите мање од {0}карактера."),
		minlength : $.validator.format("Унесите барем {0} карактера."),
		rangelength : $.validator
				.format("Унесите вредност дугачку између {0} и {1} карактера."),
		range : $.validator.format("Унесите вредност између {0} и {1}."),
		max : $.validator.format("Унесите вредност мању или једнаку {0}."),
		min : $.validator.format("Унесите вредност већу или једнаку {0}.")
	};
})(jQuery);
