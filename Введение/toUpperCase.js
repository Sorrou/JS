import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
const solution = (text) => {
let str = '';
  for (let i = 0; i <= text.length - 1; i+=1 ) {
    if (text[i - 1] == 0 || text[i - 1] === undefined) {
     str += text[i].toUpperCase();
    } else str += text[i];
  }
  return str;
};
// END

export default solution;
