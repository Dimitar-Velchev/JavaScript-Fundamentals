function splitArr(arr){
    let k = arr.shift();
    let firstArray = arr.slice(0, k);
    let secondArray = arr.slice(arr.length - k, arr.length);
    console.log(firstArray.join(' '));
    console.log(secondArray.join(' '));

}

splitArr([3, 
    7, 8, 9, 6]
    )