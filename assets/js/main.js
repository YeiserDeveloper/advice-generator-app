const url = `https://api.adviceslip.com/advice`;
const btnAdvice = document.getElementById('btnGenerator');

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

let numberRandom = random(1, 200)

async function getData() {
    const dataId = document.getElementById('numberID')
    const dataText = document.getElementById('advice')
    const response = await fetch(`${url}/${numberRandom}`);
    const data = await response.json();
    const getId = data.slip.id;
    const getText = data.slip.advice;
    dataId.innerHTML = getId;
    dataText.innerHTML = getText;
    return advice;
    getData();
}

btnAdvice.addEventListener('click', getData())