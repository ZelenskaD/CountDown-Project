window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 100000, years: 30, rate: 3.5 };

  // Correctly assign values to the input fields
  document.getElementById("loan-amount").value = values.amount;
  document.getElementById("loan-years").value = values.years;
  document.getElementById("loan-rate").value = values.rate;

  // Call update to calculate and display the initial monthly payment
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues)); //an argument curUIVal
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const P = values.amount; // Principal amount
  const r = values.rate / 100 / 12; // Monthly interest rate
  const n = values.years * 12; // Total number of payments

  const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  return M.toFixed(2); //convrts num to a string
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = "$" + monthly;
}
