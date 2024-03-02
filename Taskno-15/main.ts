//Qno-15//
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let guestList: string[]=["Mehmal","Haya","Mahnoor","Sana"];
let notcomming: string=guestList[2]
console.log(guestList[2],"","cannot attend the dinner");
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let newperson :string="Zehra";
guestList [guestList.indexOf(notcomming)]=newperson;
console.log(guestList);
//Print a second set of invitation messages, one for each person who is still in your list.
guestList.map((items) => console.log(`${items},you are invited for dinner.`));
