function concat2String(str1, str2) {
  return str1.length == str2.length
    ? str1 + str2
    : str1.length > str2.length
    ? str1.slice(0, str2.length) + str2
    : str1.slice(0, str1.length) + str1;
}

