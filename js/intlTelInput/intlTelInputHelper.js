/*This script is used to add and combine the intlTelInput and maskedInput to the tel inputs*/

$(document).ready(function() {
	$(".phone").intlTelInput();
	
	var intlNumber;
	intlNumber = $(".phone").attr("placeholder");
	document.getElementsByClassName("phone").placeholder = intlNumber;
	intlNumber = intlNumber.replace(/\d/g, '9');
	$(".phone").mask(intlNumber, {autoclear: false});
	
	//---------Log: Initialize-----------
	console.log("Start(Initialize)::");
	console.log("IntlNumber(Value): " + intlNumber);
	console.log("Phone(Placeholder): " + document.getElementsByClassName("phone").placeholder);
	console.log("Phone(Value): " + document.getElementsByClassName("phone").value);
	
	//This changes the phonenumber and deletes any numbers in the input mask when the country is changed.
	$(".phone").on("countrychange", function(e, countryData) {
		//---------On Country Change--------
		console.log(this)
		this.value = "";
		console.log("---Phone Click(Start)---");
		intlNumber = this.placeholder;
		console.log("IntlNumber(Value:Before): " + intlNumber);
		intlNumber = intlNumber.replace(/\d/g, '9');
		console.log("IntlNumber(Value:After): " + intlNumber);
		$(this).mask(intlNumber, {autoclear: false});
		
	});
})