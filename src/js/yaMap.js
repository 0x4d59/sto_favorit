var myMap,
    myPlacemark;

function init(){
    // создали карту     
    myMap = new ymaps.Map("map", {
        center: [59.896998, 30.462559],
        zoom: 17,
        controls: ['zoomControl']
    });
    // создали инстанс метки
    myPlacemark = new ymaps.Placemark([59.896998, 30.462559], {}, {
      preset: 'islands#dotIcon',
      iconColor: '#F85959'
    });
    // подключили метку
    myMap.geoObjects.add(myPlacemark);
    // отключили возможность изменения размера
    // увеличения карты с помощью скролла мыши
    myMap.behaviors.disable(
        ['scrollZoom']
    );
}

ymaps.ready(init);