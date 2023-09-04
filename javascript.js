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
    display.textContent = Number(parsed.toFixed(3));

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
    let validExpressions = equationString.match(/\d+(?:\.?\d+)?(?:[-+*/]\d+(?:\.?\d+)?)+/g)[0];
    console.log(validExpressions);
    let operators = [...validExpressions.matchAll(/[-+*/]/g)];
    console.log(operators[0]);
    console.log(operators[0]['index']);
    for(let i = 0; i < operators.length; i++){
        let a = Number();
        let b = Number();
        if (i === 0){
            a = validExpressions.slice(0, operators[i]['index']);
            console.log(a);   
        } else {
            a = validExpressions.slice(operators[i-1]['index'], operators[i].index);
            console.log(a);   
        }
        if (i+1 === operators.length) {
            b = validExpressions.slice(operators[i]['index']+1, validExpressions.length);
            console.log(b);
        } else {
            b = validExpressions.slice(operators[i]['index']+1, operators[i+1]['index'])
            console.log(b);
        }
        let expression = new Expression(operators[i][0], Number(a), Number(b));
        let result = operate(expression);
        console.log(result);
        validExpressions = validExpressions.replace(`${expression.a}${expression.operator}${expression.b}`, result);
        console.log(validExpressions);
        operators = [...validExpressions.matchAll(/[-+*/]/g)];
        console.log(operators)
        if (operators.length > 0) {
            if (operators[0]['index'] != 0) {
                i = -1;
            }
        }
    }

    return Number(validExpressions);
    //let expressions = equationString.matchAll(/([0-9]+)(\+|\-|\/|\*)([0-9]+)/g);
    //for (const match of expressions) {
    //    console.log(match);
    //    let expression = new Expression(match[2], Number(match[1]), Number(match[3]));
    //    console.log(expression);
    //    return expression;
    //}
}