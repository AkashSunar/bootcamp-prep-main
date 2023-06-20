// YOUR CODE BELOW
// function dogBreeder(name = 'Steve', age = 0) {
//     if (typeof arguments[0] === 'number') {
//         age = arguments[0]
//         name = 'Steve'
//     }
//     return { name: name, age: age }
// }
function getDogBreeder(name,age){
     return function dogBreeder(x, y) {
        if(x===undefined){
            console.log('pop')
            x=name;
        }
        if(y===undefined){
            y=age;
        }
    if (typeof arguments[0] === 'number') {
        y= arguments[0]
        x= name
    }
    return { name: x, age: y }
}

}
let puppyFarm = getDogBreeder('Snoopy', 0);
let rescueShelter = getDogBreeder('Odie', 3);
console.log(puppyFarm('Olaf', 3))     
console.log( puppyFarm(2));
console.log(rescueShelter())

