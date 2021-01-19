function houseParty(arr) {
  let guestList = [];
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(" ");
    if (command.length !== 3) {
      if (guestList.includes(command[0])) {
        guestList = guestList.filter((guestName => guestName !== command[0]));
      } else {
        console.log(`${command[0]} is not in the list!`);
        
      }
    } else {
      if (!guestList.includes(command[0])) {
        guestList.push(command[0]);
      } else {
        console.log(`${command[0]} is already in the list!`);
      }
    }
  }
  console.log(guestList.join("\n"));
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)

// houseParty([
//   "Tom is going!",
//   "Annie is going!",
//   "Tom is going!",
//   "Garry is going!",
//   "Jerry is going!",
// ]);
