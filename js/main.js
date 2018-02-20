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

photoWrappers.forEach(function(element, i){

  element.addEventListener('click', function(){

    alert(this);
    var link =  element.querySelector('img').src;
    var subLink = link.substr(0 ,[ link.length -4]) + '-desktop.jpg';
    alert(subLink);

  })
});


/*

var elements = [].slice.call(document.querySelectorAll('.a'));





elements.forEach(function (element, i) {

  element.addEventListener('click', function () {

    alert(this); // див на который кликнули

    alert(element); // див на который кликнули

    alert(i); // номер дива на который кликнули

  })

});
*/
