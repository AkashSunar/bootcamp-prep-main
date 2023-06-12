// YOUR CODE BELOW
function arrayFlattener(array){
    let flatArray=[]
    for(let i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            for(let j=0;j<array[i].length;j++){
                flatArray.push(array[i][j])
             
                
            }
        }
        else{
            flatArray.push(array[i])
            
        }
       
    }
     return flatArray;
}
console.log(arrayFlattener([1,[2,3],4]))