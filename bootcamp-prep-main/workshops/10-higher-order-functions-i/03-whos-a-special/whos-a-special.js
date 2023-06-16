// YOUR CODE BELOW

function whosASpecial(array){
    let final="";
    let whoIsSpecial=[]
    array.forEach(function(x){
        let name=x.name;
        let species=x.species;
        let special= name+" the "+species+" is very special!" 
         whoIsSpecial.push(special)
         final=whoIsSpecial.join(" ")
      
    })
    console.log(final)
    
    return final;
}

let specialPets = [{
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
];
whosASpecial(specialPets);