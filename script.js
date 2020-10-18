if(document.readyState === 'loading') {
     document.addEventListener('DOMContentLoaded', ready());
} else {
   ready();
}

function ready() {
     let overlays = Array.from(document.getElementsByClassName("overlay-text"));
     
     overlays.forEach(overlay => {
          overlay.addEventListener('click', () => {
               overlay.classList.remove('visible');
          });
     });
} 

let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector(".topleft-panel");
const topRight = document.querySelector(".topright-panel");
const bottomLeft = document.querySelector(".bottomleft-panel");
const bottomRight = document.querySelector(".bottomright-panel");
const hardButton = document.querySelector("#hard");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

strictButton.addEventListener('click', (event) => {
  if (hardButton.checked == true) {
    hard = true;
  } else {
    hard = false;
  }
});

onButton.addEventListener('click', (event) => {
  if (onButton.checked == true) {
    on = true;
    turnCounter.innerHTML = "-";
  } else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor();
    clearInterval(intervalId);
  }
});

startButton.addEventListener('click', (event) => {
  if (on || win) {
    play();
  }
});

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  on = false;

  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }
