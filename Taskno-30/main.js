//Qno-30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
var arrays = ["Admin", "Ana", "Rabi", "Hassan", "Mahnoor"];
for (var _i = 0, arrays_1 = arrays; _i < arrays_1.length; _i++) {
    var user = arrays_1[_i];
    if (user === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("hello ".concat(user, " welcome"));
    }
}
