function move3MiddleChar(string) {
  if (string.length % 2 == 0) return false;
  if (string.length < 3) return false;
  return (
    string.slice(0, string.length / 2 - 1) +
    string.slice(
      Math.round(string.length / 2) - 2,
      Math.round(string.length / 2) + 1
    ) +
    string.slice(Math.round(string.length / 2) + 1)
  );
}
