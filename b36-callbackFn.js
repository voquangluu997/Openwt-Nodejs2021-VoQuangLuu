let callbackFn = (...fns) => {
  return (...args) => {
    return fns.map((fn) => {
      return fn.apply(null, args);
    });
  };
};

let findMaxMin = callbackFn(Math.max, Math.min);
console.log(Math.max(1, 2, 3));
