/* --------------------- */
/* French translation for the jQuery Timepicker Addon. Written by Thomas Lété */
/* Swiss-French initialisation for the jQuery UI date picker plugin. Written Martin Voelkle (martin.voelkle@e-tc.ch). */
/* --------------------- */
/* Locale: FR            */
/* --------------------- */

(function($) {
	$.timepicker.regional['fr-CH'] = {
		timeOnlyTitle : 'Choisir une heure',
		timeText : 'Heure',
		hourText : 'Heures',
		minuteText : 'Minutes',
		secondText : 'Secondes',
		millisecText : 'Millisecondes',
		timezoneText : 'Fuseau horaire',
		currentText : 'Maintenant',
		closeText : 'Terminé',
		timeFormat : 'hh:mm',
		amNames : [ 'AM', 'A' ],
		pmNames : [ 'PM', 'P' ],
		ampm : false
	};
	$.datepicker.regional['fr-CH'] = {
		closeText : 'Fermer',
		prevText : '&#x3c;Pr�c',
		nextText : 'Suiv&#x3e;',
		currentText : 'Courant',
		monthNames : [ 'Janvier', 'F�vrier', 'Mars', 'Avril', 'Mai', 'Juin',
				'Juillet', 'Ao�t', 'Septembre', 'Octobre', 'Novembre',
				'D�cembre' ],
		monthNamesShort : [ 'Jan', 'F�v', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul',
				'Ao�', 'Sep', 'Oct', 'Nov', 'D�c' ],
		dayNames : [ 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi',
				'Vendredi', 'Samedi' ],
		dayNamesShort : [ 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam' ],
		dayNamesMin : [ 'Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa' ],
		weekHeader : 'Sm',
		dateFormat : 'dd.mm.yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	validation.regional['fr-CH'] = {
		required : "Ce champ est requis.",
		remote : "Veuillez remplir ce champ pour continuer.",
		email : "Veuillez entrer une adresse email valide.",
		url : "Veuillez entrer une URL valide.",
		date : "Veuillez entrer une date valide.",
		dateISO : "Veuillez entrer une date valide (ISO).",
		number : "Veuillez entrer un nombre valide.",
		digits : "Veuillez entrer (seulement) une valeur numérique.",
		creditcard : "Veuillez entrer un numéro de carte de crédit valide.",
		equalTo : "Veuillez entrer une nouvelle fois la même valeur.",
		accept : "Veuillez entrer une valeur avec une extension valide.",
		maxlength : jQuery.validator
				.format("Veuillez ne pas entrer plus de {0} caractères."),
		minlength : jQuery.validator
				.format("Veuillez entrer au moins {0} caractères."),
		rangelength : jQuery.validator
				.format("Veuillez entrer entre {0} et {1} caractères."),
		range : jQuery.validator
				.format("Veuillez entrer une valeur entre {0} et {1}."),
		max : jQuery.validator
				.format("Veuillez entrer une valeur inférieure ou égale à {0}."),
		min : jQuery.validator
				.format("Veuillez entrer une valeur supérieure ou égale à {0}.")
	};
})(jQuery);
