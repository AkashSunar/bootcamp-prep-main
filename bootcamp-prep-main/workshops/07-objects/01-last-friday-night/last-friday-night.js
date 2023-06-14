// YOUR CODE BELOW
function lastFridayNight(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i].amount
    }
    console.log(sum)
    return sum;
   
}
let transactions = [
    {
      name: "Tons of glitter",
      amount: 70
    },
    {
      name: "Porcelain Pink Flamingos",
      amount: 92
    },
    {
      name: "Chandelier replacement",
      amount: 10000,
    },
    {
      name: "Dinner at TGIF x6",
      amount: 350
    }
  ];
    lastFridayNight(transactions)