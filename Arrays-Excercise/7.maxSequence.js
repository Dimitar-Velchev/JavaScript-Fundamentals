function maxSequence(arr) {
  let maxxSequence = [];

  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    let currentSequence = [element];

    for (let i = index + 1; i < arr.length; i++) {
      let nextElement = arr[i];

      if (element === nextElement) {
        currentSequence.push(nextElement);
        index = i;
      } else {
        break;
      }
    }
    if (currentSequence.length > maxxSequence.length) {
      maxxSequence = currentSequence;
    }
  }
  console.log(maxxSequence.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
