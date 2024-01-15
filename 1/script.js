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
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePercentage() {
    try {
        display.value = String(parseFloat(display.value) / 100);
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

// Update time every second
setInterval(updateCurrentTime, 1000);

// Initial display of current time
updateCurrentTime();
