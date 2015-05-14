/* --------------------- */
/* Lithuanian translation for the jQuery Timepicker Addon. Written by Irmantas Šiupšinskas */
/* Lithuanian (UTF-8) initialisation for the jQuery UI date picker plugin. @author Arturas Paleicikas <arturas@avalon.lt> */
/* --------------------- */
/* Locale: LT            */
/* --------------------- */

(function($) {
	$.timepicker.regional['lt'] = {
		timeOnlyTitle : 'Pasirinkite laiką',
		timeText : 'Laikas',
		hourText : 'Valandos',
		minuteText : 'Minutės',
		secondText : 'Sekundės',
		millisecText : 'Milisekundės',
		timezoneText : 'Laiko zona',
		currentText : 'Dabar',
		closeText : 'Uždaryti',
		timeFormat : 'hh:mm',
		amNames : [ 'priešpiet', 'AM', 'A' ],
		pmNames : [ 'popiet', 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['lt'] = {
		closeText : 'Uždaryti',
		prevText : '&#x3c;Atgal',
		nextText : 'Pirmyn&#x3e;',
		currentText : 'Šiandien',
		monthNames : [ 'Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė',
				'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis',
				'Lapkritis', 'Gruodis' ],
		monthNamesShort : [ 'Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie',
				'Rugp', 'Rugs', 'Spa', 'Lap', 'Gru' ],
		dayNames : [ 'sekmadienis', 'pirmadienis', 'antradienis',
				'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis' ],
		dayNamesShort : [ 'sek', 'pir', 'ant', 'tre', 'ket', 'pen', 'šeš' ],
		dayNamesMin : [ 'Se', 'Pr', 'An', 'Tr', 'Ke', 'Pe', 'Še' ],
		weekHeader : 'Wk',
		dateFormat : 'yy-mm-dd',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['lt'] = {
		required : "Šis laukas yra privalomas.",
		remote : "Prašau pataisyti šį lauką.",
		email : "Prašau įvesti teisingą elektroninio pašto adresą.",
		url : "Prašau įvesti teisingą URL.",
		date : "Prašau įvesti teisingą datą.",
		dateISO : "Prašau įvesti teisingą datą (ISO).",
		number : "Prašau įvesti teisingą skaičių.",
		digits : "Prašau naudoti tik skaitmenis.",
		creditcard : "Prašau įvesti teisingą kreditinės kortelės numerį.",
		equalTo : "Prašau įvestį tą pačią reikšmę dar kartą.",
		accept : "Prašau įvesti reikšmę su teisingu plėtiniu.",
		maxlength : $.format("Prašau įvesti ne daugiau kaip {0} simbolių."),
		minlength : $.format("Prašau įvesti bent {0} simbolius."),
		rangelength : $
				.format("Prašau įvesti reikšmes, kurių ilgis nuo {0} iki {1} simbolių."),
		range : $.format("Prašau įvesti reikšmę intervale nuo {0} iki {1}."),
		max : $.format("Prašau įvesti reikšmę mažesnę arba lygią {0}."),
		min : $.format("Prašau įvesti reikšmę didesnę arba lygią {0}.")
	};
})(jQuery);
