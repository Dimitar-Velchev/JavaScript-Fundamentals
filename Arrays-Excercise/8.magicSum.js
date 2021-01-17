function magicSum(array, sum) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];

    for (let index = 0; index < array.length; index++) {
      let nextElement = array[index];

      let isEqualToSum = currentElement + nextElement === sum;

      if (index !== i && isEqualToSum && !result.includes(`${nextElement} ${currentElement}`)) {
        result.push(`${currentElement} ${nextElement}`);
      }
    }
  }
  console.log(result.join('\n'));
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27);
