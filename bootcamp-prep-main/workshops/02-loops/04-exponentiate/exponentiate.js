// YOUR CODE BELOW
 function exponentiate(base,power){
     let newBase=1;
    if(power!=0){
        for(i=1;i<=power;i++)
        newBase=newBase*base
        return newBase;
    }
    return 1;
}
console.log(exponentiate(3,0));
