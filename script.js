// script.js

const resultEl = document.querySelector('.result');
const buttons = document.querySelectorAll('.buttons button');

let currentValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

function updateDisplay() {
    resultEl.textContent = currentValue;
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (!isNaN(value) || value === ',') {
            // Número ou vírgula
            if (waitingForSecondValue) {
                currentValue = value === ',' ? '0,' : value;
                waitingForSecondValue = false;
            } else {
                if (value === ',' && currentValue.includes(',')) return;
                currentValue = currentValue === '0' && value !== ',' ? value : currentValue + value;
            }
            updateDisplay();
        } else if (value === 'C') {
            currentValue = '0';
            firstValue = null;
            operator = null;
            waitingForSecondValue = false;
            updateDisplay();
        } else if (value === '±') {
            currentValue = toggleSign(currentValue);
            updateDisplay();
        } else if (value === '%') {
            currentValue = percentage(currentValue);
            updateDisplay();
        } else if (value === '=') {
            if (operator && firstValue !== null) {
                currentValue = calculate(firstValue, currentValue, operator);
                operator = null;
                firstValue = null;
                updateDisplay();
            }
        } else {
            // Operadores + - x ÷
            if (!waitingForSecondValue) {
                if (firstValue === null) {
                    firstValue = currentValue;
                } else if (operator) {
                    firstValue = calculate(firstValue, currentValue, operator);
                    currentValue = firstValue;
                    updateDisplay();
                }
                operator = value;
                waitingForSecondValue = true;
            } else {
                operator = value; // altera operador antes do segundo número
            }
        }
    });
});

updateDisplay();


