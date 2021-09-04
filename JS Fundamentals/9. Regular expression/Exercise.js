function furniture(input) {
    let pattern = /^>>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)$/;
    let furniture = [];
    let total = 0;

    while (input[0] !== 'Purchase') {
        let line = input.shift();
        let match = pattern.exec(line);

        if (match !== null) {
            let {name, price, qty} = match.groups;
            price = Number(price);
            qty = Number(qty);

            total += price*qty;
            furniture.push(name);
        }
    }
    console.log(`Bought furniture:`);
    for (let furnitureElement of furniture) {
        console.log(furnitureElement);
    }
    console.log(`Total money spend: ` + total.toFixed(2));
}
// furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);



function race(array) {
    let namePattern = /[A-Za-z]/g;
    let distancePattern = /\d/g;

    let racerNames = array.shift().split(', ');
    let racers = {};

    for (let name of racerNames) {
        racers[name] = 0;
    }

    while (array[0] !== 'end of race') {
        let line = array.shift();

        let letters = line.match(namePattern); // vrushta masiv sus vischki matchove
        let numbers = line.match(distancePattern);

        let name = letters.join('');
        let distances = numbers.map(Number);

        let totalDistance = 0;
        for (let distance of distances) {
            totalDistance += distance;
        }

        if (racers[name] !== undefined) {
            racers[name] += totalDistance;
        }
    }

    let result = Object.entries(racers).sort((a, b) => b[1] - a[1]); // .slice(0, 3)
    if (result[0]) { // proverka dali ima element na nulevoto mqsto
        console.log(`1st place: ` + result[0][0]);
    }
    if (result[1]) {
        console.log(`2nd place: ` + result[1][0]);
    }
    if (result[2]) {
        console.log(`3rd place: ` + result[2][0]);
    }
}
// race(["George, Peter, Bill, Tom", "G4e@55or%6g6!68e!!@", "R1@!3a$y4456@", "B5@i@#123ll", "G@e54o$r6ge#", "7P%et^#e5346r", "T$o553m&6", "end of race"]);


function barIncome(input) {
    // %([A-Z][a-z]*)%.*?        regex for names
    // <(\w+)>.*?               regex for product
    // \|(\d+)\|.*?              regex for qty
    // (-?\d+(?:\.\d+)?)\$      regex for price
    let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/;
    let total = 0;

    while (input[0] !== 'end of shift') {
        let line = input.shift();
        let match = pattern.exec(line);

        if (match !== null) {
            let [_, name, product, qty, price] = match;
            qty = Number(qty);
            price = Number(price);
            total += qty*price;
            console.log(`${name}: ${product} - ${(qty * price).toFixed(2)} `);
        }
    }
    console.log(`Total income: ` + total.toFixed(2));
}
// barIncome([/%George%<Croissant>|2|10.3$/g, /%Peter%<Gum>|1|1.3$/g, /%Maria%<Cola>|1|2.4$/g, "end of shift"]);
// barIncome([/%InvalidName%<Croissant>|2|10.3$/g, /%Peter%<Gum>1.3$/g, /%Maria%<Cola>|1|2.4/g,
//             /%Valid%<Valid>valid|10|valid20$/g, "end of shift"]);

