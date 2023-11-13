//question no 18
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//step no 1 creat an array of places you want to travel
var travelDestinations = [
    "Makkah", "Madina", "Paris", "Finland", "Turkey"
];
//step no 2 print aaray in original order
console.log("\n  Original Order");
console.log(travelDestinations);
// step no 3 print array in alphabetical order without modifying actual list
console.log("\n  alphabetical order without modifying actual list");
console.log(__spreadArray([], travelDestinations, true).sort());
// step no 4 show that  array is still in original order
console.log("\n array is still in original order");
console.log(travelDestinations);
// step no 5 print your array in reverse alphabatical order
console.log("\n Reverse alphabetical order without modifying actual list");
console.log(__spreadArray([], travelDestinations, true).sort().reverse());
//step no 6 show that  array is still in original order by printing it again 
console.log("\n array is still in original order");
console.log(travelDestinations);
//step no 7 Reverse the order of ypur list. Print the array to show that its order has changed
console.log("\n Reverse order");
travelDestinations.reverse();
console.log(travelDestinations);
//step no 8 Reverse the order of your listagain so it come to its original order
console.log("\nBack to original order order");
travelDestinations.reverse();
console.log(travelDestinations);
//step no 9 sort your array so it's stored in alphabatical order. print the array to show that it's order has been changed.
console.log("\n Change to alphabatical order");
travelDestinations.sort();
console.log(travelDestinations);
//step no 10 sort to change your array so it's stored in reverse alphabatical order. print the array to show that it's order has been changed.
console.log("\n Reverse alphabatical order");
travelDestinations.sort().reverse();
console.log(travelDestinations);
