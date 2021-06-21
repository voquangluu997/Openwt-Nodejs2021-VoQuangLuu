let getURLParam = (url) => {
  let paramString =
    url.indexOf("?") >= 0 ? url.slice(url.indexOf("?") + 1) : "";
  let obj = {};

  paramString.split("&").map((item) => {
    obj[item.split("=")[0]] = item.split("=")[1];
  });

  return paramString == "" ? {} : obj;
};

console.log(getURLParam("http://url.com/page?name=Adam&surname=Smith"));
console.log(getURLParam("http://url.com/page"));
