// YOUR CODE BELOW
function bacteriaTime(currentNum,targetNum){
    let totalTime=0;
    if(currentNum<targetNum){
        for(currentNum;currentNum<targetNum;currentNum=2*currentNum){
        
            totalTime+=20
        }
        return totalTime;
    }
    else{
        return "targetNum must be larger than currentNum";
    }
   
    
}
console.log(bacteriaTime(8,1))