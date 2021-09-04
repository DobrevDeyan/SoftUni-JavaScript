function worldTracker(stringArray) {
    let words = stringArray.shift().split(' ');
    let resultObj = {};

    for (let word of words) {
        resultObj[word] = 0;
    }

    for (let word of stringArray) {
        if(Object.keys(resultObj).includes(word)) {
            resultObj[word] += 1;
        }
    }

    let sorted = Object.entries(resultObj).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}
// worldTracker(['this sentence', 'In','this','sentence','you','have','to','count','the','occurrences','of','the',
//     'words','this','and','sentence','because','this','is','your','task']);



function oddOccurrences(string) {
    let occurrences = {};
    let words = string.split(" ");
    let result = [];

    for (let word of words) {
        let wordOff = word.toLowerCase();
        if (!Object.keys(occurrences).includes(wordOff)) {
            occurrences[wordOff] = 0;
        }
        occurrences[wordOff] += 1;
    }

    for (let [key, value] of Object.entries(occurrences)) {
        if (value % 2 !== 0) {
            result.push(key);
        }
    }

    console.log(`${result.join(" ")}`);
}
// oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');



function piccolo(array) {
    let parking = [];

    for (let arrayElement of array) {
        let [direction, carNumber] = arrayElement.split(", ");
        if (direction === "IN") {
            if (!parking.includes(carNumber)) {
                parking.push(carNumber);
            }
        } else {
            if (parking.includes(carNumber)) {
                parking.splice(parking.indexOf(carNumber), 1);
            }
        }
    }

    let parkingSorted = parking.sort((a, b) => a.localeCompare(b));

    if (parkingSorted.length > 0) {
        console.log(`${parkingSorted.join("\n")}`);
    } else {
        console.log(`Parking Lot is Empty`);
    }
}
// piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);
// piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);



function partyTime(array) {
    let index = array.indexOf("PARTY");
    let regularList = [];
    let vipList = [];
    let count = 0;

    for (let i = 0; i < index; i++) {
        if (Number.isInteger(Number(array[i][0]))) {
            vipList.push(array[i]);
        } else {
            regularList.push(array[i]);
        }
    }

    for (let i = index + 1; i < array.length; i++) {
        if (regularList.includes(array[i])) {
            regularList.splice(regularList.indexOf(array[i]), 1);
        } else if (vipList.includes(array[i])) {
            vipList.splice(vipList.indexOf(array[i]), 1);
        }
    }

    count = vipList.length + regularList.length;

    console.log(count);
    for (let vipListElement of vipList) {
        console.log(vipListElement);
    }
    for (let regularListElement of regularList) {
        console.log(regularListElement);
    }
}
// partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);



function cardGame(players) {
    let eachPlayer = players.shift();
    let objCardPlayers = [];
    let resultArray = [];
    let cards = [];
    let type = [];
    let card = [];
    let power = [];

    while (eachPlayer !== undefined) {
        let input = eachPlayer.split(": ");
        let name = input[0];
        cards = input[1].split(", ");

        if (!objCardPlayers[name]) {
            objCardPlayers[name] = cards.toString();
        } else {
            objCardPlayers[name] += "," + cards;
        }
        eachPlayer = players.shift();
    }

    for (const obj in objCardPlayers) {
        let set = new Set(objCardPlayers[obj].split(","));
        cards = Array.from(set);
        objCardPlayers[obj] = cards;
    }

    for (const key in objCardPlayers) {
        let sum = 0;
        resultArray = objCardPlayers[key];
        for (let i = 0; i < resultArray.length; i++) {
            card = resultArray[i].split("");
            type = card.pop();
            for (const num of card) {
                if (num === "J") {
                    power = 11;
                } else if (num === "Q") {
                    power = 12;
                } else if (num === "K") {
                    power = 13;
                } else if (num === "A") {
                    power = 14;
                } else {
                    power += num;
                }
            }
            switch (type) {
                case "S":
                    sum += Number(power) * 4;
                    break;
                case "H":
                    sum += Number(power) * 3;
                    break;
                case "D":
                    sum += Number(power) * 2;
                    break;
                case "C":
                    sum += Number(power) * 1;
                    break;
            }
            power = "";
        }
        console.log(`${key}: ${sum}`);
    }
}
// cardGame(['Peter: 2C, 4H, 9H, AS, QS', 'Tomas: 3H, 10S, JC, KD, 5S, 10S', 'Andrea: QH, QC, QS, QD', 'Tomas: 6H, 7S, KC, KD, 5S, 10C', 'Andrea: QH, QC, JS, JD, JC', 'Peter: JD, JD, JD, JD, JD, JD']);



function travelTime(input) {
    let destinations = {};

    for (let i = 0; i < input.length; i++) {
        let [country, town, price] = input[i].split(" > ").filter(e => e !== "");
        price = +price;
        town = town[0].toUpperCase() + town.slice(1);

        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {};
        }
        if (!destinations[country].hasOwnProperty(town)) {
            destinations[country][town] = price;
        }
        let prevPrice = destinations[country][town];
        if (prevPrice > price) {
            destinations[country][town] = price;
        }
    }

    let orderedCountries = [...Object.keys(destinations)].sort((a,b) => a.localeCompare(b));
    let result = "";
    for (let country of orderedCountries) {
        result += country + " -> ";
        let sortedPrices = [...Object.keys(destinations[country])].sort((a, b) => travelCost(a, b, destinations, country));
        for (let town of sortedPrices) {
            result += `${town} -> ${destinations[country][town]} `;
        }
        result += "\n";
    }
    console.log(result);

    function travelCost(town1, town2, destination, country) {
        let priceOne = destination[country][town1];
        let priceTwo = destination[country][town2];

        return priceOne - priceTwo
    }
}
// travelTime(["Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000", "Albania > Tirana > 1000", "Bulgaria > Sofia > 200"]);



function companyUsers(input) {
    let companies = {};
    for (const elem of input) {
        let [company, id] = elem.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        companies[company].push(id);
    }
    let sorted = Object.entries(companies);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let elem of sorted) {
        console.log(elem[0]);
        let set = new Set(elem[1]);
        for (let number of set) {
            console.log(`-- ${number}`);
        }
    }
}
// companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);
// companyUsers(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111']);



function minerTask(input) {
    let inputArr = [];
    for (let currentLine of input) {
        inputArr.push(currentLine)
    }

    let resourceAndQuantity = new Map();

    for (let i = 0; i < inputArr.length; i += 2) {
        let resource = inputArr[i];
        if (resource.toLowerCase() === "stop") {
            break;
        }
        let quantity = parseInt(inputArr[i + 1]);

        if (resource in resourceAndQuantity) {
            resourceAndQuantity[resource] += quantity;
        }
        else {
            resourceAndQuantity[resource] = quantity;
        }
    }

    for (let key in resourceAndQuantity) {
        if (resourceAndQuantity.hasOwnProperty(key)) {
            console.log(key + ' -> ' + resourceAndQuantity[key]);
        }
    }
}
// minerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
// minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);
