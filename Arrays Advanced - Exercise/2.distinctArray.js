function distictArray(arr){
    let output = [];
    for(let i = 0; i < arr.length; i++){
        if(!output.includes(arr[i])){
            output.push(arr[i]);
        }
    }
return output.join(' ');
}

distictArray([7, 8, 9, 7, 2, 3, 4, 1, 2])