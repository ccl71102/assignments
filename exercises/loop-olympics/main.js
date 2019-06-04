//bronze

for(var i = 0; i < 10; i++) {
    console.log(i);
}

console.log("\n");

for(var i = 9; i > -1; i--) {
    console.log(i);
}

console.log("\n");

var fruit = ["banana", "orange", "apple", "kiwi"];

for(var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

console.log("\n");

var arr = [];

for(var i = 0; i < 10; i++) {
    arr[i] = i;
}

console.log(arr);

console.log("\n");

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];

  var names = [];
  var occupations = [];

  for(var i = 0; i < peopleArray.length; i++) {
    names[i] = peopleArray[i].name;
    occupations[i] = peopleArray[i].occupation;
  }

  console.log(names);
  console.log(occupations);

  console.log("\n");


 var names = [];
 var occupations = [];

 for(var i = 0; i < peopleArray.length; i++) {
     names[i] = peopleArray[i].name;
     if(i === 0) {  
     } else {
        occupations[i-1] = peopleArray[i].occupation;
     }
 }

 console.log(names);
 console.log(occupations);

 console.log("\n");


//gold

//[a,b,c], 

var matrix = [];

for(var i = 0; i < 3; i++) {
  var arr = [];

  for(var j = 0; j < 3; j++) {
    arr[j] = 0;
  }
  matrix[i] = arr;
}

console.log(matrix);

console.log("\n");

var matrix = [];

for(var i = 0; i < 3; i++) {
  var arr = [];
  for(var j = 0; j < 3; j++) {
    arr[j] = i;
  }
  matrix[i] = arr;
}

console.log(matrix);

console.log("\n");

var matrix = [];

for(var i = 0; i < 3; i++) {
  var arr = [];
  for(var j = 0; j < 3; j++) {
    arr[j] = j;
  }
  matrix[i] = arr;
}

console.log(matrix);

console.log("\n");

var grid = [[1,2,3],[4,3,6,4,20],[34,25,12,23],[3,2,14],[0]];

console.log(grid);
console.log("\n");

for(var i = 0; i < grid.length; i++) {
    for(var j = 0; j < grid[i].length; j++) {
      grid[i][j] = "x";  
    }
}

console.log(grid);