// script.js
let display = document.getElementById('display');
let currentTimeDisplay = document.getElementById('currentTime');

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
        let result = eval(display.value);
        display.value = formatNumber(result);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePercentage() {
    try {
        let result = parseFloat(display.value) / 100;
        display.value = formatNumber(result);
    } catch (error) {
        display.value = 'Error';
    }
}

function updateCurrentTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    currentTimeDisplay.innerHTML = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function formatNumber(number) {
    return number.toLocaleString();
}

// Update time every second
setInterval(updateCurrentTime, 1000);

// Initial display of current time
updateCurrentTime();

