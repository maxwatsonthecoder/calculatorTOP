let num1 = "";
let num2 = "";
let currentNum = "";
let operator = null;
let isNum2 = false;
let result = "";

const numbersBtns = document.getElementById("numbers");
const operatorsBtns = document.getElementById("operators");
const equalsBtn = document.getElementById("equals-btn");
const clearBtn = document.getElementById("clear");
const decimalBtn = document.getElementById("decimal-btn");
const percentBtn = document.getElementById("percent-btn");
const negativeBtn = document.getElementById("negative-btn");
const display = document.getElementById("display");


numbersBtns.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        currentNum += event.target.textContent;
        initiate();
    }
});

operatorsBtns.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        if (operator === null) {
            operator = event.target.textContent;
            currentNum = "";  
        } else {
            result = operate();
            operator = event.target.textContent;
            num1 = limitDisplay(result);
            display.textContent = parseFloat(num1) + operator;
            currentNum = "";
            num2 = "";
        }
    }
});

equalsBtn.addEventListener("click", function() {
    if (operator && currentNum) {
        result = operate();
        num1 = limitDisplay(result);
        display.textContent = parseFloat(num1);
        currentNum = "";
        num2 = "";
        operator = null; 
    }
});

clearBtn.addEventListener("click", function() {
        currentNum = "";
        num1 = "";
        num2 = "";
        result = "";
        operator = null;
        display.textContent = parseFloat(0);
});

decimalBtn.addEventListener("click", function() {
    if (!currentNum.includes(".")) {
        currentNum += ".";
    }
});

percentBtn.addEventListener("click", function() {
    if (currentNum !== "") {
        currentNum *= 0.01
        initiate();
    };
});

negativeBtn.addEventListener("click", function() {
    if (currentNum !== "") {
        currentNum *= (-1);
        initiate(); 
    }
 });

function add(a, b) {
    return parseFloat(a) + parseFloat(b)
};

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b)
};

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b)
};

function divide(a, b) {
    return parseFloat(a) / parseFloat(b)
};

function operate() {
    switch (operator) {
        case "+" : return add(num1, num2);
        case "-" : return subtract(num1, num2);
        case "*" : return multiply(num1, num2);
        case "/" : return divide(num1, num2);
    }
};

function limitDisplay(num) {
    let displayNum = num.toString();

    if (displayNum.length > 8) {
        displayNum = displayNum.slice(0, 8);
    }
    return parseFloat(displayNum);
};

function initiate() {
    if (operator === null) {
        isNum2 = false;
        num1 = limitDisplay(currentNum);
        display.textContent = parseFloat(num1);
    } else {
        isNum2 = true;
        num2 = limitDisplay(currentNum);
        display.textContent = parseFloat(num2);
    } 
}; 


//add divide by 0 stop fn
