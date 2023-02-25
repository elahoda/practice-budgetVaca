var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function () {
  var totalBudget = Number(prompt("What is your total budget?"));
  var accommodationCosts = Number(prompt("What are your accomodation costs?"));
  var numDays = Number(prompt("How many days do your trips last?"));
  console.log(totalBudget, accommodationCosts, numDays);

  var calculateDailyBudget = function (
    totalBudget,
    accomodationCosts,
    numDays
  ) {
    var daily = (totalBudget - accomodationCosts) / numDays;
    dailyBudget.innerText = `You can spend $${daily.toFixed(
      2
    )} a day on food and fun.`;
    console.log(daily);
  };
  calculateDailyBudget(totalBudget, accommodationCosts, numDays);
};

tripInfo();
