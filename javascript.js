function displayVal(e) {
    display = document.querySelector('.display');
    display.textContent = display.textContent + e.currentTarget.textContent;
}

function calculate() {

}

function operate(operator, a, b){
    switch(operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        default:
            return 'Invalid Operation';
    }
}