function capitalizeAndLowercase(input){
    return input.toUpperCase() + input.toLowerCase();
}

console.log(capitalizeAndLowercase("Displacement"));

function halfAndRounded(input){
    return Math.floor(input.length/2);
}

console.log(halfAndRounded("Salt Lake City Utah"));

function firstHalf(input) {
    return input.slice(0, halfAndRounded(input));
}

console.log(firstHalf("Iron helps us play!"));

function halfCaps(input){
    return (input.slice(0,halfAndRounded(input))).toUpperCase() +
    (input.slice(halfAndRounded(input))).toLowerCase();
}

console.log(halfCaps("Salt Lake City"));

function bonus(input) {
    var newString = "";
    for(var i = 0; i < input.length; i++) {
        if(i === 0) {
             newString += input.substring(0, 1).toUpperCase();
        }
        if(input[i] === " ") {
            newString += (input.substring(i + 1,i + 2)).toUpperCase();
        } else {
            newString += input.substring(i + 1,i + 2);
        }
    }
    return newString;
}

console.log(bonus("hey friends! practice practice practice!"));