// YOUR CODE BELOW
function timesTable(num1){
    let multFunc=function(num2){
        return num1*num2
    }
    return multFunc
}
let ninesTable = timesTable(9);
console.log( ninesTable(8));
