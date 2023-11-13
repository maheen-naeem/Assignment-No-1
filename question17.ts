//question no 17

var guestlist = [
    'Ali',
    'Doek',
    'Joe',
    'Allama Iqbal',
    'Naeem Ahmed',
    'David',
    'Jonson',
    'Quaid-e-Azam']

//  step no 1 message only inviting two people

console.log(`Sorry,I can invite only two people for dinner`)

//step no 2 remove guest from list

while (guestlist.length > 2) {
    let removeGuest = guestlist.pop()
    console.log(`sorry, ${removeGuest},I cant invite you to dinner`)
}

//part no 3 print message to each of two that you are still invited

for (let guest of guestlist) {
    console.log(`Hello, ${guest} ,you are still invited to 
dinner`);
}

// part no 4 Remove the last two names from your list,so you have an empty list.

guestlist.pop()
guestlist.pop()

//print empty string
console.log(`Guestlist after dinner:`, guestlist)


export { guestlist }