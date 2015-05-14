$(document).ready(function() {
	$.datepicker.setDefaults($.datepicker.regional['${locale}']);
	$.timepicker.setDefaults($.timepicker.regional['${locale}']);

<#if timeFormat != "" && dateFormat != "">
	$("#${id}").datetimepicker({
<#elseif timeFormat == "">
	$("#${id}").datepicker({
<#else>
	$("#${id}").timepicker({
</#if>
		<#if minDate != ""> minDate: "${minDate}", </#if>
		<#if maxDate != ""> maxDate: "${maxDate}", </#if>
		<#if dateFormat != ""> dateFormat: "${dateFormat}", </#if>
		<#if timeFormat != ""> timeFormat: "${timeFormat}",
			<#if (timeFormat?index_of("s") >= 0)>showSecond: true,</#if>
			<#if (timeFormat?index_of("l") >= 0)>showMillisec: true,</#if>
			<#if (timeFormat?index_of("z") >= 0)>showTimezone: true,</#if>
		</#if>
		<#if timeFormat != "" && dateFormat != "" && timeFormat = "hh:mm:ss.lz">  <#-- We put 'separator' just in ISO.DATE_TIME case -->
			separator: 'T',
		</#if>
		<#if dateFormat != "">
			numberOfMonths: ${numberOfMonths},
			changeMonth: ${changeMonth},
			changeYear: ${changeYear}
		</#if>
		<#if iconTrigger == "true">,
			showOn: "button",
			buttonImage: "monet/images/calendar.gif",
			buttonImageOnly: true
		</#if>
	});
});