let yesNo = (string, def) => {
  return def ? def : string.lowerCase() == "y" || string.lowerCase() == "yes";
};
