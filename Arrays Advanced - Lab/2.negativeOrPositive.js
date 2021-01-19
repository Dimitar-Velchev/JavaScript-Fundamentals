function negPosNum(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr.unshift(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
    
  }
for (const element of newArr) {
    console.log(element);
}
}

negPosNum([7, -2, 8, 9]);
