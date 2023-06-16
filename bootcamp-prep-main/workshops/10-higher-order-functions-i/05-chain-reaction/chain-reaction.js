// YOUR CODE BELOW
function chainReaction(startVal,arrayFunc){
    let  num=startVal;
    for(let i=0;i<arrayFunc.length;i++){  
       num=arrayFunc[i](num);
    }
    return num;
}