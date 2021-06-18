let everyNth = (arr, nth) => {
  return Array.filter((item, index) => {
    return (index + 1) % nth == 0;
  });
};


