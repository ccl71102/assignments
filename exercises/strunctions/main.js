
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

//getCharCodes();

function getCharCodes(){
    for(var i = 0; i < 150; i++) {
        console.log(i + " " + String.fromCharCode(i))
    }
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

console.log(userToUpperCase(str));
console.log(userToLowerCase(str));

/*
65 A
66 B
67 C
68 D
69 E
70 F
71 G
72 H
73 I
74 J
75 K
76 L
77 M
78 N
79 O
80 P
81 Q
82 R
83 S
84 T
85 U
86 V
87 W
88 X
89 Y
90 Z

97 a
98 b
99 c
100 d
101 e
102 f
103 g
104 h
105 i
106 j
107 k
108 l
109 m
110 n
111 o
112 p
113 q
114 r
115 s
116 t
117 u
118 v
119 w
120 x
121 y
122 z
*/