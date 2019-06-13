
let name = "John"
let age = 101
const pets = ["cat", "dog"]
const petObjects = []

function runForLoop() {
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
    }
    return name
}

console.log(runForLoop())

/////////////////

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}

////////////////

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly)
}

//////////////////

const doMathSum = (a, b) => a + b;

const produceProduct = (a, b) => a * b;

////////////////

function printString(firstName = "Jane", lastName = "Doe", age = 100) {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
}

console.log(printString());


////////////////

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => animal.type === "dog")
 }

 console.log(filterForDogs(animals));


 ////////////////////////////

function post(location = "Hawaii", name = "Janice") {
    return `Hi ${name}!
            
Welcome to ${location}.
            
I hope you enjoy your stay. Please ask the president of ${location} if you
need anything.`
}

console.log(post());