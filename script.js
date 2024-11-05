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
        result = operate();
        console.log(result);
        currentNum = "";
        num1 = limitDisplay(result);
        display.textContent = num1;
        num2 = "";
});

clearBtn.addEventListener("click", function() {
        currentNum = "";
        num1 = "";
        num2 = "";
        result = "";
        operator = null;
        display.textContent = 0;
        console.log(`${currentNum}, ${num1}, ${num2}, ${result}`)
});

function add(a, b) {
    return parseFloat(a) + parseFloat(b)
};

function subtract(a, b) {
    return a - b
};

function multiply(a, b) {
    return a * b
};

function divide(a, b) {
    return a / b
};

function operate() {
    switch (operator) {
        case "+" : return add(num1, num2);
        case "-" : return subtract(num1, num2);
        case "*" : return multiply(num1, num2);
        case "/" : return divide(num1, num2);
    }
};

//fn to limit display to 8 characters. Need to add textcontent
function limitDisplay(num) {
    let displayNum = num.toString();

    if (displayNum.length > 8) {
        displayNum = displayNum.slice(0, 8);
    }
    return parseFloat(displayNum);
};

//work in progress main function
function initiate() {
    if (operator === null) {
        isNum2 = false;
        num1 = limitDisplay(currentNum);
        display.textContent = num1;
        console.log(`initiate num1 is ${num1}`)
    } else {
        isNum2 = true;
        num2 = limitDisplay(currentNum);
        display.textContent = num2;
        console.log(`initiate num2 is ${num2}`)

    } 
} 



//need = to not be counted as a number.
//limit decimal to once per number. 
//Make negative clear and % buttons work.