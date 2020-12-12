

export function get(key) {
  return (obj) => obj[key];
};

export function pipe(...fns) {
  return fns.reduce((fn1, fn2) => (arg) => fn2(fn1(arg)));
};
