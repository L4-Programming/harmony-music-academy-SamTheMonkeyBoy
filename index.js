// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();



  let userEmail = document.querySelector("#email").value;
  let userLevel = document.querySelector("#level").value;
  let userHours = parseInt(document.querySelector("#hoursPerWeek").value);

  // Validate the user's input
  

  console.log({ errors });
});

// Calculate the total cost
// Display the total cost to the user
