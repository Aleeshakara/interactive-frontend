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
let hard = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topLeft");
const topRight = document.querySelector("#topRight");
const bottomLeft = document.querySelector("#bottomLeft");
const bottomRight = document.querySelector("#bottomRight");
const hardButton = document.querySelector("#hard");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

hardButton.addEventListener('click, (event) => {
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
     turnCounter.innerHTML = ""
        clearColor();
        clearInterval(intervalId);
   }
});

startButton.addEventListener('click, (event) => {
  if (on || win) {
    play();
  }
});

function play () {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good =  true;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;
     
  intervalId = setInterval(gameTurn, 800);
};   

function gameTurn() {
  on == false;
     
  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }
     
  if (compTurn) {
    setColor();
    setTimeout(() => {
      if (order[flash] == 1)  one();
      if (order[flash] == 2)  two();  
      if (order[flash] == 3)  three();
      if (order[flash] == 4)  four();
      flash++;   
    }, 200);
  }
};

function one() {
  if (noise) {
    let audio = document.getElememtById("panel");
    audio. play();
  }
  noise = true;
     topLeft.style.BackgroundColor = "tomato";
}     
    
 function two() {
  if (noise) {
    let audio = document.getElememtById("panel");
    audio. play();
  }
  noise = true;
     topRight.style.BackgroundColor = "fire";
}     
function three() {
  if (noise) {
    let audio = document.getElememtById("panel");
    audio. play();
  }
  noise = true;
     bottomLeft.style.BackgroundColor = "lime";
}   

function four() {
  if (noise) {
    let audio = document.getElememtById("panel");
    audio. play();
  }
  noise = true;
     bottomRight.style.BackgroundColor = "orchid";
}  

function clearColor() {
 topLeft.style.backgroundColor = "red";
 topRight.style.backgroundColor = "orange";
 bottomLeft.style.backgroundColor = "green";
 bottomRight.stylebackgroundColor = "purple";
}

function FlashColor() {
 topLeft.style.backgroundColor = "tomato";
 topRight.style.backgroundColor = "firee";
 bottomLeft.style.backgroundColor = "lime";
 bottomRight.stylebackgroundColor = "orchid";
}

topLeft.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(1);
    check();
    one();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }       
  }
}     

  topRight.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(2);
    check();
    two();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }       
  }
})     

bottomLeft.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(3);
    check();
    three();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }       
  }
})

bottomRight.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(4);
    check();
    four();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }       
  }
})

function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;  
     
   if (playerOrder.length == 20 && good) {
     winGame();
   }
     
 if (good == false) {
   flashColor();
   turnCounter.innerHTML = "NO!";
   setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();
        
      if (hard) {
        play();
      } else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);   
      }
  }, 800);
  
  noise = false;
}
              
if (turn == playerOrder.length && good && !win) {
 turn++;
 playerOrder = [];
 compTurn = true;
 flash = 0;
 turnCounter.innerHTML = turn;
 intervalId = setInterval(gameTurn, 800); 
 } 
}      
      
function winGame() {
  flashColor();
  turnCounter.innerHTML = "WIN!";
  on = false;  
  win = true;
}     
          
     
    
     
     
     
     
     
     
     
     
     
     


                          



                                                     



