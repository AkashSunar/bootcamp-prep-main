// YOUR CODE BELOW
function myIncludes(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (num !== array[i]) {
      continue;
    }
    else{
       return true;
    }
   }
   return false;
}
// console.log(myIncludes([1,2,3],3))
console.log( myIncludes(["jaggu","makunde","gotiya"],"chana"))