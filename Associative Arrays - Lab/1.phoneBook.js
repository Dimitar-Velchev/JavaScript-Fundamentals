function phoneBook(details) {
  let contacts = {};

  for (let line of details) {
    let [name, phone] = line.split(" ");

    contacts[name] = phone;
  }

  Object.keys(contacts).forEach(key =>{
      console.log(`${key} -> ${contacts[key]}`);
  })
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
