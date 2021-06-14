let getDay = (day) => {
  switch (day) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wes";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    default:
      return "Sat";
  }
};

function showDayTimeFormat(num) {
  return num > 9 ? "" + num : "0" + num;
}
let day = new Date();

let today = getDay(day.getDay());
let currentTime =
  showDayTimeFormat(day.getHours()) +
  ":" +
  showDayTimeFormat(day.getMinutes()) +
  ":" +
  showDayTimeFormat(day.getSeconds());
console.log(showDayTimeFormat(day.getHours()));
console.log("Today is : ", today);
console.log("Current time : ", currentTime);
