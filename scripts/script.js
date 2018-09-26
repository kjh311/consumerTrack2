



function validateNameForm() {

	
	var yearDrop = document.getElementById("year-drop");
    var monthDrop = document.getElementById("month-drop");
    var dayDrop = document.getElementById("day-drop");
	var bornMonth = monthDrop.options[monthDrop.selectedIndex].value;
	var bornYear = yearDrop.options[yearDrop.selectedIndex].value;
	var bornDay = dayDrop.options[dayDrop.selectedIndex].value;
	var todaysDate = new Date().toLocaleDateString();
	var dateArray = todaysDate.split("/")
	var month18YearsAgo = parseInt(dateArray[0]);
	var day18YearsAgo = parseInt(dateArray[1]);
	var year18YearsAgo = parseInt(dateArray[2] - 18);
	var nameFormWrapper = document.getElementById("name-form-div");
	var firstNameInput = document.getElementById("first-name-input");
	var emailWrapper = document.getElementById("email-form-div");
	var errorText = document.getElementById("age-error-text");

	// console.log("Year born on was " + bornYear);
	// console.log("Month born on was " + bornMonth);
	// console.log("Day born on was " + bornDay);
	// console.log("today's date is " +todaysDate)
	// console.log(date18YearsAgoArray);
	// console.log("year 18 years ago was " + year18YearsAgo)

	// if (firstNameInput.validity) {
 //       if (firstNameInput.validity.valid === true) {
 //         // nameInput.style.borderColor = "#e4e4e4"
 //         console.log("hello")
 //       }
 //    }


	function calculate_age(dob) { 
	    var diff_ms = Date.now() - dob.getTime();
	    var age_dt = new Date(diff_ms); 
	  
	    return Math.abs(age_dt.getUTCFullYear() - 1970);
	}

	if(calculate_age(new Date(bornYear, bornMonth, bornDay)) < 18){
		errorText.classList.remove("d-none"); 
    	errorText.classList.add("d-block"); 
		return false;
	}
	nameFormWrapper.classList.remove("d-block"); 
    nameFormWrapper.classList.add("d-none"); 
    emailWrapper.classList.remove("d-none"); 
    emailWrapper.classList.add("d-block"); 
}


function validateEmailForm(){

	
	var emailInput = document.getElementById('email-input');
	var emailAddress = document.getElementById('email-input').value;
	var acountExistsWarning = document.getElementById("email-error-div");

	

	if(emailAddress === "testemail@test.com"){
		acountExistsWarning.classList.remove("invisible");
		emailInput.style.borderColor = "#df4e60";
		return false;
	}


}

function addRedBorderEmail(){
	var emailInput = document.getElementById('email-input');
	    emailInput.style.borderColor = "#df4e60"
}

function addRedBorderName(){
	var nameInput = document.getElementById('first-name-input');
	// var nameInputError = document.getElementById('first-name-input-error');
	    nameInput.style.borderColor = "#df4e60"
	    // nameInput.setCustomValidity('Please enter a first name. Only letters and no spaces')"
	    // nameInput.setCustomValidity('Please enter a first name. Only letters and no spaces');
	    // nameInputError.classList.remove("invisible");
	    // nameInputError.classList.add("visible");

}

function addRedBorderDayDrop(){
	var dayDropSelect = document.getElementById('day-drop');
	    dayDropSelect.style.borderColor = "#df4e60"
	    dayDropSelect.setCustomValidity('Please select a day')
}

function addRedBorderMonthDrop(){
	var monthDropSelect = document.getElementById('month-drop');
	    monthDropSelect.style.borderColor = "#df4e60"
	    monthDropSelect.setCustomValidity('Please select a month')
}

function addRedBorderYearDrop(){
	var yearDropSelect = document.getElementById('year-drop');
	    yearDropSelect.style.borderColor = "#df4e60"
	    yearDropSelect.setCustomValidity('Please select a year')

}

function removeEmailInputBorder(){
	var emailInput = document.getElementById('email-input');
	var acountExistsWarning = document.getElementById("email-error-div");


	// if (emailInput.validity) {
       // if (emailInput.validity.valid === true) {
         emailInput.style.borderColor = "#e4e4e4"
         if(!acountExistsWarning.classList.contains("invisible")){
			acountExistsWarning.className += " invisible "
		// }
       // }
    }
}

function removeNameInputBorder(){
	var nameInput = document.getElementById('first-name-input');



	// if (nameInput.validity) {
       // if (nameInput.validity.valid === true) {
         nameInput.style.borderColor = "#e4e4e4"
         // nameInput.setCustomValidity('')

       // }
    // }
	
}

function removeMonthDropRedBorder(){
	var monthDrop = document.getElementById('month-drop');
	// if (monthDrop.validity) {
		// if (monthDrop.validity.valid === true) {
	      monthDrop.style.borderColor = "#e4e4e4"
	      monthDrop.setCustomValidity('')
	    // }
    // }
}

function removeYearDropRedBorder(){
	var yearDrop = document.getElementById('year-drop');
	// if (yearDrop.validity) {
		// if (yearDrop.validity.valid === true) {
	      yearDrop.style.borderColor = "#e4e4e4"
	      yearDrop.setCustomValidity('')
	    // }
    }
// }

function removeDayDropRedBorder(){
	var dayDrop = document.getElementById('day-drop');
	// if (dayDrop.validity) {
		// if (dayDrop.validity.valid === true) {
	      dayDrop.style.borderColor = "#e4e4e4"
	      dayDrop.setCustomValidity('')
	    // }
    // }
}