function vacation(numPeople, group, day) {
  let totalPrice = 0;
  switch (day) {
    case "Friday":
      if (group === "Students") {
        totalPrice = numPeople * 8.45;
      } else if (group === "Business") {
        totalPrice = numPeople * 10.9;
      } else if (group === "Regular") {
        totalPrice = numPeople * 15;
      }
      break;
      case "Saturday":
      if (group === "Students") {
        totalPrice = numPeople * 9.80;
      } else if (group === "Business") {
        totalPrice = numPeople * 15.60;
      } else if (group === "Regular") {
        totalPrice = numPeople * 20;
      }
      break;
      case "Sunday":
      if (group === "Students") {
        totalPrice = numPeople * 10.46;
      } else if (group === "Business") {
        totalPrice = numPeople * 16;
      } else if (group === "Regular") {
        totalPrice = numPeople * 22.50;
      }
      break;
  }

  if(group === "Students" && numPeople>=30){
      totalPrice *=0.85;
  }

  if(group === "Business" && numPeople>=100){
      if(day === "Friday"){
          totalPrice -= 10 * 10.9;
      }else if(day === "Saturday"){
          totalPrice -= 10 * 15.60;
      }else if(day === "Sunday"){
          totalPrice -= 10 * 16;
      }
  }

  if(group === "Regular" && numPeople>=10 && numPeople<=20){
      totalPrice *=0.95;
  } 

  console.log(`Total price: ${totalPrice.toFixed(2)}` )
}


vacation(40,
    "Regular",
    "Saturday"
    )