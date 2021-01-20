function oddAndEvenSums(number) {
  let oddDigits = allOddNumbers(number);
  let evenDigits = allEvenNumbers(number);

  let oddSum = getSum(oddDigits);
  let evenSum = getSum(evenDigits);

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

  function allOddNumbers(n) {
    let oddDigits = [];

    while (n > 0) {
      let lastDigit = n % 10;

      if (lastDigit % 2 !== 0) {
        oddDigits.push(lastDigit);
      }

      n = parseInt((n / 10));
    }
    return oddDigits;
  }
  function allEvenNumbers(n) {
    let evenDigits = [];

    while (n > 0) {
      let lastDigit = n % 10;

      if (lastDigit % 2 === 0) {
        evenDigits.push(lastDigit);
      }

      n = Math.trunc((n / 10));
    }
    return evenDigits;
  }
  function getSum(arr) {
    let sum = 0;

    for (let number of arr) {
      sum += number;
    }
    return sum;
  }
}

oddAndEvenSums(3495892137259234);
