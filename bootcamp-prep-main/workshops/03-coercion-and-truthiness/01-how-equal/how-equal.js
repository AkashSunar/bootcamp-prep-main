// YOUR CODE BELOW
function howEqual(word1,word2){
    if (word1===word2){
        return "strictly";
    }
    else if(word1==word2){
        return "loosely";
    }
    else{
        return "not equal"
    }
    
}
console.log(howEqual(10,5+5))