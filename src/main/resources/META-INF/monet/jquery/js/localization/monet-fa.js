/* --------------------- */
/* Persian (Farsi) Translation for the jQuery UI date picker plugin. Javad Mowlanezhad -- jmowla@gmail.com */
/* --------------------- */
/* Locale: FA            */
/* --------------------- */

(function($) {
	$.datepicker.regional['fa'] = {
		closeText : 'بستن',
		prevText : '&#x3c;قبلي',
		nextText : 'بعدي&#x3e;',
		currentText : 'امروز',
		monthNames : [ 'فروردين', 'ارديبهشت', 'خرداد', 'تير', 'مرداد',
				'شهريور', 'مهر', 'آبان', 'آذر', 'دي', 'بهمن', 'اسفند' ],
		monthNamesShort : [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
				'11', '12' ],
		dayNames : [ 'يکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه',
				'جمعه', 'شنبه' ],
		dayNamesShort : [ 'ي', 'د', 'س', 'چ', 'پ', 'ج', 'ش' ],
		dayNamesMin : [ 'ي', 'د', 'س', 'چ', 'پ', 'ج', 'ش' ],
		weekHeader : 'هف',
		dateFormat : 'yy/mm/dd',
		firstDay : 6,
		isRTL : true,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['fa'] = {
		required : "تکمیل این فیلد اجباری است.",
		remote : "لطفا این فیلد را تصحیح کنید.",
		email : ".لطفا یک ایمیل صحیح وارد کنید",
		url : "لطفا آدرس صحیح وارد کنید.",
		date : "لطفا یک تاریخ صحیح وارد کنید",
		dateISO : "لطفا تاریخ صحیح وارد کنید (ISO).",
		number : "لطفا عدد صحیح وارد کنید.",
		digits : "لطفا تنها رقم وارد کنید",
		creditcard : "لطفا کریدیت کارت صحیح وارد کنید.",
		equalTo : "لطفا مقدار برابری وارد کنید",
		accept : "لطفا مقداری وارد کنید که ",
		maxlength : jQuery.validator
				.format("لطفا بیشتر از {0} حرف وارد نکنید."),
		minlength : jQuery.validator.format("لطفا کمتر از {0} حرف وارد نکنید."),
		rangelength : jQuery.validator
				.format("لطفا مقداری بین {0} تا {1} حرف وارد کنید."),
		range : jQuery.validator
				.format("لطفا مقداری بین {0} تا {1} حرف وارد کنید."),
		max : jQuery.validator.format("لطفا مقداری کمتر از {0} حرف وارد کنید."),
		min : jQuery.validator
				.format("لطفا مقداری بیشتر از {0} حرف وارد کنید.")
	};

})(jQuery);