const input = 'gaQsfm234dg54gf*23sP42';
const inputDecimal = 'gaQsfm234dg54,01gf*23sP42';
const operators = ['+', '-', '/', '*'];

function compute(input) {
    let cleanedInput = input.replaceAll(/[A-Za-z]+/g, '');
    let parsed = operators.map(o => {
        let split = cleanedInput.split(o);
        if (split.length > 1) {
            return { input: split, operator: o };
        }
        else return null;
    }).filter(o => o !== null);
    return operate(parsed[0].input, parsed[0].operator);
}

function operate(input, op) {
    if (input.length == 2) {
        input[0] = input[0].replace(",", ".");
        input[1] = input[1].replace(",", ".");
        switch (op) {
            case '+':
                return input[0] + input[1];
            case '-':
                return input[0] - input[1];
            case '*':
                return input[0] * input[1];
            case '/':
                return input[0] / input[1];
            default:
                return 0;
        }
    }
    return 0;
}

console.log(Math.trunc(compute(input)));
console.log(Math.trunc(compute(inputDecimal)));