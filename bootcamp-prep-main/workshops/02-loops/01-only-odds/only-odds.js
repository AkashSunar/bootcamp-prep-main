// YOUR CODE BELOW

function onlyOdds(num){
    let j=0;
    if(num>0){
        for(i=1;i<=num;i++){
            if(i%2!=0){
                j=j+i;
            }
        }
        console.log(j);
        return j;

    }
    else{
    
        return 0;
    }
}
onlyOdds(10);
