let prod = (arr1, arr2) => {
  return arr1.reduce((acc, curr1) => {
    return acc.concat(
      arr2.map((item) => {
        return [curr1, item];
      })
    );
  }, []);
};
