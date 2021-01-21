function passwordValidator(pass) {
  
    let v1 = lengthCheck(pass);
    let v2 =isAplhaNum(pass);
    let v3 = containsTwoDigits(pass);

  if (!v1) {
    console.log(`Password must be between 6 and 10 characters`);
  }

  if (!v2) {
      console.log(`Password must consist only of letters and digits`)
  }

  if (!v3) {
      console.log(`Password must have at least 2 digits`)
  }

  if(v1 && v2 && v3){
      console.log(`Password is valid`)
  }

  function lengthCheck(pass) {
    return pass.length >= 6 && pass.length <= 10;
  }

  function isAplhaNum(pass) {
    let isLowerLetter = (x) => x >= 87 && x <= 122;
    let isCapitalLetter = (x) => x >= 65 && x <= 90;

    let isOk = true;

    for (let char of pass) {
      let numberValue = char.charCodeAt(0);

      if (
        !isDigit(numberValue) &&
        !isLowerLetter(numberValue) &&
        !isCapitalLetter(numberValue)
      ) {
        isOk = false;
        break;
      }
    }
    return isOk;
  }

  function containsTwoDigits(pass) {
    let counter = 0;
    let isOk = false;

    for (let char of pass) {
      let numberValue = char.charCodeAt(0);
      if (isDigit(numberValue)) {
        counter++;
      }
      if (counter === 2) {
        isOk = true;
        break;
      }
    }
    return isOk;
  }

  function isDigit(x){
      return x >= 48 && x <= 57;
}
}
passwordValidator("MyPass123");
