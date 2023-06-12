// YOUR CODE BELOW
function zooInventory(array){
    let tempString=""
    let finalArray=[]
    for(let i=0;i<array.length;i++){
        // console.log(array[i][0])
        // console.log(array[i][1][0])
        // console.log(array[i][1][1])
        tempString=array[i][0]+" the "+array[i][1][0]+" is "+array[i][1][1]+"."
        console.log(tempString)
        finalArray.push(tempString)
        // console.log(finalArray)
    }
return finalArray;

}
let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
  ];
zooInventory(myZoo)
