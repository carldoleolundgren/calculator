const outputWindow = document.querySelector('.outputWindow');
const workingWindow = document.querySelector('.workingWindow')
let operator = '';

function clickCE() {
    outputWindow.textContent = 0;
}

function clickAC() {
    outputWindow.innerText = 0;
    workingWindow.innerText = '';
    operator = '';
    outputWindow.textContent = 0;
}

function deleteNum() {
    let startTxt = outputWindow.textContent;
    let endTxt = startTxt.slice(0, -1);
    if (endTxt == '') {
        outputWindow.textContent = 0;
    } else outputWindow.textContent = endTxt;
}

function addDot() {
    if (!outputWindow.textContent.includes('.')) outputWindow.textContent += '.';
}

function calculate() {
    let computation; 
    const prev = parseFloat(workingWindow.innerText.slice(0,-1));
    const current = parseFloat(outputWindow.innerText);

    if (isNaN(prev)) return; 

    switch (workingWindow.innerText.slice(-1)) {
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case '*':
            computation = prev * current
            break
        case '/':
            computation = prev / current
            break
        default:
            return
    }

    workingWindow.innerText = '';
    outputWindow.innerText = Number(computation.toFixed(10));
}

function operate() {
    let computation; 
    const prev = parseFloat(workingWindow.innerText.slice(0,-1));
    const current = parseFloat(outputWindow.innerText);

    if (outputWindow.innerText == 0) {
        return
    } else if (workingWindow.innerText == '') {
        workingWindow.innerText = `${outputWindow.innerText} ${operator}`;
        outputWindow.innerText = 0; 
    } else if (workingWindow.innerText != 0) {
        switch (workingWindow.innerText.slice(-1)) {
            case '+':
                computation = prev + current;
                break
            case '-':
                computation = prev - current;
                break
            case '*':
                computation = prev * current;
                break
            case '/':
                computation = prev / current;
                break
            default:
                return;
        }
        workingWindow.innerText = `${Number(computation.toFixed(10))} ${operator}`;
        outputWindow.innerText = 0; 
    }
}

document.addEventListener('click', event => {
    let target = event.target;

    function clickNumBtn() {
        outputWindow.innerText += target.innerText;
        outputWindow.innerText = Number(outputWindow.innerText);
    }

    function clickOperatorBtn() {
        if (target == document.querySelector('#btnAdd')) {
            operator = '+';
        } else if (target == document.querySelector('#btnSubtract')) {
            operator = '-'
        } else if (target == document.querySelector('#btnMultiply')) {
            operator = '*'
        } else if (target == document.querySelector('#btnDivide')) {
            operator = '/'
        }
        operate();
    }

    if (
        target == document.querySelector("#btn1") ||
        target == document.querySelector("#btn2") ||
        target == document.querySelector("#btn3") ||
        target == document.querySelector("#btn4") ||
        target == document.querySelector("#btn5") ||
        target == document.querySelector("#btn6") ||
        target == document.querySelector("#btn7") ||
        target == document.querySelector("#btn8") ||
        target == document.querySelector("#btn9") ||
        target == document.querySelector("#btn0")
        ) {
        clickNumBtn();
    } else if (target == document.querySelector('#btnDot')) {
        addDot();
    } else if (target == document.querySelector('#btnDelete')) {
        deleteNum();
    } else if (
        target == document.querySelector('#btnDivide') || 
        target == document.querySelector('#btnMultiply') ||
        target == document.querySelector('#btnSubtract') || 
        target == document.querySelector('#btnAdd') 
        ) {
        clickOperatorBtn();
    } else if (target == document.querySelector('#btnEquals')) {
        calculate();
    } else if (target == document.querySelector('#btnAC')) {
        clickAC();
    } else if (target == document.querySelector('#btnCE')) {
        clickCE();
    }
});