window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  //Slider
  class Slider {
    constructor(clsSliderItem, clsPrev, clsNext, clsSliderDots, clsDot, clsDotActive) {
      this.slideIndex = 1;
      this.slides = document.querySelectorAll('.' + clsSliderItem);
      this.prev = document.querySelector('.' + clsPrev);
      this.next = document.querySelector('.' + clsNext);
      this.dotsWrap = document.querySelector('.' + clsSliderDots);
      this.dots = document.querySelectorAll('.' + clsDot);
      this.dotActive = clsDotActive;
      this.prev.onclick = this.prevfunc.bind(this);
      this.next.onclick = this.nextfunc.bind(this);
      this.dotsWrap.onclick = this.dotsfunc.bind(this);
    }

    showSlides(n){
      if(n > this.slides.length){
        this.slideIndex = 1;
      }
      if(n < 1){
        this.slideIndex = this.slides.length;
      }
      this.slides.forEach((item) => item.style.display = 'none');
      this.dots.forEach((item) => item.classList.remove(this.dotActive));

      this.slides[this.slideIndex - 1].style.display = 'block';
      this.dots[this.slideIndex - 1].classList.add(this.dotActive);
    }

    plusSlides(n){
      this.showSlides(this.slideIndex += n);
    }
  
    currentSlide(n){
      this.showSlides(this.slideIndex = n);
    }

    prevfunc(){
      this.plusSlides(-1);
    }
  
    nextfunc(){
      this.plusSlides(1);
    }

    dotsfunc(){
      for (let i = 0; i < this.dots.length +1; i++){
        if(event.target.classList.contains('dot') && event.target == this.dots[i - 1]){
          this.currentSlide(i);
        }
      }
    }
  }

  let slider = new Slider('slider-item', 'prev', 'next', 'slider-dots', 'dot', 'dot-active').showSlides();
  
  
  //Slider
  // let slideIndex = 1,
  //     slides = document.querySelectorAll('.slider-item'),
  //     prev = document.querySelector('.prev'),
  //     next = document.querySelector('.next'),
  //     dotsWrap = document.querySelector('.slider-dots'),
  //     dots = document.querySelectorAll('.dot');

  // showSlides(slideIndex);

  // function showSlides(n){
  //   if(n > slides.length){
  //     slideIndex = 1;
  //   }
  //   if(n < 1){
  //     slideIndex = slides.length;
  //   }

  //   slides.forEach((item) => item.style.display = 'none');
  //   dots.forEach((item) => item.classList.remove('dot-active'));

  //   slides[slideIndex - 1].style.display = 'block';
  //   dots[slideIndex - 1].classList.add('dot-active');
  // }

  // function plusSlides(n){
  //   showSlides(slideIndex += n);
  // }

  // function currentSlide(n){
  //   showSlides(slideIndex = n);
  // }

  // prev.addEventListener('click', () => {
  //   plusSlides(-1);
  // });

  // next.addEventListener('click', () => {
  //   plusSlides(1);
  // });

  // dotsWrap.addEventListener('click', (event) => {
  //   for (let i = 0; i < dots.length +1; i++){
  //     if(event.target.classList.contains('dot') && event.target == dots[i - 1]){
  //       currentSlide(i);
  //     }
  //   }
  // });
  
});