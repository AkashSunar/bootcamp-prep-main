// YOUR CODE BELOW
function squareNum(num){
    return num*num;
}
function functionLogger(squareNum,num){
    return  squareNum(num);
}
let squareOfFour=functionLogger(squareNum,4);
console.log(squareOfFour)