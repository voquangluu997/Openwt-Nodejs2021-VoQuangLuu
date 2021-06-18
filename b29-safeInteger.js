let safeInteger = (num) => {
  return Math.round(
    Math.min(Math.max(num, Number.MIN_SAFE_INTEGER), Number.MAX_SAFE_INTEGER)
  );
};
