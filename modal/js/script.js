window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  // Modal
  function More(btn, btnClose){
    let self = this;
    self.btn = document.querySelector('.' + btn);
    self.close = document.querySelector('.' + btnClose);
    self.overlay = document.querySelector('.overlay');

    // console.log(self.overlay);

    self.btn.addEventListener('click', function(){
      self.overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });

    self.close.addEventListener('click', function(){
      self.overlay.style.display = 'none';
      self.btn.classList.remove('more-splash');
      document.body.style.overflow = '';
    });
  }

  let tabSection = new More('description-btn', 'popup-close');
  let timerSection = new More('more', 'popup-close');

});