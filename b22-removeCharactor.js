function removeCharactor(string, removePosition) {
  return (
    string.substring(0, removePosition) + string.substring(removePosition + 1)
  );
}

