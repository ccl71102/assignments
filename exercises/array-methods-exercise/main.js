var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//1

vegetables.pop();
console.log(vegetables);

//2

fruit.shift();
console.log(fruit);

//3

console.log(fruit.indexOf("orange"));

//4

fruit.push(fruit.indexOf("orange"));
console.log(fruit);

//5

console.log(vegetables.length);

//6

vegetables.push(vegetables.length);
console.log(vegetables);

//7

var food = fruit.concat(vegetables);
console.log(food);

//8

food.splice(4,2);
console.log(food);

//9

console.log(food.reverse());

//10

console.log(food.join());