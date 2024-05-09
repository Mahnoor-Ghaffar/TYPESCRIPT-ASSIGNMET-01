//Album : write a function called make_album that build a object describe a music album.
//The fuction should take in an artist name and an album title , and it should return a object cotaning these two pieces of information.
//use the function to make three dictionaries representig different albums.
//Print each value to show that objects are storing the album information correctly.
//Add an optional parameter to make_Album that allows you to store the numberof traks on an album.
//If the calling line includes a value for the number of tracks,add that value to the album's object.
//make atleast one new function the number of tracks on an album.



interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional property for tracks
}

// Function to create an album object
function make_album(artistName : string ,songTitle :string, noOfTrack? : number) {
    let album :Album = {
        artist: artistName,
        title: songTitle,
        tracks : noOfTrack
    };
    return album;
}

let album1: Album = make_album('Justin Bieber', 'Sorry', 19);
let album2: Album = make_album('Arijit Singh', 'Rabta');
let album3: Album = make_album('Atif Aslam', 'Adat', 15);


// Print album
console.log(album1);
console.log(album2);
console.log(album3);
