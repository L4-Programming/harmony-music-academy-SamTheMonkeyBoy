// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the user's email address - userEmail (string)
  let userEmail = document.querySelector("#email").value;

  // Get the user's level - userLevel (string)
  let userLevel = document.querySelector("#level").value;

  // Get the user's hours of study userHours (number)
  let userHours = document.querySelector("#hoursPerWeek").value;
  console.log({ userHours, userLevel, userEmail });
});
// Validate the user's input
// Check if the user has selected a level - check level entered; check selected "Beginner" or "Advanced"; conditional statements
// Check if the user has provided an email address - check email entered, valid format (e.g., name@domain.com).
// Check if the user has specified at least one hour of study - must be => 1
// Check if the number of hours requested is within the allowed range - <= to mx number allowed in level
// Calculate the total cost
// Display the total cost to the user
