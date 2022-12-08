var currentTab = 0; // Current tab (count)
showTab(currentTab); // Function shows left tab on start
showTab2(currentTab); // Function shows right tab on start

function showTab2(n) {
    // This function will display the specified tab (right side)
    var x = document.getElementsByClassName("tab2");
    x[n].style.display = "block";
  }

function showTab(n) {
  // This function will display the specified tab (left side)
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // Function for Previous/Next buttons
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Odeslat ";
  } else {
    document.getElementById("nextBtn").innerHTML = "Další";
  }
  // Run step indicator
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  var y = document.getElementsByClassName("tab2");
  // Exit the function if any field in the current tab is invalid
  if (n == 1 && !validateForm()) return false ;
  // Hide the current tab
  x[currentTab].style.display = "none";
  y[currentTab].style.display = "none";
  // Increase or decrease the current tab count by 1
  currentTab = currentTab + n;
  // If you have reached the end of the form
  if (currentTab >= x.length) {
    // The form gets submitted
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab
  showTab(currentTab);
  showTab2(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab
  for (i = 0; i < y.length; i++) {
    // If a field is empty
    if (y[i].value == "") {
      // Add an "invalid" class to the field
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // Return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  // and adds the "active" class to the current step:
  x[n].className += " active";
}
