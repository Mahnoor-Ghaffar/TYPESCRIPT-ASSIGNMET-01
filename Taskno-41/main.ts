//Qno-41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.

function show_magicians(magicians : string[]) :void {
    for (let magician of magicians) {
        console.log(magician.charAt(0) + magician.slice(1));
    }
}
let magician : string[] = ["Woody Allen","Jerry Lewis","Vincent Price"];
show_magicians(magician)