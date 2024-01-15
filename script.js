let input = document.getElementById('result');

function appendNumber(number) {
    input.value += number;
}

function appendOperator(operator) {
    input.value += operator;
}

function clearInput() {
    input.value = '';
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }
}
