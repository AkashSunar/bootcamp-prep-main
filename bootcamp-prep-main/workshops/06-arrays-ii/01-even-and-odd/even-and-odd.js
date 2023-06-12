// YOUR CODE BELOW
function evenAndOdd(array){
    // let odd;
    let evenArray=[]
    let oddArray=[]
    let result;
    for(let i=0;i<array.length;i++){
      if(array[i]%2==0){
            evenArray.push(array[i])
           
            // return evenArray;
        }
        else{
            oddArray.push(array[i])
         

        }
     

    }
//     console.log(evenArray)
// console.log(oddArray)
result=[evenArray,oddArray]
return result;
// console.log(result)
}
console.log(evenAndOdd([1,2,3,4,5,6,7]))
