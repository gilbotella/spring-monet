/* --------------------- */
/* Japanese translation for the jQuery Timepicker Addon. Written by Jun Omae */
/* Japanese initialisation for the jQuery UI date picker plugin. Written by Kentaro SATO (kentaro@ranvis.com). 
 /* --------------------- */
/* Locale: JA            */
/* --------------------- */

(function($) {
	$.timepicker.regional['ja'] = {
		timeOnlyTitle : '時間を選択',
		timeText : '時間',
		hourText : '時',
		minuteText : '分',
		secondText : '秒',
		millisecText : 'ミリ秒',
		timezoneText : 'タイムゾーン',
		currentText : '現時刻',
		closeText : '閉じる',
		timeFormat : 'hh:mm tt',
		amNames : [ '午前', 'AM', 'A' ],
		pmNames : [ '午後', 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['ja'] = {
		closeText : '閉じる',
		prevText : '&#x3c;前',
		nextText : '次&#x3e;',
		currentText : '今日',
		monthNames : [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月',
				'10月', '11月', '12月' ],
		monthNamesShort : [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月',
				'9月', '10月', '11月', '12月' ],
		dayNames : [ '日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日' ],
		dayNamesShort : [ '日', '月', '火', '水', '木', '金', '土' ],
		dayNamesMin : [ '日', '月', '火', '水', '木', '金', '土' ],
		weekHeader : '週',
		dateFormat : 'yy/mm/dd',
		firstDay : 0,
		isRTL : false,
		showMonthAfterYear : true,
		yearSuffix : '年'
	};
	validation.regional['ja'] = {
		required : "このフィールドは必須です。",
		remote : "このフィールドを修正してください。",
		email : "有効なEメールアドレスを入力してください。",
		url : "有効なURLを入力してください。",
		date : "有効な日付を入力してください。",
		dateISO : "有効な日付（ISO）を入力してください。",
		number : "有効な数字を入力してください。",
		digits : "数字のみを入力してください。",
		creditcard : "有効なクレジットカード番号を入力してください。",
		equalTo : "同じ値をもう一度入力してください。",
		accept : "有効な拡張子を含む値を入力してください。",
		maxlength : jQuery.format("{0} 文字以内で入力してください。"),
		minlength : jQuery.format("{0} 文字以上で入力してください。"),
		rangelength : jQuery.format("{0} 文字から {1} 文字までの値を入力してください。"),
		range : jQuery.format("{0} から {1} までの値を入力してください。"),
		max : jQuery.format("{0} 以下の値を入力してください。"),
		min : jQuery.format("{1} 以上の値を入力してください。")
	};
})(jQuery);
