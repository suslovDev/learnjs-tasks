function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  }
  let truncStr = str.substr(0, maxlength - 1);
  return `${truncStr}...`;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
