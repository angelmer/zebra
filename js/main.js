/**
 * Created by merimax on 02.12.2016.
 */

//header menu open, close
let toggler = document.getElementById('toggler');
let headerMenu = document.getElementById('navigation');
let overlay = document.querySelector('.overlay');
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


/* открытие полноразмерного изображения страница фото и достижения
* вызов функции происходит на данных страницах */
let photoWrappers = document.querySelectorAll('.photo__wrapper');
let popUp = document.querySelector('.photo__popup');
let popUpImage = document.querySelector('.photo__popup-image');


let progressItems = document.querySelectorAll('.progress__item');
let progressPopUp = document.querySelector('.progress__popup');
let progressPopUpImage = document.querySelector('.progress__popup-image');


function openBigPhoto(photos, popUp, bigPhoto) {
  for (let i = 0; i < photos.length; i++) {
    let photo = photos[i];

    photo.addEventListener('click', function () {
      let smallImage = photo.querySelector('img').src;
      bigPhoto.src = smallImage.substr(22, [smallImage.length - 29]) + '-desktop.jpg';
      if(popUp.classList.contains('visually-hidden')) {
        popUp.classList.remove('visually-hidden');
        bigPhoto.classList.add('photo__animation');
      }
    });
  }
}

function closeBigPhoto(popUp, bigPhoto) {

  popUp.addEventListener('click', function () {
    if (!popUp.classList.contains('visually-hidden')){
      popUp.classList.add('visually-hidden');
      bigPhoto.classList.remove('photo__animation');
    }

  })
}





