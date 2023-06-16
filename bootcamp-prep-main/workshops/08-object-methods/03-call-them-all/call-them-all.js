// // YOUR CODE BELOW

// let finalArray=[]
// let addNums;
// function callThemAll(addNums,num){
//     let addsNums = {
//         addTen: function(num) {
//           return num + 10;
//         },
      
//         addTwenty: function(num) {
//           return num + 20;
//         },
      
//         someProperty: 'value'
//       }
//       let x=addsNums.addTen(num)
//       let y=addsNums.addTwenty(num)
//       finalArray.push(x)
//       finalArray.push(y)

//     return finalArray;
// }
//  console.log( callThemAll(addNums, 90))  

let numFun = {
    addTwenty: function(num) {
      return num + 20;
    },

    subtractTen: function(num) {
      return num - 10;
    },

    stringify: function(num) {
      return String(num);
    }
  };

function callThemAll(object,value){
    let finalArray =[];
    for(let key in object){
     if(typeof object[key] ==="function"){
            let val;
            val=object[key](value)
            finalArray.push(val)
        }
    }
    return finalArray;
}
 console.log( callThemAll(numFun, 100))  