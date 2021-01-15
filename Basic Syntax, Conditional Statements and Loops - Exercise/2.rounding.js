function rounding(num, rounder) {
  if (rounder > 15) {
    rounder = 15;
  }

  console.log(parseFloat(num.toFixed(rounder)));
}

rounding(2.5, 2);
