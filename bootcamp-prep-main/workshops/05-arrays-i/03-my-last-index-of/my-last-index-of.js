// YOUR CODE BELOW
function myLastIndexOf(array, searchedValue,startIdx) {
    let x;
    let newArray;
    if(startIdx!==undefined){
        newArray=array.slice(startIdx)
        for(let i=0;i<newArray.length;i++){
            if(searchedValue===newArray[i]){
                 x=i
                 continue;
            }
          
        }
        if(x===undefined){
            return -1;
        }
        else{
            return x;
        }


    }
else{
    for(let i=0;i<array.length;i++){
        if(searchedValue===array[i]){
             x=i
        }
      
    }
    if(x===undefined){
        return -1;
    }
    else{
        return x;
    }
  
}
  

}

// console.log(myLastIndexOf(['gee', 'gee',"gee","gee",'baby', 'baby'], 'gee'))
console.log(myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'out', 2))