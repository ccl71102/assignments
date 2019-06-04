
//practice

if(5 > 3) {
    console.log("5 is greater than 3.");
}

var cat = "cat";

if(cat.length === 3) {
    console.log(cat.length + " is the length.");
}

if("cat" === "dog")
{
    console.log("They're the same.");
} else {
    console.log("They're not the same.");
}

//bronze

var person = {
    name: "Bobby",
    age: 12
};

if(person.age > 17)
{
    console.log(person.name + " is allowed to go to the movie.");
} else {
    console.log("Dang it, " + person.name + ", you're not allowed.");
}

if(person.name[0] === "B")
{
    console.log("Your name starts with a B, come on in.");
} else {
    console.log("Beat it.");
}

if(person.name[0] === "B" && person.age > 17)
{
    console.log("Your name starts with a B and you're " + person.age + " years old, come on in.");
} else {
    console.log("Beat it, " + person.name+" you're " + person.age + ".");
}

//silver

if(1 === "1") {
    console.log("strict");
} else if(1 == "1") {
    console.log("abstract");
} else {
    console.log("They're not equal at all.");
}

if(1 <= 2 && 2 === 4){
    console.log("yes");
} else {
    console.log("no");
}

//gold

if(typeof "dog" === "string") {
    console.log("Dog is a string.");
} else {
    console.log("Dog is not a string.");
}

if(typeof true === "boolean") {
    console.log("true is a boolean.");
} else {
    console.log("true is not a boolean.");
}

var someVariable;

if(typeof someVariable === "undefined") {
    console.log("Variable is undefined.");
} else {
    console.log("Variable is defined.");
}

if("S" > 12) { //non empty strings evaluate to NaN (not a number) when using > or <
    console.log("True.");
} else {
    console.log("False.");
}

var number = 42;

number%2 === 0 ? console.log(number + " is even.") : console.log(number + " is odd.");