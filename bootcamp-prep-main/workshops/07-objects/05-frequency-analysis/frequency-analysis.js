// YOUR CODE BELOW
function frequencyAnalysis(string){
    let obj={}
    string=string.toLowerCase()
    for(let j=0;j<string.length;j++){
        let counter=1;
        for(let i=1;i<string.length;i++){
            if(string[0]===string[i]){
                counter+=1;
            }
        }
        console.log(string[0])
        obj[string[0]]=counter;
        string=string.replaceAll(string[0],"")

    }
    return obj;
}

console.log(frequencyAnalysis("abca"))