let getProperty = (obj, inherited = false) => {
  return inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj);
};

function fn() {
  this.a = () => 1;
  this.b = () => 2;
}
fn.prototype.c = ()=>3;

console.log(getProperty(new fn()));
console.log(getProperty(new fn(),true));
