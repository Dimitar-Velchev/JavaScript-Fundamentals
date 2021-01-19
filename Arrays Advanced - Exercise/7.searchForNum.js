function searchForNum(array, manipulator) {
  let count = 0;
  let startArray = array;
  let elementsToTake = manipulator.shift();
  let elementsToDelete = manipulator.shift();
  let searchNum = manipulator.shift();

  let outputArr = startArray.slice(0, elementsToTake);
  outputArr = outputArr.slice(elementsToDelete, outputArr.length);

  for (const num of outputArr) {
    if (num === searchNum) {
      count++;
    }
  }
  console.log(`Number ${searchNum} occurs ${count} times.`)
}

searchForNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);

// function solve(nums, criteria) {
//     let count = 0;
//     let el = criteria[2];

//     let arr = nums.slice(0, criteria[0]);
//     // here
//     arr = arr.slice(criteria[1], arr.length);

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === el) {
//             count++;
//         }
//     }

//     console.log(`Number ${el} occurs ${count} times.`)

// };
