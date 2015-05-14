/* --------------------- */
/* Euskarako oinarria 'UI date picker' jquery-ko extentsioarentzat. Karrikas-ek itzulia (karrikas@karrikas.com) */
/* --------------------- */
/* Locale: EU            */
/* --------------------- */

(function($) {
	$.datepicker.regional['eu'] = {
		closeText : 'Egina',
		prevText : '&#x3c;Aur',
		nextText : 'Hur&#x3e;',
		currentText : 'Gaur',
		monthNames : [ 'Urtarrila', 'Otsaila', 'Martxoa', 'Apirila', 'Maiatza',
				'Ekaina', 'Uztaila', 'Abuztua', 'Iraila', 'Urria', 'Azaroa',
				'Abendua' ],
		monthNamesShort : [ 'Urt', 'Ots', 'Mar', 'Api', 'Mai', 'Eka', 'Uzt',
				'Abu', 'Ira', 'Urr', 'Aza', 'Abe' ],
		dayNames : [ 'Igandea', 'Astelehena', 'Asteartea', 'Asteazkena',
				'Osteguna', 'Ostirala', 'Larunbata' ],
		dayNamesShort : [ 'Iga', 'Ast', 'Ast', 'Ast', 'Ost', 'Ost', 'Lar' ],
		dayNamesMin : [ 'Ig', 'As', 'As', 'As', 'Os', 'Os', 'La' ],
		weekHeader : 'Wk',
		dateFormat : 'yy/mm/dd',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['eu'] = {
		required : "Eremu hau beharrezkoa da.",
		remote : "Mesedez, bete eremu hau.",
		email : "Mesedez, idatzi baliozko posta helbide bat.",
		url : "Mesedez, idatzi baliozko URL bat.",
		date : "Mesedez, idatzi baliozko data bat.",
		dateISO : "Mesedez, idatzi baliozko (ISO) data bat.",
		number : "Mesedez, idatzi baliozko zenbaki oso bat.",
		digits : "Mesedez, idatzi digituak soilik.",
		creditcard : "Mesedez, idatzi baliozko txartel zenbaki bat.",
		equalTo : "Mesedez, idatzi berdina berriro ere.",
		accept : "Mesedez, idatzi onartutako luzapena duen balio bat.",
		maxlength : jQuery.validator
				.format("Mesedez, ez idatzi {0} karaktere baino gehiago."),
		minlength : jQuery.validator
				.format("Mesedez, ez idatzi {0} karaktere baino gutxiago."),
		rangelength : jQuery.validator
				.format("Mesedez, idatzi {0} eta {1} karaktere arteko balio bat."),
		range : jQuery.validator
				.format("Mesedez, idatzi {0} eta {1} arteko balio bat."),
		max : jQuery.validator
				.format("Mesedez, idatzi {0} edo txikiagoa den balio bat."),
		min : jQuery.validator
				.format("Mesedez, idatzi {0} edo handiagoa den balio bat.")
	};

})(jQuery);
