// Создадим карту без элементов управления.
var myMap = new ymaps.Map('map', {
        zoom: 12,
        center: [59.93772, 30.313622],
        controls: []
    });

// Добавим на карту ползунок масштаба и линейку.
myMap.controls.add('zoomControl');
myMap.controls.add('rulerControl', {
    // Отключим отображение масштабного отрезка рядом с линейкой.
    // Подробнее о настройке опций.
    scaleLine: false
});