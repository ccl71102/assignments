
//#1

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var counter = 0;

for(var i = 0; i < officeItems.length; i++) {
    if(officeItems[i] === "computer") {
        counter++;
    }
}

console.log("Final count: " + counter);

//#2

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
];

for(var j = 0; j < peopleWhoWantToSeeMadMaxFuryRoad.length; j++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[j].age > 17) {
        if(peopleWhoWantToSeeMadMaxFuryRoad[j].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + "? He is old enough.");
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + "? She is old enough.");
        }
    } else {
        if(peopleWhoWantToSeeMadMaxFuryRoad[j].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + "? He is not old enough.");
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + "? She is not old enough.");
        }
    }
  }
  
  
//#bonus

var isOn = false;
var count = 0;
var arr = [1,2,3,4];

//iterate through array

for(var k = 0; k < arr.length; k++) {

    /* for each number in the array, toggle switch and
    increment counter by using a for loop that iterates
    x number of times, where x is the number taken from
    the array */

    var m = 0;
    var iterations = parseInt(arr[k], 10);

    for(m = 0; m < iterations; m++) {
        if(isOn) {
            isOn = false;    
        } else {
            isOn = true;
        }
        count++;
    }
}

//Show results in console

console.log("You switched the light " + count + " times.");

if(isOn) {
    console.log("The switch is on.");
} else {
    console.log("The switch is off.");
}