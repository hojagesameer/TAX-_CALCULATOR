// Get the modal
var modal = document.getElementById("myModal");

// Get the close button inside the modal
var closeButton = document.querySelector(".close-btn");

// Get the close button inside the modal content
var closeButtonModal = document.querySelector(".result-btn");

// When the user clicks the button, open the modal
document.getElementById("taxForm").onsubmit = function (event) {
  event.preventDefault(); // Prevent form submission from refreshing the page

  var grossIncome = parseFloat(document.getElementById("grossIncome").value);
  var extraIncome = parseFloat(document.getElementById("extraIncome").value);
  var ageGroup = document.getElementById("ageGroup").value;
  var deductions = parseFloat(document.getElementById("deductions").value);

  // Validate if all fields are filled
  if (!grossIncome || !ageGroup || !deductions) {
    alert("Please fill in all fields its compulsory."); // You can replace this with your preferred error handling method
    return; // Prevent further execution
  }

  // Perform tax calculation based on provided formula
  var totalIncome = grossIncome + extraIncome - deductions;
  var tax = 0;

  if (totalIncome <= 800000) {
    tax = 0; // No tax if income is less than or equal to 8 lakhs
  } else {
    var taxableIncome = totalIncome - 800000;
    if (ageGroup === "<40") {
      tax = 0.3 * taxableIncome; // 30% tax for age < 40
    } else if (ageGroup === ">=40&<60") {
      tax = 0.4 * taxableIncome; // 40% tax for age >= 40 and < 60
    } else if (ageGroup === ">=60") {
      tax = 0.1 * taxableIncome; // 10% tax for age >= 60
    }
  }

  // Calculate the overall income after tax deductions
  var overallIncome = totalIncome - tax;

  // Format the overall income to have commas for thousands separator
  var formattedIncome = overallIncome.toLocaleString("en-IN");

  // Show the calculated income in the modal
  var modalText = document.getElementById("modalText");
  modalText.innerHTML =
    "Your overall income will be " + formattedIncome + " after tax deductions";
  modal.style.display = "block";
};

// When the user clicks on close button, close the modal
closeButton.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks on close button inside modal content, close the modal
closeButtonModal.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
