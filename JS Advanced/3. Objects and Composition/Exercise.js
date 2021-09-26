function calorieObject(input) {
    const object = {};

    for (let i = 0; i < input.length; i+=2) {
        object[input[i]] = Number(input[i + 1]);
    }

    console.log(object);
}
// calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);



function constructionCrew(workerObject) {
    let dizzinessAmount = 0.1 * workerObject.weight * workerObject.experience;

    if (workerObject.dizziness === true) {
        workerObject.levelOfHydrated = workerObject.levelOfHydrated + dizzinessAmount;
        workerObject.dizziness = false;
    }

    return workerObject;
}
// constructionCrew({ weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true });
// constructionCrew({ weight: 120,
//     experience: 20,
//     levelOfHydrated: 200,
//     dizziness: true });
// constructionCrew({ weight: 95,
//     experience: 3,
//     levelOfHydrated: 0,
//     dizziness: false });



function carFactory(object) {
    const result = {};

    function getEngine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 };
        } else if (power <= 120) {
            return { power: 120, volume: 2400 };
        } else {
            return { power: 200, volume: 3500};
        }
    }

    function getWheels(wheelSize) {
        if (wheelSize % 2 === 0) {
            wheelSize = wheelSize -1;
        }
        const wheelsArray = [];

        for (let i = 0; i < 4; i++) {
            wheelsArray.push(wheelSize);
        }

        return wheelsArray;
    }

    result.model = object.model;
    result.engine = getEngine(object.power);
    result.carriage = {type: object.carriage, color: object.color};
    result.wheels = getWheels(object.wheelsize);
    // result.wheels = new Array(4).fill(wheelSize, 0, 4);

    return result;
    // console.log(result);
}
// carFactory({ model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14 });
// carFactory({ model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17 });



function heroicInventory(stringArray) {
    const heroesRegister = [];

    for (let string of stringArray) {
        let [name, level, items] = string.split(' / ');
        level = Number(level);
        // items = items ? items.split(', ') : [];

        let heroObject = {
            name,
            level,
            items,
        };

        if (heroObject.items !== undefined) {
            heroObject.items = heroObject.items.split(', ');
        } else {
            heroObject.items = [];
        }

        heroesRegister.push(heroObject);
    }
    console.log(JSON.stringify(heroesRegister));
}
// heroicInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'])3// heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);



function lowestPricesCities(stringArray) {
    const productsData = {};

    for (let string of stringArray) {
        const [town, product, price] = string.split(' | ');

        if (productsData[product] === undefined) {
            productsData[product] = {};
        }

        productsData[product][town] = Number(price);
    }

    for (let [product, towns] of Object.entries(productsData)) {
        const sorted = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        const [town, price] = sorted[0];

        console.log(`${product} -> ${price} (${town})`);
    }
}
// lowestPricesCities(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10']);



function storageCatalogue(stringArray) {
    const productObject = {};

    for (let string of stringArray) {
        let [product, price] = string.split(' : ');
        price = Number(price);
        const index = product[0];

        if (!productObject[index]) {
             productObject[index] = {};
        }
        productObject[index][product] = price;
    }

    let initialSort = Object.keys(productObject).sort((a, b) => a.localeCompare(b));

    for (const key of initialSort) {
        let products = Object.entries(productObject[key]).sort((a, b) => a[0].localeCompare(b[0]));

        console.log(key);
        products.forEach((el) => {
            console.log(`  ${el[0]}: ${el[1]}`);
        });
    }
}
// storageCatalogue(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']);
// storageCatalogue(['Banana : 2',
//     'Rubic\'s Cube : 5',
// 'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10']);



function townsJson(stringArray) {
    const result = [];

    const splitted = stringArray[0].split('|');
    const town = splitted[1].trim();
    const latitude = splitted[2].trim();
    const longitude = splitted[3].trim();

    for (let i = 1; i < stringArray.length; i++) {
        const obj = {};
        const splittedEntry = stringArray[i].split('|');

        obj[town] = splittedEntry[1].trim();
        obj[latitude] = Number(Number(splittedEntry[2].trim()).toFixed(2));
        obj[longitude] = Number(Number(splittedEntry[3].trim()).toFixed(2));
        result.push(obj);

    }
    return JSON.stringify(result);
}
// townsJson(['| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |']);
// townsJson(['| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |']);



function rectangle(width, height, color) {
   return {
       width,
       height,
       color: color[0].toUpperCase() + color.slice(1, color.length),
       calcArea: () => {
         return width * height;
       },
   }
}
// let rect = rectangle(4, 5, 'red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());



function heroes() {
    let fighter = (name) => {
      return {
          name,
          health: 100,
          stamina: 100,
          fight() {
            this.stamina -= 1;
            console.log(`${name} slashes at the foe!`);
          }
      }
    };

    let mage = (name) => {
        return {
            name,
            health: 100,
            mana: 100,
            cast(spellName) {
                this.mana -= 1;
                console.log(`${name} cast ${spellName}`);
            }
        }
    };

    return {fighter: fighter, mage: mage};
}
// let create = heroes();
// const scorcher = create.mage("Scorcher");
// scorcher.cast("fireball")
// scorcher.cast("thunder")
// scorcher.cast("light")
//
// const scorcher2 = create.fighter("Scorcher2");
// scorcher2.fight()
//
// console.log(scorcher2.stamina);
// console.log(scorcher.mana);






























