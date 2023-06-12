// YOUR CODE BELOW
//   let newarray=[]
function rotateArray(array,rotateNum){
    let newarray=[]
    let val;
    if (rotateNum===0){
        return array;
    }
    if(rotateNum>0){
      
        val=array.length-rotateNum;
        // for(let i=val;i<array.length;i++){
        //    newarray.push(array[i])
        // }
        // for(let j=0;j<val;j++){
        //     newarray.push(array[j])
        // }
    }
    if(rotateNum<0){
         val=-rotateNum
        // for(let i=val;i<array.length;i++){
        //     newarray.push(array[i])
        // }
        // for(let i=0;i<val;i++){
        //     newarray.push(array[i])
        // }
    }
            for(let i=val;i<array.length;i++){
            newarray.push(array[i])
        }
        for(let i=0;i<val;i++){
            newarray.push(array[i])
        }
   
    console.log(newarray);
    return newarray;
    
}
rotateArray([1, 2, 3, 4, 5], 0)