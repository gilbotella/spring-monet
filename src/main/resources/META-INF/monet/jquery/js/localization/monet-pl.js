/* --------------------- */
/* Polish translation for the jQuery Timepicker Addon. Written by Michał Pena */
/* Polish initialisation for the jQuery UI date picker plugin. Written by Jacek Wysocki (jacek.wysocki@gmail.com). */
/* --------------------- */
/* Locale: PL            */
/* --------------------- */

(function($) {
	$.timepicker.regional['pl'] = {
		timeOnlyTitle : 'Wybierz godzinę',
		timeText : 'Czas',
		hourText : 'Godzina',
		minuteText : 'Minuta',
		secondText : 'Sekunda',
		millisecText : 'Milisekunda',
		timezoneText : 'Strefa czasowa',
		currentText : 'Teraz',
		closeText : 'Gotowe',
		timeFormat : 'hh:mm tt',
		amNames : [ 'AM', 'A' ],
		pmNames : [ 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['pl'] = {
		closeText : 'Zamknij',
		prevText : '&#x3c;Poprzedni',
		nextText : 'Następny&#x3e;',
		currentText : 'Dziś',
		monthNames : [ 'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj',
				'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik',
				'Listopad', 'Grudzień' ],
		monthNamesShort : [ 'Sty', 'Lu', 'Mar', 'Kw', 'Maj', 'Cze', 'Lip',
				'Sie', 'Wrz', 'Pa', 'Lis', 'Gru' ],
		dayNames : [ 'Niedziela', 'Poniedzialek', 'Wtorek', 'Środa',
				'Czwartek', 'Piątek', 'Sobota' ],
		dayNamesShort : [ 'Nie', 'Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'So' ],
		dayNamesMin : [ 'N', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So' ],
		weekHeader : 'Tydz',
		dateFormat : 'yy-mm-dd',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['pl'] = {
		required : "To pole jest wymagane.",
		remote : "Proszę o wypełnienie tego pola.",
		email : "Proszę o podanie prawidłowego adresu email.",
		url : "Proszę o podanie prawidłowego URL.",
		date : "Proszę o podanie prawidłowej daty.",
		dateISO : "Proszę o podanie prawidłowej daty (ISO).",
		number : "Proszę o podanie prawidłowej liczby.",
		digits : "Proszę o podanie samych cyfr.",
		creditcard : "Proszę o podanie prawidłowej karty kredytowej.",
		equalTo : "Proszę o podanie tej samej wartości ponownie.",
		accept : "Proszę o podanie wartości z prawidłowym rozszerzeniem.",
		maxlength : jQuery.validator
				.format("Proszę o podanie nie więcej niż {0} znaków."),
		minlength : jQuery.validator
				.format("Proszę o podanie przynajmniej {0} znaków."),
		rangelength : jQuery.validator
				.format("Proszę o podanie wartości o długości od {0} do {1} znaków."),
		range : jQuery.validator
				.format("Proszę o podanie wartości z przedziału od {0} do {1}."),
		max : jQuery.validator
				.format("Proszę o podanie wartości mniejszej bądź równej {0}."),
		min : jQuery.validator
				.format("Proszę o podanie wartości większej bądź równej {0}.")
	};
})(jQuery);
