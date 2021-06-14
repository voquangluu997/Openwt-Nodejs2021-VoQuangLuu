function getExtensionOfFilename(filename) {
  return filename.slice(filename.indexOf(".") + 1, filename.length);
}

let filename = "ex1.js";
console.log(getExtensionOfFilename(filename));
