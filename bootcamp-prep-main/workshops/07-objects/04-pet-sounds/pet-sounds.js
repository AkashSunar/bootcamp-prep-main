let animalNoises = [
  { 'dog': {
    'America' : 'Woof! Woof!',
    'Germany' : 'Wau Wau!',
    'England' : 'Bow wow!',
    'Uruguay' : 'Jua jua!',
    'Afrikaans' : 'Blaf!',
    'Korea' : 'Mong mong!',
    'Iceland' : 'Voff voff!',
    'Albania' : 'Ham!',
    'Algeria' : 'Ouaf ouaf!'
    }
  },
  { 'cat': {
    'America' : 'Meow',
    'Germany' : 'Miauw!',
    'England' : 'mew mew',
    'Uruguay' : 'Miau Miau!',
    'Afrikaans' : 'Purr',
    'Korea' : 'Nyaong!',
    'Iceland' : 'Kurnau!',
    'Albania' : 'Miau',
    'Algeria' : 'Miaou!'
    }
  },
  { 'chicken': {
    'America' : 'Cluck cluck',
    'Germany' : 'tock tock tock',
    'England' : 'Cluck Cluck',
    'Uruguay' : 'gut gut gdak',
    'Afrikaans' : 'kukeleku',
    'Korea' : 'ko-ko-ko',
    'Iceland' : 'Chuck-chuck!',
    'Albania' : 'Kotkot',
    'Algeria' : 'Cotcotcodet'
    }
  }
];

//YOUR CODE BELOW
function petSounds(arg1,arg2){
let str=""
str=arg1.charAt(0).toUpperCase()+arg1.slice(1)+"s"+' in '+arg2+" say ";;
for(let i=0;i<animalNoises.length;i++){
  let animalObj=animalNoises[i];
  for(let key in animalObj){
    if(arg1===key){
      str1=animalObj[arg1][arg2]
    }
  }
}
str+=str1

//console.log(animalNoises[0]);
return str;

}
 console.log(petSounds('dog', 'Iceland'));
//console.log(animalNoises[0].dog.America);
