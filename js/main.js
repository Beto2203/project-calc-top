/******************
*****VARIABLES
******************/
let globalTotal = ""
let display = document.querySelector("#mainResult");
let del = document.querySelector("#del");
let numbers = document.querySelectorAll(".number");
let specials = document.querySelectorAll(".special");
let operators = document.querySelectorAll(".action");

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
    
})

numbers.forEach(number => {
    number.addEventListener("click", () => {
        globalTotal += number.textContent;
        display.value = globalTotal;
    })
})

specials.forEach(special => {
    special.addEventListener("click", () => {
        if (special.)
    })
})

function start(){
    globalTotal = "";
    display.value = globalTotal;
    

    
}

start()