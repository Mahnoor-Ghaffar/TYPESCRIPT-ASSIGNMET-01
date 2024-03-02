//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Mehmal", "Haya", "Mahnoor", "Sana"];
guestList.map(function (items) { return (console.log("".concat(items, ",\"You're cordially invited to join us for a delightful evening at our home.\""))); });
