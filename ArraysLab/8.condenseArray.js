function condenseArr(arr){
    

    while(arr.length > 1){
        let condensedArr = [];

        for(i = 0; i < arr.length - 1; i++){
            condensedArr.push(arr[i] + arr[i + 1]);
    
        }
        arr = condensedArr;
    }
    
console.log(arr[0]);
}

condenseArr([5,0,4,1,2])