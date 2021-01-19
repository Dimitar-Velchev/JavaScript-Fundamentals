function sumFirstLast(arr){
    let output = Number(arr.pop()) + Number(arr.shift());
    return output; 

}

sumFirstLast(['20', '30', '40'])