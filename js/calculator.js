// Numbers
const numOne = document.querySelector("button[value='1']");
const numTwo = document.querySelector("button[value='2']");

let numbers = new Object();

numbers = [
    {
        value: 1,
        local: numOne,
    },
    {
        value: 2,
        local: numTwo,
    },
];

// Operands
const plusOp = document.querySelector("button[value='+']");
const minusOp = document.querySelector("button[value='-']");
const equalOp = document.querySelector("button[value='=']");

let operands = new Object();

operands = [
    {
        name: 'plus',
        value: '+',
        local: plusOp,
    },
    {
        name: 'minus',
        value: '-',
        local: minusOp,
    },
    {
        name: 'equal',
        value: '=',
        local: equalOp,
    },
];

console.log();
