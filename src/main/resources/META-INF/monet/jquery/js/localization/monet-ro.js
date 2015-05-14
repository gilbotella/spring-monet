/* --------------------- */
/* Romanian translation for the jQuery Timepicker Addon. Written by Romeo Adrian Cioaba */
/* Romanian initialisation for the jQuery UI date picker plugin. Written by Edmond L. (ll_edmond@walla.com) and Ionut G. Stan (ionut.g.stan@gmail.com) */
/* --------------------- */
/* Locale: RO            */
/* --------------------- */

(function($) {
	$.timepicker.regional['ro'] = {
		timeOnlyTitle : 'Alegeţi o oră',
		timeText : 'Timp',
		hourText : 'Ore',
		minuteText : 'Minute',
		secondText : 'Secunde',
		millisecText : 'Milisecunde',
		timezoneText : 'Fus orar',
		currentText : 'Acum',
		closeText : 'Închide',
		timeFormat : 'hh:mm',
		amNames : [ 'AM', 'A' ],
		pmNames : [ 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['ro'] = {
		closeText : 'Închide',
		prevText : '&laquo; Luna precedentă',
		nextText : 'Luna următoare &raquo;',
		currentText : 'Azi',
		monthNames : [ 'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai',
				'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie',
				'Noiembrie', 'Decembrie' ],
		monthNamesShort : [ 'Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul',
				'Aug', 'Sep', 'Oct', 'Noi', 'Dec' ],
		dayNames : [ 'Duminică', 'Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri',
				'Sâmbătă' ],
		dayNamesShort : [ 'Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm' ],
		dayNamesMin : [ 'Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ' ],
		weekHeader : 'Săpt',
		dateFormat : 'dd.mm.yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['ro'] = {
		required : "Acest câmp este obligatoriu.",
		remote : "Te rugăm să completezi acest câmp.",
		email : "Te rugăm să introduci o adresă de email validă",
		url : "Te rugăm sa introduci o adresă URL validă.",
		date : "Te rugăm să introduci o dată corectă.",
		dateISO : "Te rugăm să introduci o dată (ISO) corectă.",
		number : "Te rugăm să introduci un număr întreg valid.",
		digits : "Te rugăm să introduci doar cifre.",
		creditcard : "Te rugăm să introduci un numar de carte de credit valid.",
		equalTo : "Te rugăm să reintroduci valoarea.",
		accept : "Te rugăm să introduci o valoare cu o extensie validă.",
		maxlength : jQuery.validator
				.format("Te rugăm să nu introduci mai mult de {0} caractere."),
		minlength : jQuery.validator
				.format("Te rugăm să introduci cel puțin {0} caractere."),
		rangelength : jQuery.validator
				.format("Te rugăm să introduci o valoare între {0} și {1} caractere."),
		range : jQuery.validator
				.format("Te rugăm să introduci o valoare între {0} și {1}."),
		max : jQuery.validator
				.format("Te rugăm să introduci o valoare egal sau mai mică decât {0}."),
		min : jQuery.validator
				.format("Te rugăm să introduci o valoare egal sau mai mare decât {0}.")
	};
})(jQuery);
