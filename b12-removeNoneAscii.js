let removeNonAscii = (string) => {
  return string.replace(/[^\x20-\x7E]/g, "");
};
