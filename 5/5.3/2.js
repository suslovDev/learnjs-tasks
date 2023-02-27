function checkSpam(str) {
  let newStr = str.toLowerCase();

  if (newStr.indexOf("viagra") > 0 || newStr.indexOf("xxx") > 0) {
    return true;
  }
  return false;
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
