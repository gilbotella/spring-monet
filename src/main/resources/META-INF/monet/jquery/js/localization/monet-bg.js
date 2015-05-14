/* --------------------- */
/* Bulgarian initialisation for the jQuery UI date picker plugin. Written by Stoyan Kyosev (http://svest.org). */
/* --------------------- */
/* Locale: BG            */
/* --------------------- */

(function($) {
	$.datepicker.regional['bg'] = {
		closeText : 'затвори',
		prevText : '&#x3c;назад',
		nextText : 'напред&#x3e;',
		nextBigText : '&#x3e;&#x3e;',
		currentText : 'днес',
		monthNames : [ 'Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни',
				'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември' ],
		monthNamesShort : [ 'Яну', 'Фев', 'Мар', 'Апр', 'Май', 'Юни', 'Юли',
				'Авг', 'Сеп', 'Окт', 'Нов', 'Дек' ],
		dayNames : [ 'Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък',
				'Петък', 'Събота' ],
		dayNamesShort : [ 'Нед', 'Пон', 'Вто', 'Сря', 'Чет', 'Пет', 'Съб' ],
		dayNamesMin : [ 'Не', 'По', 'Вт', 'Ср', 'Че', 'Пе', 'Съ' ],
		weekHeader : 'Wk',
		dateFormat : 'dd.mm.yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['bg'] = {
		required : "Полето е задължително.",
		remote : "Моля, въведете правилната стойност.",
		email : "Моля, въведете валиден email.",
		url : "Моля, въведете валидно URL.",
		date : "Моля, въведете валидна дата.",
		dateISO : "Моля, въведете валидна дата (ISO).",
		number : "Моля, въведете валиден номер.",
		digits : "Моля, въведете само цифри",
		creditcard : "Моля, въведете валиден номер на кредитна карта.",
		equalTo : "Моля, въведете същата стойност отново.",
		accept : "Моля, въведете стойност с валидно разширение.",
		maxlength : $.validator.format("Моля, въведете повече от {0} символа."),
		minlength : $.validator.format("Моля, въведете поне {0} символа."),
		rangelength : $.validator
				.format("Моля, въведете стойност с дължина между {0} и {1} символа."),
		range : $.validator.format("Моля, въведете стойност между {0} и {1}."),
		max : $.validator
				.format("Моля, въведете стойност по-малка или равна на {0}."),
		min : $.validator
				.format("Моля, въведете стойност по-голяма или равна на {0}.")
	};
})(jQuery);
