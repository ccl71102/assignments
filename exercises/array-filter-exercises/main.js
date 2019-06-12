
const arr1 = [3, 6, 8, 2];
const arr2 = ["dog","wolf","by","family","eaten","camping"];
const arr3 = [
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
];
const arr4 = [
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

function fiveAndGreaterOnly(arr) {
    return arr.filter(item => item > 4);
}

console.log(fiveAndGreaterOnly(arr1));

function evensOnly(arr) {
    return arr.filter(item => !(item % 2));
}

console.log(evensOnly(arr1));

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(item => item.length < 6);
}

console.log(fiveCharactersOrFewerOnly(arr2));

function peopleWhoBelongToTheIlluminati(arr) {
    return arr.filter(item => item.member === true);
}

console.log(peopleWhoBelongToTheIlluminati(arr3));

function ofAge(arr) {
    return arr.filter(item => item.age < 19);
}

console.log(ofAge(arr4));