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