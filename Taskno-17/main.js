//Qno-17
//guest list
var guestlist = ['Rose', 'Mehmal', 'Haya', 'Simra', 'Zehra', 'Sana', 'Huzaifa'];
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Due to limited space,only two peoples can be invited for dinner");
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestlist.length > 2) {
    //pop method for removing last array object
    var remove = guestlist.pop();
    console.log("sorry,".concat(remove, ",you are not invited"));
}
//Print a message to each of the two people still on your list, letting them know they’re still invited
guestlist.map(function (items) { return console.log("".concat(items, ",you are still invited")); });
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestlist.pop();
guestlist.pop();
console.log("final list", guestlist);
