function gladiator(arg1, arg2, arg3, arg4, arg5) {
  let lostFightCounts = Number(arg1);
  let priceHelmet = Number(arg2);
  let priceSword = Number(arg3);
  let priceShield = Number(arg4);
  let priceArmor = Number(arg5);

  let expenses = 0;
  let shieldCount = 0;

  for (let i = 1; i <= lostFightCounts; i++) {
    if (i % 2 === 0) {
      expenses += priceHelmet;
    }
    if (i % 3 === 0) {
      expenses += priceSword;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      expenses += priceShield;
      shieldCount++;
      if (shieldCount % 2 === 0) {
        expenses += priceArmor;
      }
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

gladiator(23,
    12.50,
    21.50,
    40,
    200
    )