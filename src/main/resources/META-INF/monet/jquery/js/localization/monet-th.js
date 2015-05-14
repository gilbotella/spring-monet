/* --------------------- */
/* Thai initialisation for the jQuery UI date picker plugin. Written by pipo (pipo@sixhead.com). */
/* --------------------- */
/* Locale: TH            */
/* --------------------- */

(function($) {
	$.datepicker.regional['th'] = {
		closeText : 'ปิด',
		prevText : '&laquo;&nbsp;ย้อน',
		nextText : 'ถัดไป&nbsp;&raquo;',
		currentText : 'วันนี้',
		monthNames : [ 'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม',
				'มิถุนายน', 'กรกฏาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม',
				'พฤศจิกายน', 'ธันวาคม' ],
		monthNamesShort : [ 'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
				'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.' ],
		dayNames : [ 'อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์',
				'เสาร์' ],
		dayNamesShort : [ 'อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.' ],
		dayNamesMin : [ 'อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.' ],
		weekHeader : 'Wk',
		dateFormat : 'dd/mm/yy',
		firstDay : 0,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['th'] = {
		required : "โปรดระบุ",
		remote : "โปรดแก้ไขให้ถูกต้อง",
		email : "โปรดระบุที่อยู่อีเมล์ที่ถูกต้อง",
		url : "โปรดระบุ URL ที่ถูกต้อง",
		date : "โปรดระบุวันที่ ที่ถูกต้อง",
		dateISO : "โปรดระบุวันที่ ที่ถูกต้อง (ระบบ ISO).",
		number : "โปรดระบุทศนิยมที่ถูกต้อง",
		digits : "โปรดระบุจำนวนเต็มที่ถูกต้อง",
		creditcard : "โปรดระบุรหัสบัตรเครดิตที่ถูกต้อง",
		equalTo : "โปรดระบุค่าเดิมอีกครั้ง",
		accept : "โปรดระบุค่าที่มีส่วนขยายที่ถูกต้อง",
		maxlength : jQuery.validator
				.format("โปรดอย่าระบุค่าที่ยาวกว่า {0} อักขระ"),
		minlength : jQuery.validator
				.format("โปรดอย่าระบุค่าที่สั้นกว่า {0} อักขระ"),
		rangelength : jQuery.validator
				.format("โปรดอย่าระบุค่าความยาวระหว่าง {0} ถึง {1} อักขระ"),
		range : jQuery.validator.format("โปรดระบุค่าระหว่าง {0} และ {1}"),
		max : jQuery.validator.format("โปรดระบุค่าน้อยกว่าหรือเท่ากับ {0}"),
		min : jQuery.validator.format("โปรดระบุค่ามากกว่าหรือเท่ากับ {0}")
	};
})(jQuery);