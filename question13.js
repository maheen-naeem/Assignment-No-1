// question no 13
var favouriteTransportation = [];
favouriteTransportation.push(["motorcycle", "Honda"]);
favouriteTransportation.push(["car", "toyota"]);
favouriteTransportation.push(["bicycle", "sohrab"]);
//using for each loop to print a series of statements
favouriteTransportation.forEach(function (_a) {
    var transport = _a[0], brand = _a[1];
    console.log("I would liked to own a ".concat(brand, " ").concat(transport));
});
