window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  // Modal
  function More(btn, btnClose){
    // let self = this;
    this.btn = document.querySelector('.' + btn);
    this.close = document.querySelector('.' + btnClose);
    this.overlay = document.querySelector('.overlay');

    // console.log(self.overlay);

    this.btn.addEventListener('click', () => {
      this.overlay.style.display = 'block';
      this.btn.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });

    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.btn.classList.remove('more-splash');
      document.body.style.overflow = '';
    });
  }

  let tabSection = new More('description-btn', 'popup-close');
  let timerSection = new More('more', 'popup-close');

});