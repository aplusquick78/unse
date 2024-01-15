let display = document.getElementById('display');

function appendToDisplay(value) {
    // % 기호 처리
    if (value === '%') {
        // 현재 입력된 수식에서 마지막 숫자를 100으로 나눈 결과를 계산
        let expression = display.value;
        let lastNumberIndex = expression.search(/\d[^.]*$/);
        if (lastNumberIndex !== -1) {
            let lastNumber = expression.slice(lastNumberIndex);
            let result = parseFloat(lastNumber) / 100;
            expression = expression.slice(0, lastNumberIndex) + result;
        }
        display.value = expression;
    } else {
        display.value += value;
    }
}

// 나머지 함수들은 동일
