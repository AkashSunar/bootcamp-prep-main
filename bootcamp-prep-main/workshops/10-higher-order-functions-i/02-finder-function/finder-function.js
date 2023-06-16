function finderFunction(array,myFunc){
    for(let i=0;i<array.length;i++){
        if (myFunc(array[i])){
            return i;
        } 
     }
    return -1
    }
