let num1 = "";
let num2 = "";
let operator = null;
let isNum2 = false;
let result = "";

const numbersBtns = document.getElementById("numbers");
const operatorsBtns = document.getElementById("operators");
const equalsBtn = document.getElementById("equals-btn");

//numbersBtns.addEventListener("click", initiate);

function chosenNum1() {
    numbersBtns.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            isNum2 = false;
            num1 += event.target.textContent;
            console.log(`${num1}`);
        }
    });
};

function chosenNum2() {
    numbersBtns.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            isNum2 = true;
            num2 += event.target.textContent;
            console.log(`${num2}`);
        }
    });
};

const chosenOperator = operatorsBtns.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            operator = event.target.textContent;
            console.log(`${operator}`);
        }
    });

function add(a, b) {
    return a + b
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
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}



//work in progress main function
function initiate() {

    const chosenOperator = operatorsBtns.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            operator = event.target.textContent;
            console.log(`${operator}`);
        }
    });

    function chosenNum() {
        numbersBtns.addEventListener("click", (event) => {
            if (event.target.tagName === "BUTTON") {
                isNum2 = false;
                num1 += event.target.textContent;
                console.log(`${num1}`);
            }
        });
    };

    function chosenNum2() {
        numbersBtns.addEventListener("click", (event) => {
            if (event.target.tagName === "BUTTON") {
                isNum2 = true;
                num2 += event.target.textContent;
                console.log(`${num2}`);
            }
        });
    };

    function operate() {
        switch (operator) {
            case "+":
                return add(num1, num2);
                break;
            case "-":
                return subtract(num1, num2);
                break;
            case "*":
                return multiply(num1, num2);
                break;
            case "/":
                return divide(num1, num2);
                break;
        }
    }
} 

