function sorting(arr){

    let output = [];
    let sorted = arr.slice(0).sort((a,b) => b -a);
    while(sorted.length !== 0){
        output.push(sorted.shift());
        output.push(sorted.pop());
    }

    console.log(output.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])