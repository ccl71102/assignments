

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
             ["carrot"]))

