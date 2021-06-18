let randomHexColor = () => {
  return "#" + (Math.random() * 1000000 * 0xffffff).toString(16).slice(0, 6);
};
