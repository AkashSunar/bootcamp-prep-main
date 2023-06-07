// YOUR CODE BELOW
function isTruthy(word){
     if(word===false){
        return "The boolean value false is falsey"
    }
    // if(word===true){
    //     return true;
    // }
     else if(word===null){
        return "The null value is falsey"
    }
     else if(word===undefined){
        return "undefined is falsey"
    }
     else if(word===0){
        return "The number 0 is falsey (the only falsey number)"
    }
     else if(word===""){
        return "The empty string is falsey (the only falsey string)"
    }
    else{
        return true;
    }
}
console.log(isTruthy(false))