//Qno-37
//Large Shirts: Modify the make() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_Shirt(size : string = "large", message : string = "I love TypeScript"): void {
    console.log(`the shirt size is ${size} and the message on it is "${message}" `)
}
make_Shirt();
make_Shirt('medium');
make_Shirt('small','Awesome kid of an amazing family');