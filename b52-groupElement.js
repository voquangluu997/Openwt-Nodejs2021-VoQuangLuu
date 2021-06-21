// let groupElement = ()=>{

// }

const group_By = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
   
console.log(group_By([6.1, 4.2, 6.3], Math.sqrt));
console.log(group_By([6.1, 4.2, 6.3], Math.floor));
console.log(group_By(["one", "two", "three"], "length"));
