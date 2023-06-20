// YOUR CODE BELOW
function cacheSavings(func) {
    let cacheValue=0;
    let cache;
    return function myFunc(num){
    if(num===cacheValue){
        // console.log("Apple and  orange")
        return  cache;
    }
    else{
        cacheValue=num;
        cache=func(num);
        // console.log("mango")
        return cache;
    }
}
}
  

function dum(num){
    return num+20
}
let cachedAdds10=cacheSavings(dum);
console.log(cachedAdds10(20)) 
// console.log(cachedAdds10(0)) 
console.log(cachedAdds10(20)) 