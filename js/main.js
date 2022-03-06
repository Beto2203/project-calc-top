/******************
*****VARIABLES
******************/
let globalTotal = "";
let dotAlreadyUsed = false;
let display = document.querySelector("#mainResult");
let del = document.querySelector("#del");
let dot = document.querySelector("#dot");
let equal = document.querySelector("#equal");
let numbers = document.querySelectorAll(".number");
let specials = document.querySelectorAll(".special");
let operators = document.querySelectorAll(".action");


/******************
*****ANONYMOUS FUNCTIONS
******************/
const displayTheTotal = (node) => {
    globalTotal += node.textContent;
    display.value = globalTotal;
}


/******************
*****FUNCTIONS
******************/
function add(num1, num2){
    return num1 + num2;
}

function subtract(minuend, subtrahend){
    return minuend - subtrahend;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(dividend, divisor){
    return (divisor !== 0) ? dividend / divisor : "ERROR: can't divide by zero";
}

function operate(operator, total, numToApply){
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
    if (dotAlreadyUsed && globalTotal.slice(-2,-1) === ".") {
        dotAlreadyUsed = false;
        globalTotal = globalTotal.slice(0, -2);
        console.log("First   " + globalTotal)
    }
    else{
        globalTotal = globalTotal.slice(0, -1);
        console.log("Second   " + globalTotal);
    }
    display.value = globalTotal;
})

dot.addEventListener("click", () => {
    dotAlreadyUsed = true;
    globalTotal += ".";
    display.value = globalTotal + "0";
})

equal.addEventListener("click", () => {

})

numbers.forEach(number => {
    number.addEventListener("click", () => {
        displayTheTotal(number);
    })
})



function start(){
    globalTotal = "";
    dotAlreadyUsed = false;
    display.value = "0";
    
}

//Calling the main function on page load
start()