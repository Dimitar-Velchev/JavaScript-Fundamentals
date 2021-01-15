function fuelMoney(distance, passengers, pricePerL) {
  let fuelNeeded = (distance / 100) * 7 + passengers * 0.100;
  let totalPrice = pricePerL * fuelNeeded;

  console.log(`Needed money for that trip is ${totalPrice}lv.`);
}

fuelMoney(260, 9, 2.49);
