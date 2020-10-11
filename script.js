const topLeft = document.querySelector('.top-left-button');
const topRight = document.querySelector('.top-right-button');
const bottomLeft = document.querySelector('.bottom-left-button');
const bottomRight = document.querySelector('.bottom-right-button');

const sequence =  [
  bottomRight,
  topLeft,
  bottomLeft,
  topRight
];

const flash = button => {
  return new Promise((resolve, reject) => {
    button.className += ' active';
    setTiomeout(() => {
      button.className = button.className.replace(' active', '');
      resolve();
    }, 1000);
  });
};

const main = async () => {
  for (const button of sequence) {  
    await flash(button);
  }
};

main();
  
