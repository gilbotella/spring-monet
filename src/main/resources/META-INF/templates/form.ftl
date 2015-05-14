$(document).ready(function() {

	jQuery.extend(jQuery.validator.messages, {
		patron : "Escribe un texto que cumpla el formato indicado."
	});
	if('${locale}' != 'en') {
		jQuery.extend(jQuery.validator.messages, validation.regional['${locale}']);
	}

	$("#${id}").validate({
		onkeyup: false,
		onclick: false,
		ignore: "",
		errorPlacement: function(error, element) {
			padre = element.parent();
			error.appendTo(padre.find("span#" + element.attr('id') + "_error"));
		}
	});
});

