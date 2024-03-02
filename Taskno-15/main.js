//Qno-15
var guestList = ["Mehmal", "Haya", "Mahnoor", "Sana"];
var notcomming = guestList[2];
console.log(guestList[2], "", "cannot attend the dinner");
//replacing
var newperson = "Zehra";
guestList[guestList.indexOf(notcomming)] = newperson;
console.log(guestList);
guestList.map(function (items) { return console.log("".concat(items, ",you are invited for dinner.")); });
