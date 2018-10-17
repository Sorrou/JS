const toUpperCase = str => str.toUpperCase();

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let myCh = 0;
    for (let ch = 0; ch < str.length; ch ++) {
    if (toUpperCase(str[ch]) === str[ch]) {
      myCh ++;
    }
  }
  return myCh;
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  } else {
    return 0;
  }
  // END
};

const greaterThan = (first, second) =>
  compare(first, second) === 1;

const lessThan = (first, second) =>
  compare(first, second) === -1;

const isEqual = (first, second) =>
  compare(first, second) === 0;

console.log(greaterThan('AD', 'ad sd'));
console.log(lessThan('ghe df', 'dfwe r D'));
console.log(isEqual('az', 'adA'));
