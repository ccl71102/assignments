

function collectAnimals(...animals) {  
    return [...animals];
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 

function combineFruit(fruit, sweets, vegetables){
    return { fruit : [...fruit],
            sweets : [...sweets],
            vegetables : [...vegetables]
    };
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]));

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};

const {location, duration} = vacation;

function parseSentence(){
    return `We're going to have a good time in ${location} for ${duration}`;
}

function returnFirst(items){
    const [first] = items; /*change this line to be es6*/
    return first;
}

console.log(returnFirst([4,2,1,0]));

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav, fourthFav, fifthFav] = arr;
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

console.log(returnFavorites(favoriteActivities));

///////////

function combineAnimals(arr1, arr2, arr3) {  
    return [...arr1, ...arr2, ...arr3];
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

function product(...input) {  
    const numbers = [...input];
  
    return numbers.reduce((acc, number) => {
      return acc * number;
    }, 1)
  }

  console.log(product(1,2,3));


  function unshift(array, ...inputs) {  
    return [...inputs, ...array];
  }

  console.log(unshift([1,2,3], 4, 5, 6));


  

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const [firstName, lastName] = name;
        return {
            firstName: firstName,
            lastName: lastName
        }
})}