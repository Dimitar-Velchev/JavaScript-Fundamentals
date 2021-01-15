function reversedChars(char1, char2, char3) {
  let string = `${char1} ${char2} ${char3}`;
  let reversedString = " ";
  for (let char of string) {
    reversedString = char + reversedString;
  }
  console.log(reversedString);
}

reversedChars("A", "B", "C");
