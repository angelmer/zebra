/**
 * Created by merimax on 02.12.2016.
 */
ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [55.922394297631726, 37.749790123001034]
        , zoom: 16.5
        , controls: ['zoomControl']
        , behaviors: ['drag']
    });
    var placemark = new ymaps.Placemark([55.922394297631726, 37.749790123001034], {
        hintContent: 'multzebra'
        , balloonContent: 'Детская студия мультипликации'
    }, {
        iconLayout: 'default#image'
        , iconImageHref: 'img/google-clip-art-6.png'
        , iconImageSize: [40, 40]
        , iconImageOffset: [-10, -40]
    });
    map.geoObjects.add(placemark);
}