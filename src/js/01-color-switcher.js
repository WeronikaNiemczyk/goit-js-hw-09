const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let intervalID;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartBtnChangeColor() {
  intervalID = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
}

function onStopBtnNoChangeColor() {
  clearInterval(intervalID);
  startBtn.disabled = false;
}

startBtn.addEventListener('click', onStartBtnChangeColor);
stopBtn.addEventListener('click', onStopBtnNoChangeColor);
