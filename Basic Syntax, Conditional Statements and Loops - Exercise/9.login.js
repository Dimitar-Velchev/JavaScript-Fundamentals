function login(input) {
  let username = input.shift();
  let password = username.split("").reverse().join("");

  let failCounter = 0;

  for (i = 0; i < input.length; i++) {
    let current = input[i];
    if (current !== password) {
      failCounter++;
      if (failCounter > 3) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log(`Incorrect password. Try again.`);
    } else {
      console.log(`User ${username} logged in.`);
    }
  }
}

login(['Acer','login','go','let me in','recA']);
