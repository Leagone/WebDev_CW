
function getSelectedValue( selectList ) {
  return selectList[ selectList.selectedIndex ].value;
}

function getSelectedText( selectList ) {
   return selectList.options[ selectList.selectedIndex ].text;
}



function outputForm(form){

var inputQueryType = getSelectedValue(form.queryType);

document.getElementById("nameOutput").innerHTML = form.name.value;
document.getElementById("sNameOutput").innerHTML = form.sName.value;
document.getElementById("emailOutput").innerHTML = form.emailAdress.value;
document.getElementById("textOutput").innerHTML = form.textArea.value;
document.getElementById("queryOutput").innerHTML = inputQueryType;

document.getElementById("name").style.visibility = "hidden";
document.getElementById("sName").style.visibility = "hidden";
document.getElementById("emailAdress").style.visibility = "hidden";
document.getElementById("field1").style.visibility = "hidden";
document.getElementById("queryType").style.visibility = "hidden";

document.getElementById("submitButton").style.visibility = "hidden";

document.getElementById("editButton").style.visibility = "visible";


}

function editForm(form) {

var inputQueryType = getSelectedValue(form.queryType);

document.getElementById("nameOutput").innerHTML = "";
document.getElementById("sNameOutput").innerHTML = "";
document.getElementById("emailOutput").innerHTML = "";
document.getElementById("textOutput").innerHTML = "";
document.getElementById("queryOutput").innerHTML = "";

document.getElementById("name").style.visibility = "visible";
document.getElementById("sName").style.visibility = "visible";
document.getElementById("emailAdress").style.visibility = "visible";
document.getElementById("field1").style.visibility = "visible";
document.getElementById("queryType").style.visibility = "visible";

document.getElementById("submitButton").style.visibility = "visible";

document.getElementById("editButton").style.visibility = "hidden";

}

function clearForm(form){

	document.getElementById("holidaysQuery").style.visibility = "hidden";
	document.getElementById("editButton").style.visibility = "hidden";

	document.getElementById("thankYouText").innerHTML = "<p>Thank you for your query !</p>";



}







// Getting value
function checkOptions(form) {
	var inputName = form.name.value;
	var inputSname = form.sName.value;
	var inputEmailAdress = form.emailAdress.value;
	var inputTextArea = form.textArea.value;
	var inputQueryType = getSelectedValue(form.queryType);

	var message = "Missing values : \n";
	var sentinel = 0;

	if (inputName == "") {

		message += "First name \n";
		sentinel++;
	}

	if (inputSname == "") {

		message += "Surname name \n";
		sentinel++;
	}
	if (inputEmailAdress == "") {

		message += "Email adress \n";
		sentinel++;
	}
	if (inputTextArea == "") {

		message += "Text area \n";
		sentinel++;
	}
	if (inputQueryType == "select") {

		message += "Query type \n";
		sentinel++;
	}

	if (sentinel == 0) {

		outputForm(form);


	} else {
		alert(message);
	}

}

