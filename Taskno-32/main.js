//Qno-32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["Mahnoor", "Zainab", "Zukhruf", "Wareesha", "Fatima"];
var new_users = ["Mahnoor", "Aqsa", "Sana", "Mala", "Fatima"];
var currentUsers = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (currentUsers.indexOf(new_user.toLowerCase()) !== -1) {
        console.log("".concat(new_user, " user name already exists"));
    }
    else {
        console.log("".concat(new_user, " is available"));
    }
}
