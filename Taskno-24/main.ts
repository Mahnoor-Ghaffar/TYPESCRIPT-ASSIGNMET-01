//Qno24
//You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings.
let fruit1: string="orange";
let fruit2: string="orange"
let fruit3: string ="mango";
if (fruit1==fruit3){
    console.log("fruit are same");
}
else{
    console.log("Equality test,fruits are not same");
}
if (fruit1==fruit2){
    console.log("fruit are same");
}
else{
    console.log("Equality test,fruits are not same");
}
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1:number=9
let number2:number=20
if (number1==9){
    console.log("child");
}
if(number1 != number2){
    console.log("Adult");
}
//greater than and less than.
if (number1<number2){
    console.log("less then")
}
else{
    ("Greater then")
}
if(number2>number1){
    console.log("greater");
}
else{
    console.log("less");
}
// greater than or equal to
var score:number=91;
if(score>=80){
    console.log("Grade A+");
}
if(score>=90) {
   console.log("reward 100🎉🎉");
}else if(score>=85){
    console.log("reward 50🎉");
}
else{
    console.log("fail");
}
// and less than or equal to
var score:number=90;
if(score<=80){
    console.log("Grade A");
}
if(score<=90) {
   console.log("Grade A+ reward 100🎉🎉");
}else if(score<=85){
    console.log("Grade A+ reward 50🎉");
}
else{
    console.log("fail");
}
//Tests using "and" operators
let age:number=39;
    if(age>13 && age<=19){
        console.log("teen");
    }
   else if(age>20 && age<=39){
        console.log("Adult");
    }
    else if(age>40 && age <=59){
        console.log("middle age adult");
    }
    else{
        console.log("senior adult");
    }
//Tests using "or" operators
const temperature: number = 25;

if (temperature > 30 || temperature < 0) {
    console.log("Extreme weather conditions.");
} else {
    console.log("OR Operator,Weather conditions are normal.");
}
//Test whether an item is in a array
const array: string[] = ["apple", "banana", "orange"];

for (const item of array) {
    if (item === "banana"){
        break;
    }
}

if (true) {
    console.log("Banana is in the array.");
} else {
    console.log("Test whether an item is in a array,Banana is not in the array.");
}
//Test whether an item is not in a array
const fru: string[] = ["apple", "banana", "orange"];

for (const item of array) {
    if (item === "mango") {
        break;
    }
}

if (false) {
    console.log("mango is not in the array.");
} else {
    console.log("Test whether an item is not in a array,mango is not in the array.");
}