// YOUR CODE BELOW
  function oddCouple(array) {
    let newArray=[]
    for (let i = 0; i <array.length; i++) {
        if(array[i]%2!=0){
          newArray.push(array[i]) 
          }
     }
    if(newArray.length <2){
        if(newArray.length===1){
            return newArray;
        }
      newArray=[]
      return newArray;
    }
    else 
    {
      return newArray.slice(0,2);
    }
} 
console.log(oddCouple([2,4,6,8]))
    
    


 
    


