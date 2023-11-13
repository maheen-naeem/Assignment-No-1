// question no 15
//part :1
var guestList = ["Doek", "Joe", "Kaleem", "David", "Jonson"];
var guestWhoCannotMakeit: string = "Kaleem"

console.log(`${guestWhoCannotMakeit} can't make it to dinner`);

//part :2
var NewGuest: string = "Naeem Ahmed";
var indexofguestWhoCannotMakeit: number = guestList.indexOf(guestWhoCannotMakeit);
// console.log(indexofguestWhoCannotMakeit)

if (indexofguestWhoCannotMakeit !== -1) {
    guestList[indexofguestWhoCannotMakeit] = NewGuest
};
// console.log(guestList[2])

//part 3

console.log("second set of invitation messages :")
guestList.forEach((guest: string) => {
    console.log(`Dear ${guest},you are invited to dinner.`)
});