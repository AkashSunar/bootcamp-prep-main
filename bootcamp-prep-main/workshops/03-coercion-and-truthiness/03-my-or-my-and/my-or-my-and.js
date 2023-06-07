// YOUR CODE BELOW
function myOr(word1,word2,word3){
    if(Boolean(word1)==true){
      return word1
    }
    else if(Boolean(word2)==true){
        return word2;
    }
    else if(Boolean(word3)==true){
        return word3;
    }
    else {
        return null;
    }
}
// function myAnd(word1,word2,word3){
//     if(Boolean(word1)==true&&Boolean(word2)==true&&Boolean(word3)==true){
//         return word3;
//     }
//     else if(Boolean(word1)==false&&Boolean(word2)==true&&Boolean(word3)==true){
//         return word1;
//     }
//     else if(Boolean(word1)==true&&Boolean(word2)==false&&Boolean(word3)==true){
//         return word2
//     }
//     else if(Boolean(word1)==true&&Boolean(word2)==true&&Boolean(word3)==false){
//         return word3
//     }
// }
function myAnd(word1,word2,word3){
    if(!word1){
        return word1
    }
    if(!word2){
        return word2;
    }
    if(!word3){
        return word3
    }
     return word3
    }

// console.log(myOr("apples",1,false))

// console.log(myAnd(1,0,"apples"))

let val=""&&"yu"&&"hj"
console.log(val)