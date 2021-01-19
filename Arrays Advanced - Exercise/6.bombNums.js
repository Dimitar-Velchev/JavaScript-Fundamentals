function bombNum(arr, bomb) {
  let output = arr.slice(0);
  while (output.includes(bomb[0])) {
    let indexBomb = output.indexOf(bomb[0]);
    let startIndex = Math.max(indexBomb - bomb[1], 0);
    output.splice(indexBomb, bomb[1] + 1);
    output.splice(startIndex, bomb[1]);
  }
  // 1. Solution with reduce
  // return output.reduce((a,b) =>{
  //     a+=b;
  //     return a;
  // }, 0)

  //2. with for loop

  let sum = 0;
  for (let i = 0; i < output.length; i++) {
    sum += output[i];
  }
  return sum;
}

bombNum([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
