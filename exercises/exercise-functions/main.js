
function sum(operand1, operand2) {
    return operand1 + operand2;
}

console.log(sum(2,8));

function greatest(operand1, operand2, operand3) {
    if(operand1 > operand2) {
        if(operand1 > operand3) {
            return operand1;
        } else{
            return operand3;
        }
    } else if(operand2 > operand3) {
        return operand2;
    } else {
        return operand3;
    }
}

console.log(greatest(44,29,100));

function oddEven(number){
    if (number%2 === 0){
        return "even";
    } else {
        return "odd";
    }
}

console.log(oddEven(11));
console.log(oddEven(20));

function stringModifier(input){
    if(input.length < 21) {
        return input + input;
    } else {
        return input.substring(0,(input.length/2));
    }
}

console.log(stringModifier("Salt Lake City, Utah"));
console.log(stringModifier("Great Salt Lake, Utah, United States of America"));

function fibonacciSum(number){
    var totalSum = 0;
    var fibonacciNumbers = [];

    function fibonacci(number){ //recursive function
        if(number < 2){
            return 1;
        }
        return fibonacci(number - 1) + fibonacci(number - 2);
    }

    for(var i = 0; i < number; i++){
        totalSum += fibonacci(i);
        fibonacciNumbers[i] = fibonacci(i);
    }

    return fibonacciNumbers + "\nTotal Sum: " + totalSum;
}

function quadratic(a,b,c){
    if(a !== 0 && Math.sqrt(Math.pow(b,2) - (4 * a * c)) >= 0){
        var result = [];
        result[0] = (-b + Math.sqrt(Math.pow(b,2) - (4 * a * c)))/(2 * a);
        result[1] = (-b - Math.sqrt(Math.pow(b,2) - (4 * a * c)))/(2 * a);
        return result;
    } else if(a === 0) {
        return "Error: 'a' cannot be zero.";
    } else {
        return "Error: cannot work with imaginary numbers.";
    }
}

console.log(quadratic(0,34,13));

console.log(fibonacciSum(12));

function mostCommonCharacter(input) {
    //to do
}