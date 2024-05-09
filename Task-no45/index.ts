//Task-45
//Write a function that stores information about a car in a object.
//The function should always recive a manufacturer and a model name.
//It should then accept an arbitrary number of keyword arguments.
//call the function with the required information and two other name-value pairs,Such as a color or an optional feature.
//Print the object that's returned to make sure all the information was stored correctly.

type car = {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function CarInfo(manufacturer: string, model: string,optional : Record<string ,any>): car {
    return{
        manufacturer,
        model,
        //...spread operator is used to include any additional properties passed in the optional parameter.
        ...optional
    }
}
const car2 :car = CarInfo('Toyota', 'Camry',{color : "silver" ,year : 2024});
console.log(car2);
