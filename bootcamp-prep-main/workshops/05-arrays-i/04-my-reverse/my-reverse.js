// YOUR CODE BELOW
function myReverse(array){
  let newArray=[];
  for(let i=array.length-1;i>=0;i--){
    newArray.push(array[i])
    }
    return newArray;
  }
console.log(myReverse([1,2,4,5,6,7,8]))