/* --------------------- */
/* Estonian translation for the jQuery Timepicker Addon. Written by Karl Sutt (karl@sutt.ee) */
/* Estonian initialisation for the jQuery UI date picker plugin. Written by Mart Sõmermaa (mrts.pydev at gmail com). */
/* --------------------- */
/* Locale: ET            */
/* --------------------- */

(function($) {
	$.timepicker.regional['et'] = {
		timeOnlyTitle : 'Vali aeg',
		timeText : 'Aeg',
		hourText : 'Tund',
		minuteText : 'Minut',
		secondText : 'Sekund',
		millisecText : 'Millisekundis',
		timezoneText : 'Ajavöönd',
		currentText : 'Praegu',
		closeText : 'Valmis',
		timeFormat : 'hh:mm tt',
		amNames : [ 'AM', 'A' ],
		pmNames : [ 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['et'] = {
		closeText : 'Sulge',
		prevText : 'Eelnev',
		nextText : 'Järgnev',
		currentText : 'Täna',
		monthNames : [ 'Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai',
				'Juuni', 'Juuli', 'August', 'September', 'Oktoober',
				'November', 'Detsember' ],
		monthNamesShort : [ 'Jaan', 'Veebr', 'Märts', 'Apr', 'Mai', 'Juuni',
				'Juuli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dets' ],
		dayNames : [ 'Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev',
				'Neljapäev', 'Reede', 'Laupäev' ],
		dayNamesShort : [ 'Pühap', 'Esmasp', 'Teisip', 'Kolmap', 'Neljap',
				'Reede', 'Laup' ],
		dayNamesMin : [ 'P', 'E', 'T', 'K', 'N', 'R', 'L' ],
		weekHeader : 'Sm',
		dateFormat : 'dd.mm.yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
})(jQuery);
