let showSpicifiedColum = (arr, colums, delimiter) =>{
  let rs = arr.map((obj) => {
    let arrTemp = [];
    colums.forEach((item) => {
      console.log(obj[item]);
      obj[item] != undefined ? arrTemp.push(obj[item]) : arrTemp.push("");
    });
    return arrTemp;
  });
  return [
    colums.join(delimiter),
    rs
      .map((e) => {
        return e
          .map((item) => {
            return `"${item}"`;
          })
          .join(",");
      })
      .join("\n"),
  ].join("\n");
}

showSpicifiedColum(
  [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
  ["x", "y"],
  ","
);
