if(document.readyState === 'loading') {
     document.addEventListener('DOMContentLoaded', ready());
} else {
   ready();
}

function on() {
     let overlays = Array.from(document.getElementByClassName('overlay-text'));
     
     overlays.forEach(overlay => {
          overlay.addEventListener('click', () => {
               overlay.classList.remove('visible');
          });
     });
}     
                                                     



