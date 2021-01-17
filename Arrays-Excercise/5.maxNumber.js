function maxNumber(arr) {
  let outputArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currentEl = arr[i];
    let rightNums = arr.slice(i + 1);

    let isBigger = true;

    for (let s = 0; s < rightNums.length; s++) {
      if (currentEl <= rightNums[s]) {
        isBigger = false;
        break;
      }
    }
    if (isBigger) {
      outputArr.push(currentEl);
    }
  }
  console.log(outputArr.join(' '));
}

maxNumber([14, 24, 3, 19, 15, 17]);
