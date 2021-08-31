const numberOne = document.querySelector("button[value='1']");
const numberTwo = document.querySelector("button[value='2']");

let conta = document.querySelector('#conta');
conta.innerText = '';

numberOne.addEventListener('click', function () {
    conta.innerText = numberOne.value;
});

numberTwo.addEventListener('click', function () {
    conta.innerText = numberTwo.value;
});
