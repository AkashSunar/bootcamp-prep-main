// YOUR CODE BELOW
 function zeroDarkThirty(number){
    let word;
    let newNum="";
    if(number===0){
        return NaN;
    }
    word=String(number)

    for(i=0;i<word.length;i++){
        if(word[i]!=="0"){
            newNum+=word[i]
        }
        continue
        }
        number=Number(newNum)
        return number;
}
console.log(zeroDarkThirty(102302))