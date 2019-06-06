
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function loopception(arr1, str1){
    //split alphabet and capitalize it
    var arrphabet = [];
    
    for(var i = 0; i < alphabet.length; i++) {
        arrphabet[i] = alphabet[i].toUpperCase();
    }

    var peoplebet = [];
    //for each instance of people, add whole alphabet after each name it

    for(var i = 0; i < arr1.length; i++) {
        peoplebet.push(arr1[i]+":");
        for(var j = 0; j < arrphabet.length; j++) {
            peoplebet.push(arrphabet[j]);
        }
    }

    return peoplebet;
}

console.log(loopception(people,alphabet));
