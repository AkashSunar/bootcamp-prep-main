// YOUR CODE BELOW
function myIndexOf(source,searchValue,startIdx){
    if(startIdx===undefined){
        startIdx=0;
    }
    for(i=startIdx;i<source.length;i++){
        if(searchValue[0] ===source[i]){
           if(source.slice(i,searchValue.length+i)===searchValue){
            return i;

           }
        }

    }
    return -1;

}
console.log(myIndexOf('twice twice', 'ice'))