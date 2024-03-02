var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Qno18
//Seeing the World: Think of at least five places in the world you’d like to visit.
var places = ["Makkah", "Madina", "Turkey", "Palastine", "Japan"];
//Print your array in its original order
console.log("Original order", places);
//Print your array in alphabetical order without modifying the actual list.
//three dots for making duplicate Array
console.log("Alphabetical order", __spreadArray([], places, true).sort());
//Show that your array is still in its original order by printing it.
console.log("Original order after sorting", places);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Alphabetical order", __spreadArray([], places, true).sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("Original order after reverse sorting", places);
//Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log("reverssed order", places);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log("back to orignal order", places);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been change.
places.reverse();
console.log("back to orignal order");
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("reversed alphabetical order", places);
