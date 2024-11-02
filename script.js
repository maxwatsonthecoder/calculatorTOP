let num1 = "";
let num2 = "";
const operator = ["+", "-" , "*", "/"];

const numbersBtns = document.getElementById("numbers");


//in progress main function
numbersBtns.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        num1 += event.target.textContent;
        console.log(`${num1}`);
    }
})


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

function initiate() {
    console.log("numbers div clicked!")
} 

