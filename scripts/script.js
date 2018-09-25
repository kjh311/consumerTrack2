



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
	var emailWrapper = document.getElementById("email-form-div");
	var errorText = document.getElementById("age-error-text");

	// console.log("Year born on was " + bornYear);
	// console.log("Month born on was " + bornMonth);
	// console.log("Day born on was " + bornDay);
	// console.log("today's date is " +todaysDate)
	// console.log(date18YearsAgoArray);
	// console.log("year 18 years ago was " + year18YearsAgo)


	function calculate_age(dob) { 
	    var diff_ms = Date.now() - dob.getTime();
	    var age_dt = new Date(diff_ms); 
	  
	    return Math.abs(age_dt.getUTCFullYear() - 1970);
	}

	// console.log(calculate_age(new Date(bornYear, bornMonth, bornDay)));

	if(calculate_age(new Date(bornYear, bornMonth, bornDay)) < 18){
		// alert("you must 18 or older to enter");
		errorText.classList.remove("d-none"); 
    	errorText.classList.add("d-block"); 
		return false;
	}




	

	nameFormWrapper.classList.remove("d-block"); 
    nameFormWrapper.classList.add("d-none"); 
    emailWrapper.classList.remove("d-none"); 
    emailWrapper.classList.add("d-block"); 





}