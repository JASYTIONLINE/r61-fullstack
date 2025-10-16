// JASYTI's Travel Agency

// Fixed numbers
const souvenirs = 100; //dollars
const travelTime = 2; // hours

// Promt the user for input
const yourName = prompt("Enter your name");
const destination = prompt("Enter your destination");
const days = prompt("How many days would you like to travel?");
const dailyBudget = prompt("How Much can you spend eac day?");

// Calculate total budget
const totalCost = (days * dailyBudget) + souvenirs;

//calulate travel time
const totalTravelTime = days * 2; // # of days * 2 hours

// Display the results
alert(`Hello ${yourName}! Welcome to JASYTI's Travel Agency.
Your trip to ${destination} will take approximately ${totalTravelTime} hours.
Your total budget for this trip is $${totalCost}. Enjoy your trip!`);

