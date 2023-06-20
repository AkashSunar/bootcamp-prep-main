// YOUR CODE BELOW
function billerBuilder(state){
    let biller=function(price){
        if(state==="NY"){
            return price*1.03*1.04
        }
        else if(state="NJ"){
            return price*1.05*1.06625 
        }
    }
    return biller;
}
 let biller=billerBuilder("NY")
 let totalPrice=biller(250);
 console.log(totalPrice)


