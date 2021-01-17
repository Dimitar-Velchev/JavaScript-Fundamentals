function equalArrays(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    arr1[i] = Number(arr1[i]);
    arr2[i] = Number(arr2[i]);
  }

  let areEqual = true;
  let sum = 0;
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      areEqual = false;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    } else {
      sum += arr1[i];
    }
  }
  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
//equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
