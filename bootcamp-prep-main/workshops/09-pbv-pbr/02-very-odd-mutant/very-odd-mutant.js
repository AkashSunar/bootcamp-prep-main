// YOUR CODE BELOW
function veryOddMutant(allTheNums){
    let count=0

    for(let i=0;i<allTheNums.length;i++){
        if(allTheNums[i]%2===0){
            allTheNums[i]="normie"
            count++
        }
    }
    return count;
}
let allTheNum = [1, 2, 3, 4, 5, 6, 7, 8]
let countRemoved = veryOddMutant(allTheNum);
console.log('allTheNums:', allTheNum);
console.log('countRemoved:', countRemoved);
// console.log(veryOddMutant([1, 2, 3, 4, 5, 6, 7, 8]))