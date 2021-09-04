function phoneBook(array) {
    let book = {};

    for (let person of array) {
        let [name, id] = person.split(" ");
        book[name] = id;
    }

    for (let key in book) {
        console.log(`${key} -> ${book[key]}`);
    }
}
// phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);



function meetings(array) {
    let meetings = {};

    for (let arrayElement of array) {
        let [day, name] = arrayElement.split(' ');

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}
// meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);



function addressBook(array) {
    let book = {};

    for (let arrayElement of array) {
        let [name, address] = arrayElement.split(":");
        book[name] = address;
    }

    let sorted = Object.entries(book);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let entry of sorted) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}
// addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);



function storage(array) {
    let map = new Map();

    for (let string of array) {
        let tokens = string.split(" ");
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if (!map.has(product)) {
            map.set(product, quantity);
        } else {
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity += quantity;
            map.set(product, newQuantity);
        }
    }

    for (let [key, value] of map) {
        console.log(`${key} -> ${value}`);
    }
}
// storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);



function schoolGrades(param) {
    let grades = {};

    for (let el of param) {
        let elements = el.split(' ');
        let name = elements.shift();
        let schoolGrades = elements.map(Number);

        if (!(grades.hasOwnProperty(name))) {
            grades[name] = schoolGrades
        } else {
            schoolGrades.forEach(el => {
                grades[name].push(el);
            })
        }
    }
    let output = Object.entries(grades).sort((a, b) => {
        return avg(a[1]) - avg(b[1]);
    })
    for (let [key, value] of output) {
        console.log(`${key}: ${value.join(', ')}`)
    }

    function avg(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }

}
// schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);



function wordOccurrences(arr) {
    let map = new Map();
    let words = 0;
    for (let word of arr) {
        if (!map.has(word)) {
            words = 1;
        } else {
            words = map.get(word) + 1;
        }
        map.set(word, words);
    }
    let sorted = Array.from(map);
    sorted.sort((a, b) => b[1] - a[1]);

    for (let [word, words] of sorted) {
        console.log(`${word} -> ${words} times`);
    }
}
// wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);



function neighborhoods(input) {
    let map = new Map();
    let neighborhoods = input.shift().split(', ');

    for (let neighborhood of neighborhoods) {
        map.set(neighborhood, []);
    }

    while (input.length > 0) {
        let current = input.shift().split(' - ');
        let neighborhood = current[0];
        let person = current[1];
        if (neighborhoods.includes(neighborhood)) {
            map.get(neighborhood).push(person);
        }
    }

    let sorted = Array.from(map)
        .sort((a, b) => {return b[1].length - a[1].length;});

    for (let neighborhood of sorted) {
        let neighborhoodName = neighborhood[0];
        let persons = neighborhood[1];
        console.log(`${neighborhoodName}: ${persons.length}`);
        for (let j = 0; j < persons.length; j++) {
            console.log(`--${persons[j]}`);
        }
    }
}
// neighborhoods(['Abbey Street, Herald Street, Bright Mews', 'Bright Mews - Garry', 'Bright Mews - Andrea', 'Invalid Street - Tommy', 'Abbey Street - Billy']);




