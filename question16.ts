// question no 16

//step no 1 informing people that you found a bigger dinner table.

var guestList = ["Doek", "Joe", "Kaleem", "David", "Jonson"];
for (let guest of guestList) {

    console.log(`Hello, ${guest},we  found a bigger dinner table.`)
}

//step no 2 Add a new guest to the beginning of Array.
var newGuestAtBeginning: string = "Ali"
guestList.unshift(newGuestAtBeginning)

// console.log(guestList)

//step no 3 Add one guest in middle of array
var NewGuestInMiddle: string = "Allama Iqbal"
var middleindex: number = Math.floor(guestList.length / 2)
guestList.splice(middleindex, 0, NewGuestInMiddle)

// console.log(guestList)

//step no 4 use append() to add new guest to the end of your list

var newGuestAtEnd: string = "Quaid-e-Azam"
guestList.push(newGuestAtEnd)

console.log(guestList)

//step no 5 print a new message for each

console.log("New Set of invitation messages:")

for (let guest of guestList) {

    console.log(`Dear ${guest}, you are invited to dinner`)
};