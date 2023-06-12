// YOUR CODE BELOW
function removeColumns(array,numColumn){
    let finalArray=[]
    for( let i=0;i<array.length;i++){
        let tempArray=[]
        for(let j=0;j<array[i].length-numColumn;j++){
            tempArray.push(array[i][j]);
        }
        finalArray.push(tempArray)
    }
    console.log(finalArray)
    return finalArray;


}
removeColumns([[1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]], 2);


// console.log("apple and oranges")