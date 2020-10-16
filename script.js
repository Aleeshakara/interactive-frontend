if(document.readyState === 'loading') {
     document.addEventListener('DOMContentLoaded', ready());
}  else {
      ready();
}

function ready() {
  let overlay = Array.from(document.getElementsByClassName('overlay-text'));
  
   overlay.forEach(overlay => {
      overlay.addEventListener('click', () => {
           overlay.classList.remove('visible');
      });
   });
}
                                                            
                                                     



