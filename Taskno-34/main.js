//Qno-34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var favPizza = ["BBQ", "Chicken", "Grilled"];
for (var _i = 0, favPizza_1 = favPizza; _i < favPizza_1.length; _i++) {
    var pizza = favPizza_1[_i];
    console.log(pizza);
}
///• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (var _a = 0, favPizza_2 = favPizza; _a < favPizza_2.length; _a++) {
    var pizza = favPizza_2[_a];
    console.log("I like ".concat(pizza, " pizza"));
}
console.log("\n I really love pizza!");
