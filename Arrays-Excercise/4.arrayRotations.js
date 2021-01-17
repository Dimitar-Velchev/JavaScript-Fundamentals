function arrayRotations(arr, rotations) {
  for (i = 1; i <= rotations; i++) {
    let firstEl = arr.shift();
    arr.push(firstEl);
  }
  console.log(arr.join(' '))
}

arrayRotations([51, 47, 32, 61, 21], 2);
