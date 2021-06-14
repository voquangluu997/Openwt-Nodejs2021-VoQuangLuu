function moveChartoFirst(string) {
  if (string.length < 3) return false;
  return (
    string.slice(string.length - 3) + string.substring(0, string.length - 3)
  );
}
