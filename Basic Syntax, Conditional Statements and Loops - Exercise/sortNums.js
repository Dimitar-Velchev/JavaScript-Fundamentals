function sort(num1, num2, num3) {
    let array = [num1, num2, num3];
    array.sort((a, b) => b - a);
    console.log(array.join("\n"));
}

sort(1, 2, 3);


//Another solution:

// function sort(num1, num2, num3) {
//     let array = [num1, num2, num3];

//     let sorted = array.sort(function(a, b) {
//         return b - a;
//     });

//     console.log(sorted.join('\n'));
// }