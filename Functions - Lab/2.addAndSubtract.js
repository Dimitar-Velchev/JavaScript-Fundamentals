function addAndSubtract(firstNum, secondNum, thirdNum) {
  let sum = sumTwoNums(firstNum, secondNum);
  let result = subtractNum(sum, thirdNum);

  console.log(result);

  function sumTwoNums(a, b) {
    return a + b;
  }

  function subtractNum(a, b) {
    return a - b;
  }
}

addAndSubtract(23, 6, 10);
