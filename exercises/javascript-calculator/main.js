
const readline = require("readline-sync");

const num1 = readline.question("Enter your first number:");
const num2 = readline.question("Enter your second number:");

const operations = ["Add (+)", "Substract (-)", "Multiply (*)", "Divide (/)"];
const index = readline.keyInSelect(operations, "Which operation do you want to perform?");


switch(Number(index)) {
    case 0: console.log("Sum (+) result: " + add(num1, num2));
            break;
    case 1: console.log("Substract (-) result: " + sub(num1, num2));
            break;
    case 2: console.log("Multiply (*) result: " + mul(num1, num2));
            break;
    case 3: console.log("Division (/) result: " + div(num1, num2));
            break;
    default: console.log("Bye!");
            break;
}

function add(num1, num2) {
    return (Number(num1) + Number(num2));
}

function sub(num1, num2) {
    return (Number(num1) - Number(num2));
}

function mul(num1, num2) {
    return (Number(num1) * Number(num2));
}

function div(num1, num2) {
    if(Number(num2) === 0)
        return "Division error: Cannot divide by zero.";
    return (Number(num1) / Number(num2));
}