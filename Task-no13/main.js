//Qno13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["Suzuki Hayabusa", "Suzuki Gixxer 150 ", "Yamaha YZF-R1"];
transportation.map(function (items) { return console.log("I would like to own a ".concat(items)); });
