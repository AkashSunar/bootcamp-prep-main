// YOUR CODE BELOW
function onlyOne(word1,word2,word3){
    if((!word1&&!word2&&word3)||(!word1&&word2&&!word3)||(word1&&!word2&&!word3)){
        return true
    }

        return false
    
 

}
console.log(onlyOne(1,6,3))