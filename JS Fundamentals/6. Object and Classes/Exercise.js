function employees(listEmployees){
    for (let employee of listEmployees) {
        let person = {
            name: employee,
            number: employee.length
        };
        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`)
    }
}
// employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);



function towns(townsList){
    for (let townInfo of townsList) {
        let [town, latitude, longitude] = townInfo.split(" | ");

        let townData = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(townData);
    }
}
// towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);



function storeProvision(stockGoods, orderedGoods){
    let store = [];

    for (let i = 0; i < stockGoods.length-1; i+=2) {
        let product = stockGoods[i];
        let quantity = Number(stockGoods[i+1]);
        let productObject = {product, quantity};

        store.push(productObject);
    }

    for (let i  = 0; i < orderedGoods.length-1; i+=2){
        let product = orderedGoods[i];
        let quantity = Number(orderedGoods[i+1]);
        let productObject = {product, quantity};

        let indexOfProduct = store.findIndex(x => x.product === product);

        if(indexOfProduct === - 1) {
            store.push(productObject);
        } else {
            store[indexOfProduct].quantity += quantity;
        }
    }

    for (let product of store) {
        console.log(`${product.product} -> ${product.quantity}`);
    }
}
// storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//     ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);



function movie(list){
    let moviesList = [];

    for (let command of list) {
        if (command.includes("addMovie")) {
            let [addMovieCommand, ...movieName] = command.split(" ");
            let movieNameAsString = movieName.join(" ");
            let movieObject = {
                name: movieNameAsString
            };
            moviesList.push(movieObject);
        } else if (command.includes("directedBy")) {
            let tokens = command.split(" ");
            let movieNameTokens = [];
            let directorNameTokens = [];
            let directedByIndex = tokens.findIndex(x => x === "directedBy");

            for (let i = 0; i < directedByIndex; i++) {
                movieNameTokens.push(tokens[i]);
            }

            for (let i = directedByIndex+1; i < tokens.length; i++) {
                directorNameTokens.push(tokens[i]);
            }

            let name = movieNameTokens.join(" ");
            let director = directorNameTokens.join(" ");

            let movie = moviesList.find(x => x.name === name)
            if (movie) {
                movie.director = director;
            }
        } else {
            let tokens = command.split(" ");
            let date = tokens.pop();
            tokens.pop();
            let name = tokens.join(" ");

            let movie = moviesList.find(x => x.name === name)
            if (movie) {
                movie.date = date;
            }
        }
    }
    for (let movie of moviesList) {
        if (movie.director && movie.date && movie.name) {
            console.log(JSON.stringify(movie));
        }
    }
}
// movie(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen']);



function inventory(heroList){
    let heroes = [];

    for (let i = 0; i < heroList.length; i++) {
        let tokens = heroList[i].split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(", ");

        let heroData = {
            name,
            level,
            items
        };

        heroes.push(heroData);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items.sort((a, b) => a.localeCompare(b)).join(", ")}`)
    }
}
// inventory(["Isacc / 25 / Apple, GravityGun", "Derek / 12 / BarrelVest, DestructionSword", "Hes / 1 / Desolator, Sentinel, Antara"]);



function makeDictionary(array){
    let dictionaryObject = {};

    for (let jsonString of array) {
        let currentObject = JSON.parse(jsonString);
        dictionaryObject = Object.assign(dictionaryObject, currentObject);
    }

    let sortedObject = Object.keys(dictionaryObject);
    sortedObject.sort((a, b) => a.localeCompare(b));

    for (let key of sortedObject) {
        let definition = dictionaryObject[key];
        console.log(`Term: ${key} => Definition: ${definition}`);
    }
}
// makeDictionary([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
// ]);



class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type.toString();
        this.model = model.toString();
        this.parts = parts;
        parts.quality = this.parts["engine"] * this.parts["power"];
        this.fuel = Number(fuel);
    }

    drive(l) {
        this.fuel -= l;
        return this.fuel;
    }
}
let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);

// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);



class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
    }

    get totalCost() {
        return this.storage.reduce((acc, el) => {return acc + el.price * el.quantity}, 0);
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
    }

    getProducts() {
        let output = [];
        this.storage.forEach(product => {
            output.push(JSON.stringify(product));
        })
        return output.join('\n');
    }
}
let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
// console.log(storage.capacity);
// console.log(storage.totalCost);



function orderedCatalogue(array){
    let catalogue = [];
    for (let i = 0; i < array.length; i++) {
        let elements = array[i].split(' : ');
        let product = {
            name: elements[0],
            price: parseFloat(elements[1])
        };
        catalogue.push(product);
    }
    // catalogue.sort((a,b) => a.name > b.name ? 1 : -1);
    catalogue.sort((a,b) => a.name.localeCompare(b.name));

    let currentLetter = '';
    for (const product of catalogue) {
        if (product.name.charAt(0).toUpperCase() === currentLetter){
            console.log(`  ${product.name}: ${product.price}`)
        }else {
            currentLetter = product.name.charAt(0).toUpperCase();
            console.log(currentLetter);
            console.log(`  ${product.name}: ${product.price}`)

        }
    }
}
// orderedCatalogue(['Appricot : 20.4', "Fridge : 1500", "TV : 1499", 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25',
// 'Anti-Bug Spray : 15', 'T-Shirt : 10']);







