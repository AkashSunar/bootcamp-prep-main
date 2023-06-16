// YOUR CODE BELOW
 function deeperCopy(array){
    for (let i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            array[i].push(4)
        }
    }
    console.log(array)
    return array;


 }
//  let myArray = [1, [2, 3]];
//  let copy = deeperCopy(myArray);