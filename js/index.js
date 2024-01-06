// global variables for performing calculations
let firstNumber;
let secondNumber;
let operator; // * +  - /

// operate function
function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
        default:
            return undefined;
    };
}

// add function
function add(a, b) {
    return Number(a) + Number(b);
}

// subtract function
function subtract(a, b) {
    return a - b;
}

// multiply function
function multiply(a, b) {
    return a * b;
}

// divide function
function divide(a, b) {
    // check that a and b are not 'NaN' and b is not 0
    while (a !== a) {
        a = Number(prompt("Enter first value: "));
    }
    while (b === 0 || b !== b) {
        b = Number(prompt("Division by zero not allowed! Enter valid value for denominator: "));
    }
    return a / b;
}