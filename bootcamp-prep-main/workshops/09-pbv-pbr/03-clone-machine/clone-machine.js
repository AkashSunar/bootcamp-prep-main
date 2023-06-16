// YOUR CODE BELOW
function cloneMachine(anObject){
    let newCloneObject={
        name:anObject["name"]+"Clone",
        species:anObject["species"],
        offspring:[]
    }
    anObject["offspring"].push(newCloneObject["name"])
    return newCloneObject;
}
let dolly = {
    name: 'Dolly',
    species: 'sheep',
    offspring: []
  }
  let dollyClone = cloneMachine(dolly);
  console.log(dollyClone)
  console.log(dolly)