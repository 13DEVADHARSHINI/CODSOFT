let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.textContent = expression;
}

function clearDisplay() {
    expression = '';
    display.textContent = '0';
}

function calculateResult() {
    try {
        let result = eval(expression);
        if (!isFinite(result)) {
            display.textContent = 'Error';
        } else {
            display.textContent = result;
        }
        expression = '';
    } catch (error) {
        display.textContent = 'Error';
        expression = '';
    }
}
