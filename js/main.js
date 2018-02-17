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

//open video on cartoons page

var modalWindow = document.querySelector('.modal');
var iframeWindow = document.getElementById('iframe');

