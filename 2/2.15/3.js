const min = (a, b) => {
  let diff = a - b;
  let res;
  if (diff > 0) {
    res = b;
  } else {
    res = a;
  }
  return res;
};
