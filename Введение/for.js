const isPrime = (num) => {
  let result = false;
  if (num > 1) {
    let divcounter = 0;
    for (let counter = 0; num >= counter; counter ++) {
      if (num % counter === 0) {
        divcounter ++;
      }
      result = (divcounter > 2) ? false : true;
    }
  }
  console.log(result)
}
isPrime(-11);
