let num1 = "";
let num2 = "";
let currentNum = "";
let operator = null;
let isNum2 = false;
let result = "";

const numbersBtns = document.getElementById("numbers");
const operatorsBtns = document.getElementById("operators");
const equalsBtn = document.getElementById("equals-btn");


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

equalsBtn.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        result = operate();
        console.log(result);
        currentNum = "";
        num1 = result;
        num2 = "";
    }
})

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
}



//work in progress main function
function initiate() {
    if (operator === null) {
        isNum2 = false;
        num1 = currentNum;
        console.log(`initiate num1 is ${num1}`)
    } else {
        isNum2 = true;
        num2 = currentNum;
        console.log(`initiate num2 is ${num2}`)

    } 
} 



//need = to not be counted as a number.
// Still need to limit characters and decimals
//limit decimal to once per number. Make display function.
//Make negative clear and % buttons work.