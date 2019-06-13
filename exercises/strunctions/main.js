
var str = "Salt Lake City";

function userConcat(str1, str2) {
    return str1 + str2;
}

function userIndexOf(str1, char) {
    for(var i = 0; str1.length; i++) {
        if(str1[i] === char)
            return i;
    }

    return -1;
}

function userLastIndexOf(str1, char) {
    for(var i = str1.length - 1; i >= 0; i--){
        if(str1[i] === char)
            return i;
    }

    return -1;
}

function userSlice(str1, posStart, posEnd) {
    if(typeof posEnd === "undefined" || posEnd > str1.length);
        posEnd = str1.length;

    if(posEnd <= posStart)
        return "Error: end position cannot be less than starting position .";

    var strResult = "";
    for(var i = posStart; i < posEnd; i++) {
        strResult += str1[i];
    }
    return strResult;
}

function userSplit(str1, separator, limit){
    var newArray = [];
    if(separator === "") { 
        for(var i = 0; i < str1.length; i++) {
            newArray[i] = str1[i];
        }
        return newArray;
    }

    //TODO

}

//note: this won't work on non-ASCII characters, but it won't break

function userToUpperCase(str1) {
    var newString = "";
    for(var i = 0; i < str1.length; i++) {
        var charToCheck = str1[i].charCodeAt(0);
        if(charToCheck > 96 && charToCheck < 123){
            newString += String.fromCharCode(charToCheck - 32);
        } else {
            newString += str1[i];
        }
    }
    return newString;
}

//note: this won't work on non-ASCII characters, but it won't break

function userToLowerCase(str1) {
    var newString = "";
    for(var i = 0; i < str1.length; i++) {
        var charToCheck = str1[i].charCodeAt(0);
        if(charToCheck > 64 && charToCheck < 91){
            newString += String.fromCharCode(charToCheck + 32);
        } else {
            newString += str1[i];
        }
    }
    return newString;
}

function userSubstr(str1, sIndex, eIndex) {
    let newStr = "";
    for(let i = sIndex; i < eIndex; i++) {
        newStr += str1[i];
    }

    return newStr;
}

//TODO

//replace
//match