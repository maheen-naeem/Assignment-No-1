//Question no 21

var school = {
    Name: "EagleHouse",
    room: 20,
    progress: "Excellent"
};

//define an array of objects
var schools: Array<typeof school> = [];

//pushing multiple objects

schools.push(school);
schools.push({
    Name: "New Vision",
    room: 10,
    progress: "good"
});

var school1 = {
    Name: "Kaim Khani",
    room: 30,
    progress: "Fantastic"
};
schools.push(school1);
console.log(schools);