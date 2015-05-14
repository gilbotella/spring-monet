/* --------------------- */
/* Korean translation for the jQuery Timepicker Addon. Written by Genie */
/* Korean initialisation for the jQuery calendar extension. Written by DaeKwon Kang (ncrash.dk@gmail.com). */
/* --------------------- */
/* Locale: KO            */
/* --------------------- */

(function($) {
	$.timepicker.regional['ko'] = {
		timeOnlyTitle : '시간 선택',
		timeText : '시간',
		hourText : '시',
		minuteText : '분',
		secondText : '초',
		millisecText : '밀리초',
		timezoneText : '표준 시간대',
		currentText : '현재 시각',
		closeText : '닫기',
		timeFormat : 'tt h:mm',
		amNames : [ '오전', 'AM', 'A' ],
		pmNames : [ '오후', 'PM', 'P' ],
		ampm : true
	};
	$.datepicker.regional['ko'] = {
		closeText : '닫기',
		prevText : '이전달',
		nextText : '다음달',
		currentText : '오늘',
		monthNames : [ '1월(JAN)', '2월(FEB)', '3월(MAR)', '4월(APR)', '5월(MAY)',
				'6월(JUN)', '7월(JUL)', '8월(AUG)', '9월(SEP)', '10월(OCT)',
				'11월(NOV)', '12월(DEC)' ],
		monthNamesShort : [ '1월(JAN)', '2월(FEB)', '3월(MAR)', '4월(APR)',
				'5월(MAY)', '6월(JUN)', '7월(JUL)', '8월(AUG)', '9월(SEP)',
				'10월(OCT)', '11월(NOV)', '12월(DEC)' ],
		dayNames : [ '일', '월', '화', '수', '목', '금', '토' ],
		dayNamesShort : [ '일', '월', '화', '수', '목', '금', '토' ],
		dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ],
		weekHeader : 'Wk',
		dateFormat : 'yy-mm-dd',
		firstDay : 0,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : '년'
	};
})(jQuery);
