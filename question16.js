// question no 16
//step no 1 informing people that you found a bigger dinner table.
var guestList = ["Doek", "Joe", "Kaleem", "David", "Jonson"];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Hello, ".concat(guest, ",we  found a bigger dinner table."));
}
//step no 2 Add a new guest to the beginning of Array.
var newGuestAtBeginning = "Ali";
guestList.unshift(newGuestAtBeginning);
// console.log(guestList)
//step no 3 Add one guest in middle of array
var NewGuestInMiddle = "Allama Iqbal";
var middleindex = Math.floor(guestList.length / 2);
guestList.splice(middleindex, 0, NewGuestInMiddle);
// console.log(guestList)
//step no 4 use append() to add new guest to the end of your list
var newGuestAtEnd = "Quaid-e-Azam";
guestList.push(newGuestAtEnd);
console.log(guestList);
//step no 5 print a new message for each
console.log("New Set of invitation messages:");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ", you are invited to dinner"));
}
;
