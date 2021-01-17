function commonElements(arr1, arr2){
arr1.forEach(element => {
    let includes = arr2.includes(element);
    if(includes){
        console.log(element)
    }
});
}



commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])