const topLeft = document.querySelector('.top-left-button');
const topRight = document.querySelector('.top-right-button');
const bottomLeft = document.querySelector('.bottom-left-button');
const bottomRight = document.querySelector('.bottom-right-button');

const getRandomButton = () => {
  const buttons = [
  topLeft,
  topRight,
  bottomLeft,
  bottomRight
 ];
 return buttons[parseIntMath.random() * buttons.length];  
};

const sequence =  [getRandomButton()];

const flash = button => {
  return new Promise((resolve, reject) => {
    button.className += ' active';
    setTimeout(() => {
      button.className = button.className.replace(' active', '');
      setTimeout(() => {
      }, 250));
      resolve();
    }, 1000);
  });
};

let canClick = false;

const buttonClicked = button => {
  if (!canClick) return;
  console.log(button);
};

const main = async () => {
  for (const button of sequence) {  
    await flash(button);
  }
  canClick = true;
};

main();
  
