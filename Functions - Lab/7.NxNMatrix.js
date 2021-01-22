function matrix(num){
result = " ";
getRow(num);
printMatrix(result);
    
    function getRow(){
       for(i = 0; i<num; i++){
          result +=num + " "; 
       }
    }

    function printMatrix(){
        for(i = 0; i < num; i++){
            console.log(result);
        }
    }

}

matrix(7)