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
const display = document.getElementById("display");


numbersBtns.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        currentNum += event.target.textContent;
        console.log(`currentNum is ${currentNum}`);
        initiate();
    }
});

operatorsBtns.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        operator = event.target.textContent;
        console.log(`operator is ${operator}`);
        currentNum = "";
    }
});

equalsBtn.addEventListener("click", function() {
    if (operator && currentNum) {
        result = operate();
        console.log(`equalsbtn is ${result}, and ${num1}`);
        num1 = limitDisplay(result);
        display.textContent = parseFloat(num1);
        currentNum = "";
        num2 = "";
    }
});

clearBtn.addEventListener("click", function() {
        currentNum = "";
        num1 = "";
        num2 = "";
        result = "";
        operator = null;
        display.textContent = parseFloat(0);
        console.log(`${currentNum}, ${num1}, ${num2}, ${result}`)
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
        console.log(`initiate num1 is ${num1}`)
    } else {
        isNum2 = true;
        num2 = limitDisplay(currentNum);
        display.textContent = parseFloat(num2);
        console.log(`initiate num2 is ${num2}`)

    } 
}; 



//make functional then limit decimal to once per number. 
//Make negative and % buttons work.