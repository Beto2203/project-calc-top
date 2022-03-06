/******************
*****VARIABLES
******************/
let globalTotal



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
    return num1 * num2
}

function divide(dividend, divisor){
    return dividend / divisor
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