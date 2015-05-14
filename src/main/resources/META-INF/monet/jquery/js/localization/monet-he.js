/* --------------------- */
/* Hebrew translation for the jQuery Timepicker Addon. Written by Lior Lapid */
/* Hebrew initialisation for the UI Datepicker extension. Written by Amir Hardon (ahardon at gmail dot com). */
/* --------------------- */
/* Locale: HE            */
/* --------------------- */

(function($) {
	$.timepicker.regional["he"] = {
		timeOnlyTitle : "בחירת זמן",
		timeText : "שעה",
		hourText : "שעות",
		minuteText : "דקות",
		secondText : "שניות",
		millisecText : "אלפית השנייה",
		timezoneText : "אזור זמן",
		currentText : "עכשיו",
		closeText : "סגור",
		timeFormat : "hh:mm tt",
		amNames : [ 'לפנה"צ', 'AM', 'A' ],
		pmNames : [ 'אחה"צ', 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['he'] = {
		closeText : 'סגור',
		prevText : '&#x3c;הקודם',
		nextText : 'הבא&#x3e;',
		currentText : 'היום',
		monthNames : [ 'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
				'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר' ],
		monthNamesShort : [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
				'11', '12' ],
		dayNames : [ 'ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת' ],
		dayNamesShort : [ 'א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת' ],
		dayNamesMin : [ 'א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת' ],
		weekHeader : 'Wk',
		dateFormat : 'dd/mm/yy',
		firstDay : 0,
		isRTL : true,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['he'] = {
		required : ".השדה הזה הינו שדה חובה",
		remote : "נא לתקן שדה זה.",
		email : "נא למלא כתובת דוא\"ל חוקית",
		url : "נא למלא כתובת אינטרנט חוקית.",
		date : "נא למלא תאריך חוקי",
		dateISO : "נא למלא תאריך חוקי (ISO).",
		number : "נא למלא מספר.",
		digits : ".נא למלא רק מספרים",
		creditcard : "נא למלא מספר כרטיס אשראי חוקי.",
		equalTo : "נא למלא את אותו ערך שוב.",
		accept : "נא למלא ערך עם סיומת חוקית.",
		maxlength : jQuery.validator.format(".נא לא למלא יותר מ- {0} תווים"),
		minlength : jQuery.validator.format("נא למלא לפחות {0} תווים."),
		rangelength : jQuery.validator
				.format("נא למלא ערך בין {0} ל- {1} תווים."),
		range : jQuery.validator.format("נא למלא ערך בין {0} ל- {1}."),
		max : jQuery.validator.format("נא למלא ערך קטן או שווה ל- {0}."),
		min : jQuery.validator.format("נא למלא ערך גדול או שווה ל- {0}.")
	};
})(jQuery);
