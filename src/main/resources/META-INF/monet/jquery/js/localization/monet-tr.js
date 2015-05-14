/* --------------------- */
/* Turkish translation for the jQuery Timepicker Addon. Written by Fehmi Can Saglam, Edited by Goktug Ozturk */
/* Turkish initialisation for the jQuery UI date picker plugin. Written by Izzet Emre Erkan (kara@karalamalar.net). */
/* --------------------- */
/* Locale: TR            */
/* --------------------- */

(function($) {
	$.timepicker.regional['tr'] = {
		timeOnlyTitle : 'Zaman Seçiniz',
		timeText : 'Zaman',
		hourText : 'Saat',
		minuteText : 'Dakika',
		secondText : 'Saniye',
		millisecText : 'Milisaniye',
		timezoneText : 'Zaman Dilimi',
		currentText : 'Şu an',
		closeText : 'Tamam',
		timeFormat : 'hh:mm',
		amNames : [ 'ÖÖ', 'Ö' ],
		pmNames : [ 'ÖS', 'S' ],
		ampm : false
	};
	$.datepicker.regional['tr'] = {
		closeText : 'kapat',
		prevText : '&#x3c;geri',
		nextText : 'ileri&#x3e',
		currentText : 'bugün',
		monthNames : [ 'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
				'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık' ],
		monthNamesShort : [ 'Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem',
				'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara' ],
		dayNames : [ 'Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe',
				'Cuma', 'Cumartesi' ],
		dayNamesShort : [ 'Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct' ],
		dayNamesMin : [ 'Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct' ],
		weekHeader : 'Hf',
		dateFormat : 'dd.mm.yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['tr'] = {
		required : "Bu alanın doldurulması zorunludur.",
		remote : "Lütfen bu alanı düzeltin.",
		email : "Lütfen geçerli bir e-posta adresi giriniz.",
		url : "Lütfen geçerli bir web adresi (URL) giriniz.",
		date : "Lütfen geçerli bir tarih giriniz.",
		dateISO : "Lütfen geçerli bir tarih giriniz(ISO formatında)",
		number : "Lütfen geçerli bir sayı giriniz.",
		digits : "Lütfen sadece sayısal karakterler giriniz.",
		creditcard : "Lütfen geçerli bir kredi kartı giriniz.",
		equalTo : "Lütfen aynı değeri tekrar giriniz.",
		accept : "Lütfen geçerli uzantıya sahip bir değer giriniz.",
		maxlength : jQuery.validator
				.format("Lütfen en fazla {0} karakter uzunluğunda bir değer giriniz."),
		minlength : jQuery.validator
				.format("Lütfen en az {0} karakter uzunluğunda bir değer giriniz."),
		rangelength : jQuery.validator
				.format("Lütfen en az {0} ve en fazla {1} uzunluğunda bir değer giriniz."),
		range : jQuery.validator
				.format("Lütfen {0} ile {1} arasında bir değer giriniz."),
		max : jQuery.validator
				.format("Lütfen {0} değerine eşit ya da daha küçük bir değer giriniz."),
		min : jQuery.validator
				.format("Lütfen {0} değerine eşit ya da daha büyük bir değer giriniz.")
	};
})(jQuery);
