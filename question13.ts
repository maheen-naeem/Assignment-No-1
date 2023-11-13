// question no 13

var favouriteTransportation: Array<[transport: string, brand: string]> = []

favouriteTransportation.push(["motorcycle", "Honda"]);
favouriteTransportation.push(["car", "toyota"]);
favouriteTransportation.push(["bicycle", "sohrab"]);
//using for each loop to print a series of statements

favouriteTransportation.forEach(([transport, brand]) => { console.log(`I would liked to own a ${brand} ${transport}`) }
);
