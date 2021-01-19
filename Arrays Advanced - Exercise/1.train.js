function train(array) {
  let wagons = array
    .shift()
    .split(" ")
    .map((x) => Number(x));
  let maxCapacity = Number(array.shift());

  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");

    if (command.length === 2) {
      wagons.push(Number(command[1]));
    } else if (command.length === 1) {
      let passengersToAdd = Number(command[0]);
      for (let j = 0; i < wagons.length; j++) {
          if(passengersToAdd+wagons[j] <= maxCapacity){
              wagons[j] += passengersToAdd;
              break;
          }
      }
    }
  }

  return wagons.join(" ");
}

console.log(train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]));
