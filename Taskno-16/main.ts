//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let guestList: string[]=["Mehmal","Haya","Mahnoor","Sana"];
let notcomming: string=guestList[2]
console.log(guestList[2],"","cannot attend the dinner");
let newperson :string="Zehra";
guestList [guestList.indexOf(notcomming)]=newperson;
console.log(guestList);
guestList.map((items) => console.log(`${items},I found bigger dinner table so im inviting more peoples.`));
//Add one new guest to the beginning of your array.
let newPer: string="Rose";
//Unshift method allows you to add one or more elements to the beginning of an array.
guestList.unshift(newPer);
console.log(guestList);
// Add one new guest to the middle of your array.
let mid: string="Simra";
guestList.splice(3,0,mid);
console.log(guestList);
//Use append() to add one new guest to the end of your list.
guestList.push("Huzaifa");
console.log(guestList);
//Use append() to add one new guest to the end of your list.
guestList.map((items) => console.log(`${items},I'm inviting you to my dinner event tonight, beloved friend.`));
