document.addEventListener('DOMContentLoaded', () => {
    // Set the base values
    const display = document.querySelector('#display');
    const buttonsCalculator = document.querySelectorAll('.numbers button')
    const operatorsCalculator = document.querySelectorAll('.operators button');
    // Turn the NodeList into an array
    const buttons = [...buttonsCalculator];
    const operators = [... operatorsCalculator];
    // Operations 
    const operations = {
        add: (num1, num2) => num1 + num2,
        subtract: (num1, num2) => num1 - num2,
        multiply: (num1, num2) => num1 * num2,
        divide: (num1, num2) => num1 / num2,
    }

    const operate = (operator,num1, num2) => {
        switch (operator) {
            case '+':
                return operations.add(num1, num2);
            case '-':
                return operations.subtract(num1, num2);
            case '*':
                return operations.multiply(num1, num2);
            case '/':
                return operations.  divide(num1, num2);
            default:
                break;
        }
    }

    const addNumber = (num) => {
        if(!operator) {
            num1 +=num.substring(0,9);
            display.textContent = num1;
        } else if (sum !== '') {
            num1 += num.substring(0,9);
            display.textContent = num1;
        } else if (num1 === '' && sum !== '' && num2 === '') {
            num2 += num.substring(0,9);
            display.textContent = num2;
        } else {
            num2 += num.substring(0,9);
            display.textContent = num2;
        }
        console.log(num1);
        console.log(num2);
        
    }

    const getOperators = (symbol) => {
        if(sum === '') {
            operator += symbol;
            display.textContent = num2;
        } else if (sum !== '') {
            operator += symbol;
            display.textContent = num1;
        }
        if(operator.length > 1) {
            if(sum === '') {
                let newNum1 = parseInt(num1);
                let newNum2 = parseInt(num2);
                sum = operate(operator, newNum1, newNum2);
                num1 = '';
                num2 = '';
                display.textContent = sum;
            } else if (sum !== '') {
                let newNum1 = parseInt(num1);
                sum = operate(operator, sum, newNum1);
                display.textContent = sum;
            }
        }
    }
    // Values
    let num1 = '';
    let num2 = '';
    let operator = '';
    let sum = '';

    buttons.forEach(button => {
        button.addEventListener('click', (e) =>{
            let target = e.target;              
            if(target.textContent === 'AC') {
                num1 = '';
                num2 = '';
                operator = '';
                sum = '';
                display.textContent = '0';
                console.log(num1, num2, operator, sum);
            } else {
                return addNumber(target.textContent);
            }
        });
    })
    operators.forEach(op => {
        op.addEventListener('click', (e) =>{
            let target = e.target;
            switch (target.textContent) {
                case '/':
                    return [getOperators('/')];
                case '*':
                    return getOperators('*');
                case '+':
                    return [getOperators('+')];
                case '-':
                    return [getOperators('-')];
                case '=':
                    console.log('equal')
                    console.log(sum)
                    if(sum === '') {
                        let newNum1 = parseInt(num1);
                        let newNum2 = parseInt(num2);
                        num1 = '';
                        num2 = '';
                        sum = operate(operator, newNum1, newNum2);
                        display.textContent = sum;
                        operator = '';
                    }
                default:
                    break;
            }
        })
    })
})