function sumOfOdd(num){
let sum = 0;
for(i = 1; i <= num*2; i++){
    if(i % 2 === 1){
        console.log(i);
        sum +=i;
    }
    
}
console.log(`Sum: ${sum}`);
}

sumOfOdd(3)