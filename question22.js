//question no 22
//function to create a birds object
function createBird(name, color, speciality) {
    return {
        name: name,
        color: color,
        speciality: speciality,
    };
}
//create an array of birds
var birds = [
    createBird("sparrow", "brown", "can fly"),
    createBird("parrots", "green", "can talk"),
    createBird("pigeon", "black", "can produce sound"),
];
//acess an invalid index
var invalidIndex = 5; //There are only 3 elements in the array,
// so this will cause an error
console.log("bird at index ".concat(invalidIndex, ":"), birds[invalidIndex]);
//print the birds
birds.forEach(function (bird) {
    console.log("Name: ".concat(bird.name, ",Color: ").concat(bird.color, ",spaciality: ").concat(bird.speciality));
});
