/* --------------------- */
/* Latvian (UTF-8) initialisation for the jQuery UI date picker plugin. @author Arturas Paleicikas <arturas.paleicikas@metasite.net> */
/* --------------------- */
/* Locale: LV            */
/* --------------------- */

(function($) {
	$.datepicker.regional['lv'] = {
		closeText : 'Aizvērt',
		prevText : 'Iepr',
		nextText : 'Nāka',
		currentText : 'Šodien',
		monthNames : [ 'Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs',
				'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris',
				'Novembris', 'Decembris' ],
		monthNamesShort : [ 'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jūn', 'Jūl',
				'Aug', 'Sep', 'Okt', 'Nov', 'Dec' ],
		dayNames : [ 'svētdiena', 'pirmdiena', 'otrdiena', 'trešdiena',
				'ceturtdiena', 'piektdiena', 'sestdiena' ],
		dayNamesShort : [ 'svt', 'prm', 'otr', 'tre', 'ctr', 'pkt', 'sst' ],
		dayNamesMin : [ 'Sv', 'Pr', 'Ot', 'Tr', 'Ct', 'Pk', 'Ss' ],
		weekHeader : 'Nav',
		dateFormat : 'dd-mm-yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['lv'] = {
		required : "Šis lauks ir obligāts.",
		remote : "Lūdzu, pārbaudiet šo lauku.",
		email : "Lūdzu, ievadiet derīgu e-pasta adresi.",
		url : "Lūdzu, ievadiet derīgu URL adresi.",
		date : "Lūdzu, ievadiet derīgu datumu.",
		dateISO : "Lūdzu, ievadiet derīgu datumu (ISO).",
		number : "Lūdzu, ievadiet derīgu numuru.",
		digits : "Lūdzu, ievadiet tikai ciparus.",
		creditcard : "Lūdzu, ievadiet derīgu kredītkartes numuru.",
		equalTo : "Lūdzu, ievadiet to pašu vēlreiz.",
		accept : "Lūdzu, ievadiet vērtību ar derīgu paplašinājumu.",
		maxlength : jQuery.validator
				.format("Lūdzu, ievadiet ne vairāk kā {0} rakstzīmes."),
		minlength : jQuery.validator
				.format("Lūdzu, ievadiet vismaz {0} rakstzīmes."),
		rangelength : jQuery.validator
				.format("Lūdzu ievadiet {0} līdz {1} rakstzīmes."),
		range : jQuery.validator
				.format("Lūdzu, ievadiet skaitli no {0} līdz {1}."),
		max : jQuery.validator
				.format("Lūdzu, ievadiet skaitli, kurš ir mazāks vai vienāds ar {0}."),
		min : jQuery.validator
				.format("Lūdzu, ievadiet skaitli, kurš ir lielāks vai vienāds ar {0}.")
	};
})(jQuery);