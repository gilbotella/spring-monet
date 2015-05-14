/* --------------------- */
/* Finnish translation for the jQuery Timepicker Addon. Written by Juga Paazmaya (http://github.com/paazmaya) */
/* Finnish initialisation for the jQuery UI date picker plugin. Written by Harri Kilpi� (harrikilpio@gmail.com). */
/* --------------------- */
/* Locale: FI            */
/* --------------------- */

(function($) {
	$.timepicker.regional['fi'] = {
		timeOnlyTitle : 'Valitse aika',
		timeText : 'Aika',
		hourText : 'Tunti',
		minuteText : 'Minuutti',
		secondText : 'Sekunti',
		millisecText : 'Millisekunnin',
		timezoneText : 'Aikavyöhyke',
		currentText : 'Nyt',
		closeText : 'Sulje',
		timeFormat : 'hh:mm',
		amNames : [ 'ap.', 'AM', 'A' ],
		pmNames : [ 'ip.', 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['fi'] = {
		closeText : 'Sulje',
		prevText : '&laquo;Edellinen',
		nextText : 'Seuraava&raquo;',
		currentText : 'T&auml;n&auml;&auml;n',
		monthNames : [ 'Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu',
				'Toukokuu', 'Kes&auml;kuu', 'Hein&auml;kuu', 'Elokuu',
				'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu' ],
		monthNamesShort : [ 'Tammi', 'Helmi', 'Maalis', 'Huhti', 'Touko',
				'Kes&auml;', 'Hein&auml;', 'Elo', 'Syys', 'Loka', 'Marras',
				'Joulu' ],
		dayNamesShort : [ 'Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'Su' ],
		dayNames : [ 'Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko',
				'Torstai', 'Perjantai', 'Lauantai' ],
		dayNamesMin : [ 'Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La' ],
		weekHeader : 'Vk',
		dateFormat : 'dd.mm.yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['fi'] = {
		required : "T&auml;m&auml; kentt&auml; on pakollinen.",
		maxlength : jQuery.validator
				.format("Voit sy&ouml;tt&auml;&auml; enint&auml;&auml;n {0} merkki&auml;."),
		minlength : jQuery.validator
				.format("V&auml;hint&auml;&auml;n {0} merkki&auml;."),
		rangelength : jQuery.validator
				.format("Sy&ouml;t&auml; v&auml;hint&auml;&auml;n {0} ja enint&auml;&auml;n {1} merkki&auml;."),
		email : "Sy&ouml;t&auml; oikea s&auml;hk&ouml;postiosoite.",
		url : "Sy&ouml;t&auml; oikea URL osoite.",
		date : "Sy&ouml;t&auml; oike p&auml;iv&auml;m&auml;&auml;r&auml;.",
		dateISO : "Sy&ouml;t&auml; oike p&auml;iv&auml;m&auml;&auml;r&auml; (VVVV-MM-DD).",
		number : "Sy&ouml;t&auml; numero.",
		digits : "Sy&ouml;t&auml; pelk&auml;st&auml;&auml;n numeroita.",
		equalTo : "Sy&ouml;t&auml; sama arvo uudestaan.",
		range : jQuery.validator
				.format("Sy&ouml;t&auml; arvo {0} ja {1} v&auml;lilt&auml;."),
		max : jQuery.validator
				.format("Sy&ouml;t&auml; arvo joka on yht&auml; suuri tai suurempi kuin {0}."),
		min : jQuery.validator
				.format("Sy&ouml;t&auml; arvo joka on pienempi tai yht&auml; suuri kuin {0}."),
		creditcard : "Sy&ouml;t&auml; voimassa oleva luottokorttinumero."
	};
})(jQuery);
