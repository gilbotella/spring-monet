/* --------------------- */
/* Hellenic translation for the jQuery Timepicker Addon. Written by Christos Pontikis */
/* Greek (el) initialisation for the jQuery UI date picker plugin. Written by Alex Cicovic (http://www.alexcicovic.com) */
/* --------------------- */
/* Locale: EL            */
/* --------------------- */

(function($) {
	$.timepicker.regional['el'] = {
		timeOnlyTitle : 'Επιλογή ώρας',
		timeText : 'Ώρα',
		hourText : 'Ώρες',
		minuteText : 'Λεπτά',
		secondText : 'Δευτερόλεπτα',
		millisecText : 'μιλιδευτερόλεπτο',
		timezoneText : 'Ζώνη ώρας',
		currentText : 'Τώρα',
		closeText : 'Κλείσιμο',
		timeFormat : 'hh:mm',
		amNames : [ 'π.μ.', 'AM', 'A' ],
		pmNames : [ 'μ.μ.', 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['el'] = {
		closeText : 'Κλείσιμο',
		prevText : 'Προηγούμενος',
		nextText : 'Επόμενος',
		currentText : 'Τρέχων Μήνας',
		monthNames : [ 'Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος',
				'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος',
				'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος' ],
		monthNamesShort : [ 'Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαι', 'Ιουν', 'Ιουλ',
				'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ' ],
		dayNames : [ 'Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη',
				'Παρασκευή', 'Σάββατο' ],
		dayNamesShort : [ 'Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ' ],
		dayNamesMin : [ 'Κυ', 'Δε', 'Τρ', 'Τε', 'Πε', 'Πα', 'Σα' ],
		weekHeader : 'Εβδ',
		dateFormat : 'dd/mm/yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['el'] = {
		required : "Αυτό το πεδίο είναι υποχρεωτικό.",
		remote : "Παρακαλώ διορθώστε αυτό το πεδίο.",
		email : "Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.",
		url : "Παρακαλώ εισάγετε ένα έγκυρο URL.",
		date : "Παρακαλώ εισάγετε μια έγκυρη ημερομηνία.",
		dateISO : "Παρακαλώ εισάγετε μια έγκυρη ημερομηνία (ISO).",
		number : "Παρακαλώ εισάγετε έναν έγκυρο αριθμό.",
		digits : "Παρακαλώ εισάγετε μόνο αριθμητικά ψηφία.",
		creditcard : "Παρακαλώ εισάγετε έναν έγκυρο αριθμό πιστωτικής κάρτας.",
		equalTo : "Παρακαλώ εισάγετε την ίδια τιμή ξανά.",
		accept : "Παρακαλώ εισάγετε μια τιμή με έγκυρη επέκταση αρχείου.",
		maxlength : $.validator
				.format("Παρακαλώ εισάγετε μέχρι και {0} χαρακτήρες."),
		minlength : $.validator
				.format("Παρακαλώ εισάγετε τουλάχιστον {0} χαρακτήρες."),
		rangelength : $.validator
				.format("Παρακαλώ εισάγετε μια τιμή με μήκος μεταξύ {0} και {1} χαρακτήρων."),
		range : $.validator
				.format("Παρακαλώ εισάγετε μια τιμή μεταξύ {0} και {1}."),
		max : $.validator
				.format("Παρακαλώ εισάγετε μια τιμή μικρότερη ή ίση του {0}."),
		min : $.validator
				.format("Παρακαλώ εισάγετε μια τιμή μεγαλύτερη ή ίση του {0}.")
	};
})(jQuery);
