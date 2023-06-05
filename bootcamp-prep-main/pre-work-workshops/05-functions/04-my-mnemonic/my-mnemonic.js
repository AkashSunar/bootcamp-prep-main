// YOUR CODE BELOW


function myMnemonic(word1,word2,word3,word4){
    let merge="";
    if(word1!==undefined){
        merge=merge+word1[0]
    }
    if(word2!==undefined){
        merge=merge+word2[0]
    }
    if(word3!==undefined){
        merge=merge+word3[0]
    }
    if(word4!==undefined){
        merge=merge+word4[0]
    }

    return merge.toUpperCase();
}
console.log(myMnemonic("akash","ram","shyam","hari"))
// console.log(myMnemonic("ram","shyam","hari"));