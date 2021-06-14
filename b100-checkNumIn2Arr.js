function checkNumIn2Arr(arr1, arr2) {
  for (let i = 0; i < arr1.length - 1; i++)
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] == arr2[j]) return true;
    }
    
  return false;
}
