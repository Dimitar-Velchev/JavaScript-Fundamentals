function bitcoin(data) {
  let goldValue = 67.51;
  let bitcoinValue = 11949.16;
  let bitcoinCount = 0;
  let firstDay;
  let totalMoney = 0;

  for (i = 1; i <= data.length; i++) {
    let goldMined = data[i - 1];
    if (i % 3 === 0) {
      goldMined *= 0.7;
      totalMoney += goldMined * goldValue;
    } else {
      totalMoney += goldMined * goldValue;
    }
    if(totalMoney >= bitcoinValue){
        if(firstDay === undefined){
            firstDay = i;
        }
        bitcoinCount += parseInt(totalMoney / bitcoinValue);
        totalMoney %= bitcoinValue;
    }
  }
  console.log(`Bought bitcoins: ${bitcoinCount}`);
  if(firstDay != undefined){
      console.log(`Day of the first purchased bitcoin: ${firstDay}`)
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}

bitcoin([100,200,300])