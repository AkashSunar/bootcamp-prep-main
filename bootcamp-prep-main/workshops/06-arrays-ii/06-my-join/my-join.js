// YOUR CODE BELOW
function myJoin(array,separator=","){

    let newString="";
    for(i=0;i<array.length;i++){
        if(array[i]===undefined || array[i]===null){
            array[i]=""
        }

        newString=newString+array[i]
        if(array.length-1!==i){
            newString=newString+ separator 
        }
    }
console.log(newString)
return newString;
}
myJoin(['a', null, 'c'],"-"); 



// let names=["akash","prabesh","hemu","sunil"]
//  let newName=(names[0]+" is")
//  console.log(newName)