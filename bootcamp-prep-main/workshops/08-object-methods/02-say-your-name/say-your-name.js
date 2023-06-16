// YOUR CODE BELOW
 let me2={name:"Prabesh",
    getGreeting:function(you){
        return `Hi ${you.name}, my name is ${this.name}.`

    }
 }
 let you={
    name:"Hemlal"
 }
 
 console.log(me2.name); 
 console.log(you.name); 
console.log( me2.getGreeting(you));