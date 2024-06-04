document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstValue = '';
    let secondValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstValue = '';
                secondValue = '';
                display.innerText = '';
            } else if (value === '=') {
                secondValue = currentInput;
                display.innerText = calculate(firstValue, operator, secondValue);
                currentInput = '';
                operator = '';
                firstValue = '';
                secondValue = '';
            } else if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                firstValue = currentInput;
                currentInput = '';
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });

    function calculate(first, operator, second) {
        let result;
        const num1 = parseFloat(first);
        const num2 = parseFloat(second);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 'Error';
        }

        return result;
    }
});
