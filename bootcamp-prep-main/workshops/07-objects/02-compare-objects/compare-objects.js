// YOUR CODE BELOW
function compareObjects(object1,object2){
    // console.log(Object.keys(object1))
    let arrayObject1=Object.keys(object1)
    let arrayObject2=Object.keys(object2)

    if(arrayObject1.length!==arrayObject2.length)
    {
        return false
    }
    
        for(let i=0;i<arrayObject1.length;i++){
            if(arrayObject1[i]!==arrayObject2[i]){
             return false
            }
             if(object1[arrayObject1[i]]!==object2[arrayObject2[i]]){
                return false;
             }
        }
        return true;
}
console.log(compareObjects({ name: 'nick' }, { name: 'nick' })) 
console.log(compareObjects({ name: 'nick' }, { name: 'zeke', age: 12 })) 
