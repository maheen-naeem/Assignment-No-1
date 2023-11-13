//question no 22

//function to create a birds object

function createBird(name: string, color: string, speciality: string) {
    return {
        name,
        color,
        speciality,
    };
}
//create an array of birds
var birds = [
    createBird("sparrow", "brown", "can fly"),
    createBird("parrots", "green", "can talk"),
    createBird("pigeon", "black", "can produce sound"),
];
//acess an invalid index
var invalidIndex = 5;  //There are only 3 elements in the array,
// so this will cause an error
console.log(`bird at index ${invalidIndex}:`, birds[invalidIndex]);

//print the birds
birds.forEach((bird) => {
    console.log(`Name: ${bird.name},Color: ${bird.color},spaciality: ${bird.speciality}`);
});
