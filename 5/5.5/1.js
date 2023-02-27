function camelize(str) {
  let strArr = str.split("");

  strArr.forEach((item, index, arr) => {
    if (item === "-") {
      arr.splice(index, 2, arr[index + 1].toUpperCase());
    }
  });
  return strArr.join("");
}
