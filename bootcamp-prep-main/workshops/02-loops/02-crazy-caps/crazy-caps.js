// YOUR CODE BELOW
function crazyCaps(word){
    let newword="";
    for(i=0;i<word.length;i++)
    {
        if(i%2!=0){
             newword+=word[i].toUpperCase()
        }
        else {
            newword+=word[i].toLowerCase();
        }
    }
    return newword;
}
console.log(crazyCaps('FULLSTACK is amazing'))
