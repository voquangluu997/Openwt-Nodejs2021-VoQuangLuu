let randomNNumber = (min, max, n) => {
  return Array.from({ length: n }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
};

console.log(randomNNumber(1, 20, 10));
