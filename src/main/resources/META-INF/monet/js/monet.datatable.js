var monet_dt = function() {

	// Parte privada
	var dataTableStrings_es = {"sProcessing": "Procesando...","sLengthMenu": "Mostrar _MENU_ registros","sZeroRecords": "No existen registros para mostrar.","sInfo": "Registros _START_ - _END_ de _TOTAL_","sInfoEmpty": "","sInfoFiltered": "(Filtrado de _MAX_ registros)","sInfoPostFix": "","sSearch": "Buscar","sUrl": "","oPaginate": { "sFirst": "&nbsp;&nbsp;", "sPrevious": "&nbsp;&nbsp;", "sNext": "&nbsp;&nbsp;", "sLast": "&nbsp;&nbsp;" }};
	var dataTableStrings_en = {"sProcessing": "Processing...","sLengthMenu": "Show_MENU_records","sZeroRecords": "There are no records to display.","sInfo": "Records_START_ - _END_ of_TOTAL_","sInfoEmpty": "","sInfoFiltered": "(Filter _MAX_records)","sInfoPostFix": "","sSearch": "Search","sUrl": "","oPaginate": { "sFirst": "&nbsp;&nbsp;", "sPrevious": "&nbsp;&nbsp;", "sNext": "&nbsp;&nbsp;", "sLast": "&nbsp;&nbsp;" }};
	var dataTableStrings_ca = {"sProcessing": "Processant...","sLengthMenu": "Mostra _MENU_ registres","sZeroRecords": "No hi ha registres a mostrar.","sInfo": "Registres _START_ - _END_ de _TOTAL_","sInfoEmpty": "","sInfoFiltered": "(Filtratge de _MAX_ registres)","sInfoPostFix": "","sSearch": "Busca","sUrl": "","oPaginate": { "sFirst": "&nbsp;&nbsp;", "sPrevious": "&nbsp;&nbsp;", "sNext": "&nbsp;&nbsp;", "sLast": "&nbsp;&nbsp;"}};
	var dataTableStrings_de = {"sProcessing": "Wird bearbeitet...","sLengthMenu": "Anzeigen _MENU_ Eintragungen","sZeroRecords": "Keine Eintragungen zum Anzeigen vorhanden.","sInfo": "Eintragungen _START_ - _END_ von _TOTAL_","sInfoEmpty": "","sInfoFiltered": "(Filterung von _MAX_ Eintragungen)","sInfoPostFix": "","sSearch": "Suchen","sUrl": "","oPaginate": { "sFirst": "&nbsp;&nbsp;", "sPrevious": "&nbsp;&nbsp;", "sNext": "&nbsp;&nbsp;", "sLast": "&nbsp;&nbsp;"}};
	var dataTableStrings_fr = {"sProcessing": "Traitement en cours...","sLengthMenu": "Afficher _MENU_ registres","sZeroRecords": "Aucun registre à afficher.","sInfo": "Registres _START_ - _END_ sur_TOTAL_","sInfoEmpty": "","sInfoFiltered": "(Filtrage de _MAX_ registres)","sInfoPostFix": "","sSearch": "Rechercher","sUrl": "","oPaginate": { "sFirst": "&nbsp;&nbsp;", "sPrevious": "&nbsp;&nbsp;", "sNext": "&nbsp;&nbsp;", "sLast": "&nbsp;&nbsp;"}};
	var dataTableStrings_nl = {"sProcessing": "Bezig met verwerken...","sLengthMenu": "_MENU_ registraties weergeven","sZeroRecords": "Er zijn geen registraties om weer te geven.","sInfo": "Registraties _START_ - _END_ van _TOTAL_","sInfoEmpty": "","sInfoFiltered": "(Filtering van _MAX_ registraties)","sInfoPostFix": "","sSearch": "Zoeken","sUrl": "","oPaginate": { "sFirst": "&nbsp;&nbsp;", "sPrevious": "&nbsp;&nbsp;", "sNext": "&nbsp;&nbsp;", "sLast": "&nbsp;&nbsp;" }};

	function dataTableInit(id, aaSorting, aoColumns, rowCallback, saveState, lengthChange, withPagination, withFilter, locale, sDom, oTableTools) {
		if(!aoColumns) { aoColumns = '[]'; }
		if(!aaSorting) { aaSorting = '[]'; }
		if(saveState == undefined) { saveState = true; }
		if(lengthChange == undefined) { lengthChange = true; }
		if(rowCallback == undefined) { rowCallback = function( nRow, aData, iDisplayIndex ) { return nRow; }; }

		var config = {"bJQueryUI": false,
		              "bAutoWidth": false, 
		              "bLengthChange": lengthChange, 
		              "bPaginate": withPagination,
		              "bInfo": withPagination,
		              "bFilter": withFilter,
		              "oLanguage": eval("dataTableStrings_" + locale),
		              "aaSorting": eval(aaSorting),
		              "bStateSave": saveState,
		              "aoColumns": eval(aoColumns),
		              "fnRowCallback": rowCallback,
		              "sPaginationType": "full_numbers",
		              "oTableTools": oTableTools};

		// Añado el sDom si hay botones.
		if(sDom != null) {
			config["sDom"] = sDom;
		}

		return $('#'+id+'').dataTable(config);
	}

	return {

		redrawData: function(data, columnas) {
			if(columnas != undefined) {
				for(n=0; n < columnas.length; n++) {
					if(columnas[n].radiobutton) {
						/* Columna de radiobotones: añadimos el input con el valor de la columna */
						for(j=0; j < data.length; j++) {
							var valor = data[j][n];
							data[j][n] = "<input type=\"radio\" class=\"radio noMargin\" name=\"" + columnas[n].nameRadiobutton + "\" value=\"" + valor + "\" />";
						}
					}
					if(columnas[n].details) {
						/* Columna de desplegable de detalle: sustituimos el contenido por el icono */
						for(j=0; j < data.length; j++) {
							var valor = data[j][n];
							data[j][n] = "<img src='resources/monet/css/images/details_open.gif' />";
						}
					}
				}
			}
		},

		init: function (id, col, orden, columnas, rowCallback, saveState, lengthChange, withPagination, withFilter, locale, sDom, oTableTools) {
			var aoColumns;

			if(columnas != undefined) {
				aoColumns = '[';
				for(n=0; n < columnas.length; n++) {

					if(n!=0) {
						aoColumns += ',';
					}
					if(columnas[n] != null) {
						aoColumns += '{"bSearchable":' + (columnas[n].buscar == undefined || columnas[n].buscar ? 'true' : 'false') + 
						             ',"bSortable":' + (columnas[n].ordenar == undefined || columnas[n].ordenar ? 'true' : 'false') +
						             ',"bVisible":' + (columnas[n].visible ? 'true' : 'false');
						if(columnas[n].cssClassColumn != null) {
							aoColumns += ',"sClass":"' + columnas[n].cssClassColumn + '"';
						}
						aoColumns += '}';
					} else {
						aoColumns += 'null';
					}
				}
				aoColumns += ']';
			}

			var aaSorting;
			if(col != undefined && orden != undefined) {
				aaSorting = '[[' + col + ',"' + orden + '"]]';
			}

			return dataTableInit(id, aaSorting, aoColumns, rowCallback, saveState, lengthChange, withPagination, withFilter, locale, sDom, oTableTools);
		}
	};
}();