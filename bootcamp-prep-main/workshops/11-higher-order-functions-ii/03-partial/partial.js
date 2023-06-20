// YOUR CODE BELOW
function partial(func,arg1){
    let myFunc=func(arg1,arg1)
    let newFunc=function(myFunc){
        return  arg1+myFunc;
    }
    return newFunc;
}
function summer (a, b) {
    return a + b
  };
  
  let sumFive = partial(summer, 5);
 console.log(sumFive(10))    
