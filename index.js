var number1 = 0;
var number2 = 0;
var operator = "";

function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, sign) {
    switch (sign) {
        case "+":
            add(x, y)
            break;
        case "-":
            substract(x, y)
            break;
        case "*":
            multiply(x, y)
            break;
        case "/":
            divide(x, y)
            break;
        default:
            return "Error";
    }
}


var digitButtons = document.querySelector(".digits");
for (let i = 0; i <= 9; i++) {
    var digit = document.createElement("button");
    digit.innerText = i;
    digitButtons.appendChild(digit);
}


const operators = ["+", "-", "*", "/", "="];
var operatorButtons = document.querySelector(".operators");
for (let i = 0; i < operators.length; i++) {
    var operator = document.createElement("button");
    operator.innerText = operators[i];
    operatorButtons.appendChild(operator);
}

var clearButton = document.querySelector(".clear");
var clear = document.createElement("button");
clear.innerText = "CE";
clearButton.appendChild(clear);