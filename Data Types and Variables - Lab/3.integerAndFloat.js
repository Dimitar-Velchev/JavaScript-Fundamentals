function integerFloat(firstNum, secNum, thirdNum) {
  let sum = firstNum + secNum + thirdNum;
  if (sum % 1 === 0) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}

integerFloat(100, 200, 303);
