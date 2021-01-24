function factorialDivision(num1, num2) {
  function factorial(num) {
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res *= i;
    }
    return res;
  }

  let factorialOne = factorial(num1);
  let factorialTwo = factorial(num2);

  let result = factorialOne / factorialTwo;
  console.log(result.toFixed(2));
}

factorialDivision(5, 2);
