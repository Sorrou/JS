const reverse = (str) => {
  let len = str.length;
  let word = ``;
  while (len !== 0) {
    word = word + (str[len - 1]);
    len = len - 1;
  }
  return word;
}
