let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },
  // cash: 0,
  
  currentInventory:function(){
    let sum=0;
    for(i in tacoCatInc){
      for(j in this[i] ){
        sum+=this[i][j].cost*this[i][j].quantity
      }
    }
    console.log(sum)
    return sum;
  },

  sale:function(orders){
    if(Object.keys(orders).length===0){
      return 0;
    }
    let totalSale=0;
    for(let keys in orders){
      let item=orders[keys];
      let costOfItem=this[keys][item].cost;
      this[keys][item].quantity-=1;
      totalSale +=costOfItem;
      // console.log(totalSale)
    }
    this.cash+=totalSale;
    // console.log(totalSale)
    return totalSale;
  },
  cash:0,
};
tacoCatInc.currentInventory();
let order= {
  gourmetShell: 'hard treat shell',
  gourmetFishFilling: 'salmon'
};
// console.log(tacoCatInc.sale(order));
// console.log(tacoCatInc.sale(order));

