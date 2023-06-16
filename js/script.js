const billInput = document.getElementById('price');
const customInput = document.getElementById('buttonValor');
const peopleInput = document.getElementById('peopleNumber');

const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const buttonReset = document.getElementById('button-reset');

const resultAmount = document.getElementById('result-amount');
const resultTotal = document.getElementById('result-valor');

buttonReset.addEventListener("click", () => {
    resultAmount.innerHTML = '$0.00'
    resultTotal.innerHTML = '$0.00'

    billInput.value = 0
    peopleInput.value = 0
});

button.addEventListener("click", () => {
    const result = billInput.value * (5 / 100);
    const resultt = billInput.value / peopleInput.value;

    if(peopleInput.value == 0) {
        resultTotal.innerHTML = '0.00'
    }
    else if(peopleInput.value < 0) {
        resultTotal.innerHTML = `Error`
    }
    else {
        resultTotal.innerHTML = `$${resultt}`
    }

    resultAmount.innerHTML = `$${result}`
});

button2.addEventListener("click", () => {
    const result2 = billInput.value * (10 / 100);
    const resultt2 = billInput.value / peopleInput.value;
    
    if(peopleInput.value == 0) {
        resultTotal.innerHTML = '0.00'
    }
    else if(peopleInput.value < 0) {
        resultTotal.innerHTML = `Error`
    }
    else {
        resultTotal.innerHTML = `$${resultt2}`
    }
    
    resultAmount.innerHTML = `$${result2}`
});

button3.addEventListener("click", () => {
    const result3 = billInput.value * (15 / 100);
    const resultt3 = billInput.value / peopleInput.value;

    if(peopleInput.value == 0) {
        resultTotal.innerHTML = '0.00'
    }
    else if(peopleInput.value < 0) {
        resultTotal.innerHTML = `Error`
    }
    else {
        resultTotal.innerHTML = `$${resultt3}`
    }

    resultAmount.innerHTML = `$${result3}`
});

button4.addEventListener("click", () => {
    const result4 = billInput.value * (25 / 100);
    const resultt4 = billInput.value / peopleInput.value;

    if(peopleInput.value == 0) {
        resultTotal.innerHTML = '0.00'
    }
    else if(peopleInput.value < 0) {
        resultTotal.innerHTML = `Error`
    }
    else {
        resultTotal.innerHTML = `$${resultt4}`
    }

    resultAmount.innerHTML = `$${result4}`
});

button5.addEventListener("click", () => {
    const result5 = billInput.value * (50 / 100);
    const resultt5 = billInput.value / peopleInput.value;

    if(peopleInput.value == 0) {
        resultTotal.innerHTML = '0.00'
    }
    else if(peopleInput.value < 0) {
        resultTotal.innerHTML = `Error`
    }
    else {
        resultTotal.innerHTML = `$${resultt5}`
    }

    resultAmount.innerHTML = `$${result5}`
});

button6.addEventListener("click", () => {
    const result6 = billInput.value * (button6.value / 100);
    const resultt6 = billInput.value / peopleInput.value;

    if(peopleInput.value == 0) {
        resultTotal.innerHTML = '0.00'
    }
    else if(peopleInput.value < 0) {
        resultTotal.innerHTML = `Error`
    }
    else {
        resultTotal.innerHTML = `$${resultt6}`
    }

    resultAmount.innerHTML = `$${result6}`
});
