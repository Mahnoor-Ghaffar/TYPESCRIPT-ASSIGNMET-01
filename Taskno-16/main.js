//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
var guestList = ["Mehmal", "Haya", "Mahnoor", "Sana"];
var notcomming = guestList[2];
console.log(guestList[2], "", "cannot attend the dinner");
var newperson = "Zehra";
guestList[guestList.indexOf(notcomming)] = newperson;
console.log(guestList);
guestList.map(function (items) { return console.log("".concat(items, ",I found bigger dinner table so im inviting more peoples.")); });
//Add one new guest to the beginning of your array.
var newPer = "Rose";
//Unshift method allows you to add one or more elements to the beginning of an array.
guestList.unshift(newPer);
console.log(guestList);
// Add one new guest to the middle of your array.
var mid = "Simra";
guestList.splice(3, 0, mid);
console.log(guestList);
//Use append() to add one new guest to the end of your list.
guestList.push("Huzaifa");
console.log(guestList);
//Use append() to add one new guest to the end of your list.
guestList.map(function (items) { return console.log("".concat(items, ",I'm inviting you to my dinner event tonight, beloved friend.")); });
