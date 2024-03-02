// Q#2: storing person name in variable.
var myIntro = "Mahnoor Ghaffar";
console.log("I'm" + " " + myIntro + " " + "GSIT student.");
//Q#3: (part A) printing name in lower case.
console.log("LowerCase" + " " + myIntro.toLowerCase());
//Q#3: (part B) printing name in Uppercase.
console.log("UpperCase" + " " + myIntro.toUpperCase());
//Q#3: (part C) printing name in Titlecase.
var words = myIntro.split(" ");
var titlecase = "";
for (var i = 0; i < words.length; i++) {
    titlecase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log("TitleCase", titlecase);
