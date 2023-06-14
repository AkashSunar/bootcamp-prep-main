let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
function leetTranslator(str){


let finalString=""
str=str.toLowerCase()
for(let i=0;i<str.length;i++){
    let x=letters.indexOf(str[i])
    //console.log(x);
    let y=leetChars[x]
    finalString=finalString+y
}
console.log(finalString)
return finalString;

    // leetArray=[]
   
    // let newString=string.split('')
    // console.log(string)
    // console.log(newString)
    // for(let i=0;i<newString.length;i++){
    //     newString[i]=leetChars[letters.indexOf(newString[i])]
    //     leetArray.push(newString[i])
    // }
    // console.log(leetArray)
    // console.log(leetArray.toString())
    // finalString=leetArray.join()
    // console.log(leetArray)
    // console.log(finalString)
    // console.log(letters.indexOf("d"))

}
 console.log(typeof leetTranslator("Fullstack"))