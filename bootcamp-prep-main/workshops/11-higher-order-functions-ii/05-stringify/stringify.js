// YOUR CODE BELOW
function stringify(func){
    let stringed=function (){
        let b=func();
        let c=String(b);
        return c;
    }
    return stringed;
}
function returnsANumber() {
    return 100;
  }
  
// let newFunction = stringify(returnsANumber);
// newFunction();

     