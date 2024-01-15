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
        let result = eval(display.value);
        
        // 단위 표시를 추가
        display.value = result.toLocaleString() + ' 단위'; // '단위'를 필요한 단위로 변경

    } catch (error) {
        display.value = 'Error';
    }
}
