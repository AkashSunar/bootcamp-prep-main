// YOUR CODE BELOW
function makeGrid(num1,num2){
    let finalArray=[]
    for(let i=1;i<=num2;i++){
        let tempArray=[]
        for(let j=1;j<=num1;j++){
            tempArray.push(j)
        }
        finalArray.push(tempArray)
    }
    return finalArray;
}
 console.log(makeGrid(3,3))
