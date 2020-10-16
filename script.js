if(document.readyState === 'loading') {
     document.addEventListener('DOMContentLoaded', ready());
}  else {
      ready();
}

function ready() {
  Let overlays = Array.from(document.getElementsByClassName('overlay-text'));
  
   overlays.forEach(overlay => {
      overlay.addEventListener('click', () => {
           overlay.classList.remove('visible');
      });
   });
}
                                                            
                                                     



