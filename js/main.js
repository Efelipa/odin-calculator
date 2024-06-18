const display = document.querySelector('#display');
console.log(display.textContent);

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