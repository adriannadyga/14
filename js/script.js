'use strict'
//flickity
var carousel = document.getElementById('carousel1');
var carouselStatus = document.getElementById('status');

var flkty = new Flickity(carousel, {
    cellAlign: 'left',
    contain: true,
    pageDots: false
});

function updateStatus() {
  var slideNumber = flkty.selectedIndex + 1;
  carouselStatus.textContent = '0' + slideNumber + '/' + '0' + flkty.slides.length;
}
updateStatus();

flkty.on('select', updateStatus);

//flickity
var carousel2 = document.getElementById('carousel2');

var flkty2 = new Flickity(carousel2, {
    cellAlign: 'left',
    contain: true,
    pageDots: false,
});

