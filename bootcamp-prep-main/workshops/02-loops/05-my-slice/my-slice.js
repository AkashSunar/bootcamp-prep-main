// YOUR CODE BELOW
function mySlice(originalString,startIdx,endIdx){
    let slice="";
if(startIdx===undefined &&endIdx===undefined){
        return originalString;
    }
else if (startIdx!=undefined&&endIdx===undefined)
{
        for(i=startIdx;i<originalString.length;i++){
            slice+=originalString[i]
        }
        return slice;
    }
    else{
        for(i=startIdx;i<endIdx;i++){
            slice+=originalString[i]
        }
        return slice;
    }

    }

console.log(mySlice("slice and dice",2,5));