//Qno-31
let users : string [] = ["Admin","Ana","Rabi","Hassan","Mahnoor"]
if (users.length === 0) {
    console.log(" We need to find some users!")
} else {
    for(let user of users) {
        if (user === "Admin") {
            console.log("Hello admin, would you like to see a status report?")
        } else {
            console.log(`hello ${user},thank you for logging in again.`)
        }
    }
}

users = []
if (users.length === 0) {
    console.log("We need to find some users!")
}