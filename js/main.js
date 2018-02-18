/**
 * Created by merimax on 02.12.2016.
 */

//header menu open, close

var toggler = document.getElementById('toggler');
var headerMenu = document.getElementById('navigation');
var overlay = document.querySelector('.overlay');
headerMenu.classList.remove('header__navigation--nojs');

toggler.addEventListener('click', function(event){

  event.preventDefault();
  headerMenu.classList.contains('header__navigation--closed') ?
    (headerMenu.classList.add('header__navigation--opened') ,
      headerMenu.classList.remove('header__navigation--closed'),
      overlay.classList.add('overlay__opened')) :
    (headerMenu.classList.add('header__navigation--closed') ,
      headerMenu.classList.remove('header__navigation--opened'),
    overlay.classList.remove('overlay__opened'));

  overlay.addEventListener('click', function(){
    headerMenu.classList.remove('header__navigation--opened');
    headerMenu.classList.add('header__navigation--closed');
    overlay.classList.remove('overlay__opened');
  });

});

//main preview slider

var slideIndex = 0;
carousel();

function carousel () {
  var i;
  var x = document.getElementsByClassName('main__preview-item');

  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }

  slideIndex++;

  if (slideIndex > x.length) {
    slideIndex = 1;
  }

  x[slideIndex-1].style.display = 'block';
  setTimeout(carousel, 3000);
}
