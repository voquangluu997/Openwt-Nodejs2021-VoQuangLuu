for (let year = 2014; year <= 2050; year++) {
  let day = new Date(year, 0, 1).getDay();
  if (day == 0) console.log("1st  January in " + year + " is Sunday");
}
 