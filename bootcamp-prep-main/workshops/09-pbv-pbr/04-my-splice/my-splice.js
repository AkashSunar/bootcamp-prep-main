// YOUR CODE BELOW
 function mySplice(myArray,num1,num2,word){
    let newArray=[]
    let deleteArray=[]
    for(let i=0;i<num1;i++){
        newArray.push(myArray[i])
    }
  
    if(word!==undefined){
        newArray.push(word)
    }
   
    for(let j=num1;j<num1+num2;j++){
        deleteArray.push(myArray[j])
    }

    for(let k=num1+num2;k<myArray.length;k++){
        newArray.push(myArray[k])
    }
    while(myArray.length){
        myArray.pop()
    }
    // for(let i=0;i<myArray.length;i++){
    //     myArray.pop()
    // }
    for(let i=0;i<newArray.length;i++){
        myArray.push(newArray[i])
    }
    return deleteArray;
}
 let myArray=[1,2,3,4,5]
 mySplice(myArray,2,1,"apples")
 console.log(myArray)