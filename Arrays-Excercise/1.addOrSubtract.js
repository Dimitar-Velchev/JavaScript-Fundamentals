function addOrSub(arr) {
  let sumOriginal = 0;
  let sumModified = 0;

  for (i = 0; i < arr.length; i++) {
    sumOriginal += arr[i];

    if (arr[i] % 2 == 0) {
      arr[i] += i;
      sumModified += arr[i];
    } else {
      arr[i] -= i;
      sumModified += arr[i];
    }
  }
  console.log(arr);
  console.log(sumOriginal);
  console.log(sumModified);
}

addOrSub([5, 15, 23, 56, 35]);
