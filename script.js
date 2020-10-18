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
