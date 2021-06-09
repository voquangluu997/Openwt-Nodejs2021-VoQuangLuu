let today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
day = day < 10 ? "0" + day : day;
month = month < 10 ? "0" + month : month;

console.log(day + "-" + month + "-" + year);
console.log(day + "/" + month + "/" + year);
console.log(month + "-" + day + "-" + year);
console.log(month + "/" + day + "/" + year);
