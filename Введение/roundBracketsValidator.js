const length = str => str.length;

const areBracketsBalanced = str => {
  let result = 0;
  for (let len = 0; len <= length(str); len++) {
    if (str[len] == '(') {
      result += 1;
    } else if (str[len] == ')') {
      result -= 1;
    }
  }
  console.log(result);
}

areBracketsBalanced('((()))');
