// script.js
let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePercentage() {
    try {
        display.value = String(parseFloat(display.value) * 0.01);
    } catch (error) {
        display.value = 'Error';
    }
}
