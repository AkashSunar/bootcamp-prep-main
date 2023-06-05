// YOUR CODE BELOW
function taxCalculator(price,state)
{
    if(state==="NY"){
        let totalPrice=price+((4/100)*price)
        return totalPrice;
    }
    else if(state==="NJ"){
        totalPrice=price+((6.625/100)*price)
        return totalPrice;
    }
}
console.log(taxCalculator(100,"NY"))
console.log( taxCalculator(100,"NJ"))
