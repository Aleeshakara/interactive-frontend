const topLeft = document.querySelector('.top-left-panel');
const topRight = document.querySelector('.top-right-panel');
const bottomLeft = document.querySelector('.bottom-left-panel');
const bottomRight = document.querySelector('.bottom-right-panel');

const getRandomButton = () => {
  const panels = [
  topLeft,
  topRight,
  bottomLeft,
  bottomRight
 ];
 return panels[parseIntMath.random() * panels.length];  
};

const sequence =  [getRandomPanel()];

const flash = panel => {
  return new Promise((resolve, reject) => {
    panel.className += ' active';
    setTimeout(() => {
      panel.className = panel.className.replace(' active', '');
      setTimeout(() => {
      }, 250);
      resolve();
    }, 1000);
  });
};

let canClick = false;

const panelClicked = button => {
  if (!canClick) return;
  console.log(button);
};

const main = async () => {
  for (const panel of sequence) {  
    await flash(panel);
  }
  canClick = true;
};

main();
  
