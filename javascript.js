function displayVal(e) {
    let display = document.querySelector('.display');
    if (e.currentTarget.textContent === 'C') {
        display.textContent = '';
    } else {
        display.textContent = display.textContent + e.currentTarget.textContent;
    }
}

function calculate() {
    let display = document.querySelector('.display');
    let parsed = parseEquation(display.textContent);
    display.textContent = Number(operate(parsed).toFixed(3));

}

function Expression(operator, a, b){
    this.operator = operator;
    this.a = a;
    this.b = b;
}

function operate(expression){
    let a = expression.a;
    let b = expression.b;

    switch(expression.operator){
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

function parseEquation(equationString) {
    //let numbers = equationString.split('\+|\-|\/|\*');
    //let operators = equationString.matchAll('\+|\-|\/|\*');
    let expressions = equationString.matchAll(/([0-9]+)(\+|\-|\/|\*)([0-9]+)/g);
    for (const match of expressions) {
        console.log(match);
        let expression = new Expression(match[2], Number(match[1]), Number(match[3]));
        console.log(expression);
        return expression;
    }
}