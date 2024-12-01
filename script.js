//selecting elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear")

let currentInput = "0";
let previousInput = "";
let operator = null;

//to update display
function updateDisplay() {
    display.textContent = currentInput;
}

//handling button inputs
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "=") {
            calculate()
        }   else if (value === "+" || value === "-" || value === "*" || value === "/") {
            setOperator(value);
        }   else if (value === ".") {
            addDecimal();
        }   else {
            appendNumber(value);
        }
        updateDisplay();
    });
});

//appending number to current input
function appendNumber(value) {
    if (currentInput === "0") {
        currentInput = value;
    }   else {
        currentInput += value;
    }
}

//adding decimals
function addDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
    }
}

//setting operators
function setOperator(value) {
    if (operator !== null) {
        calculate;
    }
    operator = value;
    previousInput = currentInput;
    currentInput = "0";
}

