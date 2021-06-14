let today = new Date();
let christmasDay = new Date(today.getFullYear(), 11, 25);

let timeInADay = 24 * 60 * 60 * 1000;

let daysLeftToChristmas = Math.ceil(
  (christmasDay.getTime() - today.getTime()) / timeInADay
);
console.log(daysLeftToChristmas + " days left to next chrismas day");
