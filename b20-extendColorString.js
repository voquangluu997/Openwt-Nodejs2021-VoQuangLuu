let extendColorString = (color) => {
  let rs =
    color.charAt(0) == "#"
      ? color.slice(1)
      : color
          .slice(0)
          .split("")
          .map((item) => {
            return item + item;
          })
          .join("");

  return "#" + rs;
};
