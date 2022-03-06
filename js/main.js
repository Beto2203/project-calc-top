/******************
*****VARIABLES
******************/
//Defined and declared variables
let globalDisplay = "";
let globalTotal = "";
let dotAlreadyUsed = false;
let operatorActive = false;
let finished = false;
let currentOperator = "0";
let display = document.querySelector("#mainResult");
let del = document.querySelector("#del");
let dot = document.querySelector("#dot");
let equal = document.querySelector("#equal");
let clear = document.querySelector("#clear");
let numbers = document.querySelectorAll(".number");
let specials = document.querySelectorAll(".special");
let operators = document.querySelectorAll(".action");

//Only Defined variables


/******************
*****ANONYMOUS FUNCTIONS
******************/
const displayTheTotal = (node) => {
    if (finished && !operatorActive) {
        start()
    }
    globalDisplay += node.textContent;
    if (currentOperator === "subtract"){
        display.value = "-" + globalDisplay;
    }
    else{
        display.value = globalDisplay;
    }
    
}


/******************
*****FUNCTIONS
******************/
function add(num1, num2){
    globalTotal = num1 + num2;
    display.value = globalTotal;
}

function subtract(minuend, subtrahend){
    globalTotal = minuend - subtrahend;
    display.value = globalTotal;

}

function multiply(num1, num2){
    globalTotal = num1 * num2;
    display.value = globalTotal;
}

function divide(dividend, divisor){
    if (divisor === 0){
        alert("ERROR: can't divide by zero")
        start()
    }
    else{
        globalTotal = dividend / divisor;
        display.value = globalTotal;
    }
    
}

function operate(operator, total, numToApply){
    total = +total;
    numToApply = +numToApply;
    switch(operator){
        case "add" :
            add(total, numToApply);
            break;
        case "subtract" :
            subtract(total, numToApply);
            break;
        case "multiply" :
            multiply(total, numToApply);
            break;
        case "divide" :
            divide(total, numToApply);
            break;
    }
}

del.addEventListener("click", () => {
    // This conditionals handle wether if the dot is the last character or the second-last to delete it
    if (dotAlreadyUsed && globalDisplay.slice(-2, -1) === "."){
        dotAlreadyUsed = false;
        globalDisplay = globalDisplay.slice(0, -2);
    }
    else if (dotAlreadyUsed && globalDisplay.slice(-1) === ".") {
        dotAlreadyUsed = false;
        globalDisplay = globalDisplay.slice(0, -1);
    }
    else{
        globalDisplay = globalDisplay.slice(0, -1);
    }
    //These conditionals display a 0 if the globalDisplay is empty
    if (globalDisplay == false){
        display.value = globalDisplay + "0";
    }
    else{
        display.value = globalDisplay;
    }
    
})

dot.addEventListener("click", () => {
   if (!dotAlreadyUsed){
    dotAlreadyUsed = true;
    globalDisplay += ".";
    display.value = globalDisplay + "0";
   }
})

equal.addEventListener("click", () => {
    operatorActive = false;
    if (currentOperator !== "0"){
        operate(currentOperator, globalTotal, globalDisplay);
        finished = true;
    }
})

clear.addEventListener("click", () => {
    start();
})

numbers.forEach(number => {
    number.addEventListener("click", () => {
        displayTheTotal(number);
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        dotAlreadyUsed = false;
        if (currentOperator === "0"){
            currentOperator = operator.id;
        }
        if (!operatorActive && globalTotal === ""){
            operatorActive = true;
            globalTotal = globalDisplay;
            globalDisplay = ""
            display.value = globalTotal;
        }
        else if(!operatorActive){
            operatorActive = true;
            globalDisplay = ""
            display.value = globalTotal;
        }
        else{
            operate(currentOperator, globalTotal, globalDisplay)
            globalDisplay = ""
            display.value = globalTotal;
        }
        currentOperator = operator.id
    })
})

function start(){
    globalDisplay = "";
    globalTotal = "";
    dotAlreadyUsed = false;
    display.value = "";
    currentOperator = "0";
    finished = false;
}

//Calling the main function on page load
start()