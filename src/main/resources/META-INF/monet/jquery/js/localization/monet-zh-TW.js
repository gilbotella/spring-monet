/* --------------------- */
/* Chinese translation for the jQuery Timepicker Addon. Written by Alang.lin */
/* Chinese initialisation for the jQuery UI date picker plugin. Written by Cloudream (cloudream@gmail.com). */
/* --------------------- */
/* Locale: ZH-TW         */
/* --------------------- */

(function($) {
	$.timepicker.regional['zh-TW'] = {
		timeOnlyTitle : '選擇時分秒',
		timeText : '時間',
		hourText : '時',
		minuteText : '分',
		secondText : '秒',
		millisecText : '毫秒',
		timezoneText : '時區',
		currentText : '現在時間',
		closeText : '確定',
		timeFormat : 'hh:mm tt',
		amNames : [ '上午', 'AM', 'A' ],
		pmNames : [ '下午', 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['zh-TW'] = {
		closeText : '關閉',
		prevText : '&#x3c;上月',
		nextText : '下月&#x3e;',
		currentText : '今天',
		monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月',
				'十月', '十一月', '十二月' ],
		monthNamesShort : [ '一', '二', '三', '四', '五', '六', '七', '八', '九', '十',
				'十一', '十二' ],
		dayNames : [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ],
		dayNamesShort : [ '周日', '周一', '周二', '周三', '周四', '周五', '周六' ],
		dayNamesMin : [ '日', '一', '二', '三', '四', '五', '六' ],
		weekHeader : '周',
		dateFormat : 'yy/mm/dd',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : true,
		yearSuffix : '年'
	};
})(jQuery);
