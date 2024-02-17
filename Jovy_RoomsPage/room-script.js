//setting date min for form arrival and departure
datePickerId.min = new Date().toLocaleDateString('en-ca');
function setDepMinimum() {
    dateChooseArrival = document.getElementById('datePickerId').value;
    document.getElementById('dateMinimum').setAttribute("min", dateChooseArrival);
}


//CREDIT CARD
// Get the credit card input element by ID
const creditCardInput = document.getElementById('creditCardInput');

// Add event listeners for keypress, change, and blur events
creditCardInput.addEventListener('keypress', formatCreditCard);
creditCardInput.addEventListener('change', formatCreditCard);
creditCardInput.addEventListener('blur', formatCreditCard);

// Add event listeners for copy, cut, and paste events
creditCardInput.addEventListener('copy', triggerChangeAfterDelay);
creditCardInput.addEventListener('cut', triggerChangeAfterDelay);
creditCardInput.addEventListener('paste', triggerChangeAfterDelay);

// Function to format the credit card input
function formatCreditCard() {
    const value = creditCardInput.value;
    const formattedValue = value.replace(/[^0-9]+/gi, '').replace(/(.{4})/g, '$1 ');
    creditCardInput.value = formattedValue;
}

// Function to trigger a change event after a short delay
function triggerChangeAfterDelay() {
    setTimeout(function () {
        const event = new Event('change');
        creditCardInput.dispatchEvent(event);
    });
}


// EXPIRY DATE
document.getElementById('expiryDate').addEventListener('input', function () {
    displayexp(document.getElementById('expiryDate'));
});

function displayexp(input) {
    let exp = input.value;

    // Remove any existing slashes from the input
    exp = exp.replace(/\//g, '');

    if (exp.length > 2) {
        const modifiedExp = exp.slice(0, 2) + '/' + exp.slice(2, 4);
        input.value = modifiedExp;
    } else if (exp.length === 2) {
        input.value = exp + '/';
    } else {
        input.value = exp;
    }
}


//Section for Form tabs
var currentTab = 0; // Current tab is set to be the first tab (0)

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("submit").style.display = "inline";
        document.getElementById("nextBtn").style.display = "none";
    } else {
        document.getElementById("nextBtn").style.display = "inline";
        document.getElementById("submit").style.display = "none";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}
showTab(currentTab); // Display the current tab

function nextPrev(number) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (number == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + number;
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telRegex = /^[0-9]+$/;

    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If got empty field:
        if (y[i].value == "") {
            // add "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        } else {
            if (y[i].type === "email" && !emailRegex.test(y[i].value)) {
                y[i].className += " invalid";
                valid = false;
            }
            if (y[i].type === "tel" && !telRegex.test(y[i].value)) {
                y[i].className += " invalid";
                valid = false;
            }
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // returns the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //and adds the "active" class on the current step:
    x[n].className += " active";
}

