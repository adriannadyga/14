'use strict'
//flickity
var carousel = document.querySelector('.main-carousel');
var carouselStatus = document.querySelector('.carousel-status');

var flkty = new Flickity(carousel, {
    cellAlign: 'left',
    contain: true,
    pageDots: false,
});

function updateStatus() {
    var slideNumber = flkty.selectedIndex + 1;
    carouselStatus.textContent = '0' + slideNumber + '/' + '0' + flkty.slides.length;
  }
  updateStatus();
  
  flkty.on( 'select', updateStatus );