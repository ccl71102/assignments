
const arr1 = [1,1,2,3,5,8,13];
const arr2 = ["steve","sarah","susan","samuel","samantha"]
const arr3 = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

function doubleNumbers(arr) {
    return arr.map( item => item * 2);
}

console.log(doubleNumbers(arr1));

function stringItUp(arr) {
    return arr.map( item => item.toString());
}

console.log(stringItUp(arr1));

function capitalizeNames(arr) {
    return arr.map(item => item.charAt(0).toUpperCase() + item.slice(1));
}

console.log(capitalizeNames(arr2));

function namesOnly(arr) {
    return arr.map(item => item.name);
}

console.log(namesOnly(arr3));

function makeStrings(arr) {
    return arr.map(item => {
        if(item.age > 17)
            return item.name + " can go to The Matrix";
        else    
            return item.name + " is under age!!"
    });
}

console.log(makeStrings(arr3));

function readyToPutInTheDOM(arr) {
    return arr.map(item => "<h1>" + item.name + "</h1>" + "<h2>" + item.age + "</h2>");
}

console.log(readyToPutInTheDOM(arr3));