//Qno-39
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city : string, country : string) : string {
    return `"${city}" , "${country}"`
}
let cityCount1 = city_country('Madina','Saudia');
let cityCount2 = city_country('Canada','Ottawa');
let cityCount3 = city_country('China','Beijing');
console.log(cityCount1);
console.log(cityCount2);
console.log(cityCount3);