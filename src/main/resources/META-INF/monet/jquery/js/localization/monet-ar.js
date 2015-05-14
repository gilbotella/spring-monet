/* --------------------- */
/* Arabic Translation for jQuery UI date picker plugin. Khaled Al Horani -- koko.dw@gmail.com خالد الحوراني -- koko.dw@gmail.com */
/* NOTE: monthNames are the original months names and they are the Arabic names, not the new months name فبراير - يناير and there isn't any Arabic roots for these months */
/* --------------------- */
/* Locale: AR            */
/* --------------------- */

(function($) {
	$.datepicker.regional['ar'] = {
		closeText : 'إغلاق',
		prevText : '&#x3c;السابق',
		nextText : 'التالي&#x3e;',
		currentText : 'اليوم',
		monthNames : [ 'كانون الثاني', 'شباط', 'آذار', 'نيسان', 'آذار',
				'حزيران', 'تموز', 'آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني',
				'كانون الأول' ],
		monthNamesShort : [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
				'11', '12' ],
		dayNames : [ 'السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء',
				'الخميس', 'الجمعة' ],
		dayNamesShort : [ 'سبت', 'أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس',
				'جمعة' ],
		dayNamesMin : [ 'سبت', 'أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس',
				'جمعة' ],
		weekHeader : 'أسبوع',
		dateFormat : 'dd/mm/yy',
		firstDay : 0,
		isRTL : true,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['ar'] = {
		required : "هذا الحقل إلزامي",
		remote : "يرجى تصحيح هذا الحقل للمتابعة",
		email : "رجاء إدخال عنوان بريد إلكتروني صحيح",
		url : "رجاء إدخال عنوان موقع إلكتروني صحيح",
		date : "رجاء إدخال تاريخ صحيح",
		dateISO : "رجاء إدخال تاريخ صحيح (ISO)",
		number : "رجاء إدخال عدد بطريقة صحيحة",
		digits : "رجاء إدخال أرقام فقط",
		creditcard : "رجاء إدخال رقم بطاقة ائتمان صحيح",
		equalTo : "رجاء إدخال نفس القيمة",
		accept : "رجاء إدخال ملف بامتداد موافق عليه",
		maxlength : jQuery.validator.format("الحد الأقصى لعدد الحروف هو {0}"),
		minlength : jQuery.validator.format("الحد الأدنى لعدد الحروف هو {0}"),
		rangelength : jQuery.validator
				.format("عدد الحروف يجب أن يكون بين {0} و {1}"),
		range : jQuery.validator.format("رجاء إدخال عدد قيمته بين {0} و {1}"),
		max : jQuery.validator.format("رجاء إدخال عدد أقل من أو يساوي (0}"),
		min : jQuery.validator.format("رجاء إدخال عدد أكبر من أو يساوي (0}")
	};
})(jQuery);
