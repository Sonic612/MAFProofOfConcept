/* This document helper is used to set the time and date functions in a form. */
$(document).ready(function () {
	// New Date
	var date = new Date();

	//get up the date and time.
	var today = date.toISOString().slice(0, 10);
	var time = date.toTimeString().slice(0, 5);

	//initial log.
	console.log("Today's Date: " + today);
	console.log("Today's Time: " + time);

	//set the date to each input
	$(".datepicker").each(function () {
		$(this).val(today);
		console.log("Date(value): " + $(this).val());
	});
	//set the time to each input.
	$(".timer").each(function () {
		$(this).val(time);
		console.log("Time(value): " + $(this).val());
	});

	//all possible variables
	var pilot = "Select Pilot...";
	var plane = "Select Plane...";
	var flightReason = "Select a flight reason...";
	var name = "Enter Name...";
	var weight = "Enter Weight...";
	var age = "Enter Age...";
	var organization = "Enter Organization...";

	//setup all possible placeholders
	console.log(document.getElementsByTagName("legend")[0]);
	if (document.getElementsByTagName("legend")[0].innerHTML == "Flight") {
		document.getElementById("input_select_plane").options[0].innerHTML = plane;
		document.getElementById("input_select_plane").options[0].disabled = true;
		document.getElementById("input_select_flightPilot").options[0].innerHTML = pilot;
		document.getElementById("input_select_flightPilot").options[0].disabled = true;
	}

	if (document.getElementsByTagName("legend")[0].innerHTML == "Passenger") {
		document.getElementById("input_select_flightReason").options[0].innerHTML = flightReason;
		document.getElementById("input_select_flightReason").options[0].disabled = true;
		document.getElementById("input_text_name").placeholder = name;
		document.getElementById("input_number_weight").placeholder = weight;
		document.getElementById("input_number_age").placeholder = age;
		document.getElementById("input_text_organization").placeholder = organization;
	}

	if (document.getElementsByTagName("legend")[0].innerHTML == "Cargo") {
		document.getElementById("input_number_cargoWeight").placeholder = weight;
	}

	if (document.getElementsByTagName("legend")[0].innerHTML == "Emergency Contact") {
		document.getElementById("input_text_ecName").placeholder = name;
	}
	//sets up the image picker for the form.
	$("select.imgpick").imagepicker();
});