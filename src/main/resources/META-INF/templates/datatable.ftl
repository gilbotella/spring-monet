TableTools.BUTTONS.cam_owner = {
	"sAction": "text",
	"sFieldBoundary": "",
	"sFieldSeperator": "\t",
	"sNewLine": "<br>",
	"sToolTip": "",
	"sButtonClass": "DTTT_button_text",
	"sButtonClassHover": "DTTT_button_text_hover",
	"sButtonText": "Hacer",
	"mColumns": "all",
	"bHeader": false,
	"bFooter": false,
	"sDiv": "",
	"fnMouseover": null,
	"fnMouseout": null,
	"fnClick": null,
	"fnSelect": null,
	"fnComplete": null,
	"fnInit": null
};

var ${id}_var;
$(document).ready(function() {

	<#if onRowDraw == "">
		<#assign funcion = "null">
	<#else>
		<#assign funcion = "function(nRow, aData, iDisplayIndex) { return ${onRowDraw}; }">
	</#if>


	if(${id}_var == undefined) {
		${id}_var = monet_dt.init('${id}',
						<#if defOrdCol == -1>undefined<#else>${defOrdCol}</#if>,
						<#if defOrd == "">undefined<#elseif defOrd == "desc">'desc'<#else>'asc'</#if>,
						${columnsJson}, ${funcion}, ${saveState}, ${lengthChange}, ${withPagination}, 
						${withFilter}, '${locale}', ${sDom}, ${oTableTools});
	}
	<#if tableData == "">
		var data = [];
	<#else>
		var data = ${tableData};
	</#if> 
	if(data != undefined && data.length > 0) {
		${id}_var.fnClearTable(false);

		monet_dt.redrawData(data, ${columnsJson});

		${id}_var.fnAddData(data, true);
	} else {
		${id}_var.fnClearTable(true);
	}
	${onInit}
});

<#if onFormatDetails != "">
	$(document).delegate('#${id} tbody td img[src*="resources/monet/css/images/details_"]', 'click', function () {
		var nTr = this.parentNode.parentNode;
		if (this.src.match('details_close')) {
			this.src = "resources/monet/css/images/details_open.gif";
			${id}_var.fnClose(nTr);
		} else {
			this.src = "resources/monet/css/images/details_close.gif";
			var aData = ${id}_var.fnGetData(nTr);
			${id}_var.fnOpen(nTr, ${onFormatDetails}(aData), nTr.className + " details");
		}
	});
</#if>
