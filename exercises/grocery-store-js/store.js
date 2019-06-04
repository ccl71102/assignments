
var shopper = {
    firstName: "John",
    lastName: "Johnson",
    age: 30,
    isAFelon: false,
    fullName: function() {
        return this.firstName + this.lastName;
    },
    groceryCart: ["milk","eggs","bread"]
};

function getName(){
    return shopper.fullName();
}

function getAge(){
    return shopper.age;
}

console.log(getName());
console.log(getAge());