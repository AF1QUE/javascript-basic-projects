const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveawayText = document.querySelector(".giveaway");

const futureDate = new Date(1995, 11, 17, 3, 24, 0);

let r = futureDate.getMilliseconds();

let seconds = Math.floor(Date.now() / 1000);

console.log(seconds);
