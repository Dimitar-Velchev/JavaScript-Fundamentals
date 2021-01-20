function repeatString(string, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result;
}

repeatString("abc", 2);
//console.log(repeatString("abc", 2)); taka ednovrem izvikvame i printirame;
