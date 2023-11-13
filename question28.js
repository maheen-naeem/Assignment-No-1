//question no 28
//when the person is less than two years
var age = 12;
if (age < 2) {
    console.log("Age is".concat(age, ", The person is baby"));
}
else if (age < 4) {
    console.log(" Age is".concat(age, ", The person is toddler."));
}
else if (age < 13) {
    console.log("Age is".concat(age, ", The person is kid."));
}
else if (age < 20) {
    console.log("Age is".concat(age, ", The person is teenager."));
}
else if (age < 65) {
    console.log("Age is".concat(age, ", The person is Adult."));
}
else {
    console.log("Age is".concat(age, ", The person is an elder."));
}
//to test with different age
console.log("Second condition");
var age = 24;
if (age < 2) {
    console.log("  The person is baby");
}
else if (age < 4) {
    console.log("  The person is toddler.");
}
else if (age < 13) {
    console.log(" The person is kid.");
}
else if (age < 20) {
    console.log(" The person is teenager.");
}
else if (age < 65) {
    console.log(" The person is Adult.");
}
else {
    console.log(" The person is an elder.");
}
