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

//открытие полноразмерного изображения

var photoWrappers = [].slice.call(document.querySelectorAll('.photo__wrapper'));
var popUp = document.querySelector('.photo__popup');
var popUpImage = document.querySelector('.photo__popup-image');

photoWrappers.forEach(function(element, i){

  element.addEventListener('click', function(){

    var link =  element.querySelector('img').src;
    var subLink = link.substr(22 ,[ link.length -29]) + '-desktop.jpg';
    popUpImage.src = subLink;
    popUp.classList.remove('visually-hidden');
  })
});

popUp.addEventListener('click', function(){

  popUp.classList.add('visually-hidden');
});
