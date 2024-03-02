//Qno24
//You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings.
var fruit1 = "orange";
var fruit2 = "orange";
var fruit3 = "mango";
if (fruit1 == fruit3) {
    console.log("fruit are same");
}
else {
    console.log("Equality test,fruits are not same");
}
if (fruit1 == fruit2) {
    console.log("fruit are same");
}
else {
    console.log("Equality test,fruits are not same");
}
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number1 = 9;
var number2 = 20;
if (number1 == 9) {
    console.log("child");
}
if (number1 != number2) {
    console.log("Adult");
}
//greater than and less than.
if (number1 < number2) {
    console.log("less then");
}
else {
    ("Greater then");
}
if (number2 > number1) {
    console.log("greater");
}
else {
    console.log("less");
}
// greater than or equal to
var score = 91;
if (score >= 80) {
    console.log("Grade A+");
}
if (score >= 90) {
    console.log("reward 100🎉🎉");
}
else if (score >= 85) {
    console.log("reward 50🎉");
}
else {
    console.log("fail");
}
// and less than or equal to
var score = 90;
if (score <= 80) {
    console.log("Grade A");
}
if (score <= 90) {
    console.log("Grade A+ reward 100🎉🎉");
}
else if (score <= 85) {
    console.log("Grade A+ reward 50🎉");
}
else {
    console.log("fail");
}
//Tests using "and" operators
var age = 39;
if (age > 13 && age <= 19) {
    console.log("teen");
}
else if (age > 20 && age <= 39) {
    console.log("Adult");
}
else if (age > 40 && age <= 59) {
    console.log("middle age adult");
}
else {
    console.log("senior adult");
}
//Tests using "or" operators
var temperature = 25;
if (temperature > 30 || temperature < 0) {
    console.log("Extreme weather conditions.");
}
else {
    console.log("OR Operator,Weather conditions are normal.");
}
//Test whether an item is in a array
var array = ["apple", "banana", "orange"];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var item = array_1[_i];
    if (item === "banana") {
        break;
    }
}
if (true) {
    console.log("Banana is in the array.");
}
else {
    console.log("Test whether an item is in a array,Banana is not in the array.");
}
//Test whether an item is not in a array
var fru = ["apple", "banana", "orange"];
for (var _a = 0, array_2 = array; _a < array_2.length; _a++) {
    var item = array_2[_a];
    if (item === "mango") {
        break;
    }
}
if (false) {
    console.log("mango is not in the array.");
}
else {
    console.log("Test whether an item is in a array,mango not in the array.");
}
