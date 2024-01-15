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
        let expression = input.value;
        expression = expression.replace(/%/g, '/100'); // 백분율 계산을 위해 %를 /100으로 대체
        input.value = eval(expression);
    } catch (error) {
        input.value = 'Error';
    }
}

function backspace() {
    let currentValue = input.value;
    input.value = currentValue.slice(0, -1);
}
