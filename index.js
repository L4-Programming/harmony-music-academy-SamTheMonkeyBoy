// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const maxHoursPerLevel = {
    basic: 5,
    advanced: 10,
  };

  let userEmail = document.querySelector("#email").value;
  let userLevel = document.querySelector("#level").value;
  let userHours = parseInt(document.querySelector("#hoursPerWeek").value);

  // Validate the user's input
  // Check if the user has provided an email address
  if (userEmail === "") {
    alert("Please enter your email address.");

    return;
  }
  // Check if the user has selected a level - check level entered; check selected "Beginner" or "Advanced"; conditional statements
  if (userLevel === "") {
    alert("Please select a level of study.");

    return;
  }
  // Check if the user has specified at least one hour of study - must be => 1
  if (isNaN(userHours) || userHours < 1) {
    alert("Please enter at least one hour of tuition.");

    return;
  }

  // Is userLevel valid?
  if (!maxHoursPerLevel.hasOwnProperty(userLevel)) {
    alert("Invalid level of study selected.");

    return;
  }

  // Is userHours within range?
  const maxAllowedHours = maxHoursPerLevel[userLevel];
  if (userHours > maxAllowedHours) {
    alert(`You can only study a maximum of ${maxAllowedHours} hours per week.`);

    return;
  }

  console.log({ userEmail, userLevel, userHours });
});

// Calculate the total cost
// Display the total cost to the user
