function reverseArr(num, arr){
    arr.length = num;
    console.log(arr.reverse().join(' '));

}

reverseArr(3, [10, 20, 30, 40, 50])

// Another solution with for loop no methods:

function reverseArr2(num, arr){
    let newArr = [];

    for(i = 0; i < num; i++){
        newArr.push(arr[i]);
    }

    let result = '';
    for(i = newArr.length - 1; i >= 0; i--){
     result += `${newArr[i]} `
    }
console.log(result)
}
reverseArr2 (3, [10, 20, 30, 40, 50])
