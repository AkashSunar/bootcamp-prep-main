// YOUR CODE BELOW
function mostVowels(sentence){
    let maxCount=0;
    let maxWord=""
    let word=""
    let vCount=0;
    let vowel="aeiouAEIOU"
    for(i=0;i<sentence.length;i++){
        if(sentence[i]!==" "&& i !==sentence.length-1){
            word=word+sentence[i]
            if(isVowel(sentence[i])){
                vCount=vCount+1
            }
        }
        else{
            if(maxCount<vCount){
                maxCount=vCount
                maxWord=word
            }
            vCount=0
            word=""
        }
       }
       console.log(maxWord)
       return maxWord
       function isVowel(char){
       if(vowel.indexOf(char)>=0){
        return true
       }
        return false
       }
}
// mostVowels("my name is akash sunar")
mostVowels('why dry my sly lynx?')