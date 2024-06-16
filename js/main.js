let operator = prompt('Que tipo de operación se realizará?');
let num1 = parseInt(prompt('Primer número:'));
let num2 = parseInt(prompt('Segundo número:'));

const operate = (num1, num2, operator) => {
    if(operator === 'add') {
        alert(add(num1, num2));
    }
}

const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

document.addEventListener('DOMContentLoaded', operate(num1, num2, operator));