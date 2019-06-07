
function stringToArr(str1){
    var arr = [];
    for(var i = 0; i < str1.length; i++) {
        arr[i] = str1[i];
    }

    return arr;
}

console.log(stringToArr("hello"));

function characterAt(str1, char1) {
    var found = false;
    for(var i = 0; i < str1.length; i++) {
        if(str1[i] === char1){
            found = true;
            return "Character "+char1+" found at index "+i;

        }
    }

    if(!found)
        return "Character not found!";
}

console.log(characterAt("hello world", "w"));
console.log(characterAt("hello world", "m"));

function search42(arr1){
    found = false;
    for(var i = 0; i < arr1.length; i++) {
        if(arr1[i] === 42) {
            found = true;
            return "Found 42!";
        }
    }

    if(!found)
        return "42 not found!";
}

console.log(search42([2,50,39,12,14,42,30,29,18]));
console.log(search42([2,50,39,12]));

function smallestNumber(arr1){
    var smallest= arr1[0];
    for(var i = 1; i < arr1.length; i++){
        if(arr1[i] < smallest)
            smallest = arr1[i];
    }
    return smallest;
}

console.log(smallestNumber([76, 138, 29, 4508, 41, 5, 99, 80085, 32, 10]));