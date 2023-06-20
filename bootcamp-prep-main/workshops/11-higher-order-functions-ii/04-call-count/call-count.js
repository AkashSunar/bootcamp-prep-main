// YOUR CODE BELO
function callCount(){
    count=0;
    let newFunction=function(){
        count++;
        console.log(count);
        return count;
    }
    return newFunction;
}
let newFunction=callCount();
newFunction();
newFunction()