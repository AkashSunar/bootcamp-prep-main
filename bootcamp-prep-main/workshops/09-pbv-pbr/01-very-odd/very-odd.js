// YOUR CODE BELOW
function veryOdd(allTheNums){
    let oddNums=[]
    for(let i=0;i<allTheNums.length;i++){
     if(allTheNums[i]%2!==0){
        oddNums.push(allTheNums[i])
    }
}
return oddNums;
}
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);
console.log('oddNums:', oddNums);
console.log('allTheNums:', allTheNums);