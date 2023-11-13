"use strict";
//question no 17
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestlist = void 0;
var guestlist = [
    'Ali',
    'Doek',
    'Joe',
    'Allama Iqbal',
    'Naeem Ahmed',
    'David',
    'Jonson',
    'Quaid-e-Azam'
];
exports.guestlist = guestlist;
//  step no 1 message only inviting two people
console.log("Sorry,I can invite only two people for dinner");
//step no 2 remove guest from list
while (guestlist.length > 2) {
    var removeGuest = guestlist.pop();
    console.log("sorry, ".concat(removeGuest, ",I cant invite you to dinner"));
}
//part no 3 print message to each of two that you are still invited
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Hello, ".concat(guest, " ,you are still invited to \ndinner"));
}
// part no 4 Remove the last two names from your list,so you have an empty list.
guestlist.pop();
guestlist.pop();
//print empty string
console.log("Guestlist after dinner:", guestlist);
