// YOUR CODE BELOW
function mySlice(array,startIdx=0,endIdx=array.length){
    let finalArray=[]
    if(startIdx<0){
        startIdx=array.length+startIdx;
    }
    if(endIdx<0){
        endIdx=array.length+endIdx
    }
    for(let i=0;i<array.length;i++){
        if(i===startIdx){
            for(let j=startIdx;j<endIdx;j++){
                finalArray.push(array[j])
               
            }
           
        }

    }
    console.log(finalArray)
    return finalArray;
}

mySlice([1, 2, 3], 1)