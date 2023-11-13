//question no 30
var userName = [
    'admin', 'Ali', 'subhan', 'tanveer', 'Kamran'
];
function greetusers() {
    for (var i in userName) {
        if (userName[i].toLowerCase() === 'admin') {
            console.log("Hello admin, would you like to see a status \n    report?");
        }
        else {
            console.log("Hello ".concat(userName[i], ", thank you for logging\n    it again."));
        }
    }
}
greetusers();