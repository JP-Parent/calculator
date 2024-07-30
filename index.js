const display = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".misc");
const equalButton = document.querySelector("#result");

var currentOperand = "";
var previousOperand = "";
var operator = null;
display.innerText = "0";

clearButton.addEventListener("click", allClear);
equalButton.addEventListener("click", operate);

digitButtons.forEach(digit => {
    digit.addEventListener("click", () => {
        appendDigit(digit.value);
    });
});

operatorButtons.forEach(opButton => {
    opButton.addEventListener("click", () => {
        setOperation(opButton.value)
    });
});

function allClear() {
    display.textContent = '0';
    currentOperand = '';
    previousOperand = '';
    operator = null;
}

function appendDigit(digit) {
    if (display.textContent.length >= 11) return;
    if (display.textContent === '0' || previousOperand !== "") {
        display.textContent = digit;
    } else {
        display.textContent += digit;
    }
}

function setOperation(op){
    if(currentOperand !== ""){
        operate();
    }
    if(previousOperand !== "" && operator !== "="){
        operate();
    }
        operator = op;
        previousOperand = display.innerText;
        currentOperand = "";
}

function operate() {
    currentOperand = display.innerText;
    if (operator === null || currentOperand === '') return;
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if(current === 0){
                result = "ERROR";
            }
            else{
                result = prev / current;
            }
            break;
        default:
            return "ERROR";
    }
    display.textContent = result.toString().slice(0, 11);
    currentOperand = result;
    operator = null;
}
