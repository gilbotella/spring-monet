/* --------------------- */
/* Russian translation for the jQuery Timepicker Addon. Written by Trent Richardson */
/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. Written by Andrew Stromnov (stromnov@gmail.com). */
/* --------------------- */
/* Locale: RU            */
/* --------------------- */

(function($) {
	$.timepicker.regional['ru'] = {
		timeOnlyTitle : 'Выберите время',
		timeText : 'Время',
		hourText : 'Часы',
		minuteText : 'Минуты',
		secondText : 'Секунды',
		millisecText : 'Миллисекунды',
		timezoneText : 'Часовой пояс',
		currentText : 'Сейчас',
		closeText : 'Закрыть',
		timeFormat : 'hh:mm tt',
		amNames : [ 'AM', 'A' ],
		pmNames : [ 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['ru'] = {
		closeText : 'Закрыть',
		prevText : '&#x3c;Пред',
		nextText : 'След&#x3e;',
		currentText : 'Сегодня',
		monthNames : [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
				'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
		monthNamesShort : [ 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл',
				'Авг', 'Сен', 'Окт', 'Ноя', 'Дек' ],
		dayNames : [ 'воскресенье', 'понедельник', 'вторник', 'среда',
				'четверг', 'пятница', 'суббота' ],
		dayNamesShort : [ 'вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт' ],
		dayNamesMin : [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ],
		weekHeader : 'Не',
		dateFormat : 'dd.mm.yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['ru'] = {
		required : "Это поле необходимо заполнить.",
		remote : "Пожалуйста, введите правильное значение.",
		email : "Пожалуйста, введите корректный адрес электронной почты.",
		url : "Пожалуйста, введите корректный URL.",
		date : "Пожалуйста, введите корректную дату.",
		dateISO : "Пожалуйста, введите корректную дату в формате ISO.",
		number : "Пожалуйста, введите число.",
		digits : "Пожалуйста, вводите только цифры.",
		creditcard : "Пожалуйста, введите правильный номер кредитной карты.",
		equalTo : "Пожалуйста, введите такое же значение ещё раз.",
		accept : "Пожалуйста, выберите файл с правильным расширением.",
		maxlength : jQuery.validator
				.format("Пожалуйста, введите не больше {0} символов."),
		minlength : jQuery.validator
				.format("Пожалуйста, введите не меньше {0} символов."),
		rangelength : jQuery.validator
				.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
		range : jQuery.validator
				.format("Пожалуйста, введите число от {0} до {1}."),
		max : jQuery.validator
				.format("Пожалуйста, введите число, меньшее или равное {0}."),
		min : jQuery.validator
				.format("Пожалуйста, введите число, большее или равное {0}.")
	};
})(jQuery);
