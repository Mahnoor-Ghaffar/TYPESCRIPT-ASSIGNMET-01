"use strict";
//Task-45
//Write a function that stores information about a car in a object.
//The function should always recive a manufacturer and a model name.
//It should then accept an arbitrary number of keyword arguments.
//call the function with the required information and two other name-value pairs,Such as a color or an optional feature.
//Print the object that's returned to make sure all the information was stored correctly.
function CarInfo(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
const car2 = CarInfo('Toyota', 'Camry', { color: "silver", year: 2024 });
console.log(car2);
