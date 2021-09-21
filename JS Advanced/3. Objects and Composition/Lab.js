function cityRecord(name, population, treasury) {
    let island = {
        name,
        population,
        treasury
    };
    return island;
}
// cityRecord('Tortuga', 7000, 15000);
// cityRecord('Santo Domingo', 12000, 23500);



function townPopulation(arr) {
    let towns = {};
    for (let i = 0; i < arr.length; i++) {
        let [name, population] = arr[i].split(' <-> ');
        population = Number(population);
        if (towns.hasOwnProperty(name)) {
            population += towns[name];
        }
        towns[name] = population;
    }

    // let result = Object.entries(towns);
    // for (let resultElement of result) {
    //     console.log(`${resultElement[0]} : ${resultElement[1]}`);
    // }
    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`)
    }

    // const parsedData = arr.reduce((a, b) => {
    //     const [name, population] = b.split(" <-> ")
    //     a[name] = (a[name] || 0) + Number(population)
    //     return a
    // }, {})
    //
    // return Object.entries(parsedData)
    //     .map(x => `${x[0]} : ${x[1]}`)
    //     .join("\n")
}
// townPopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);
// townPopulation(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']);



function cityTaxes(name, population, treasury) {
    const result = {
        name,
        population,
        treasury,
        taxRate : 10,
        collectTaxes() {
            this.treasury += Math.round(this.population * this.taxRate);
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * (percent / 100));
        },
        applyRecession(percent) {
            this.treasury -= Math.ceil(this.treasury * (percent / 100));
        }
    };
    return result;

    // class City {
    //     constructor(n, p, t) {
    //         this.name = n
    //         this.population = p
    //         this.treasury = t
    //         this.taxRate = 10
    //     }
    //
    //     collectTaxes = () => Math.round((this.treasury += this.population * this.taxRate))
    //     applyGrowth = p => Math.round((this.population += (this.population * p) / 100))
    //     applyRecession = p => Math.round((this.treasury -= (this.treasury * p) / 100))
    // }
    //
    // return new City(n, p, t)
}
// const tortuga = cityTaxes('Tortuga', 7000, 15000);
// console.log(tortuga);
// tortuga.collectTaxes();
// console.log(tortuga);
// tortuga.applyGrowth(5);
// console.log(tortuga);
// tortuga.applyRecession(10);



function objectFactory(library, orders) {
    // return orders.reduce((a, v) => {
    //     const temp = {}
    //     temp.name = v.template.name
    //     v.parts.forEach(x => {
    //         temp[x] = library[x]
    //     })
    //     a.push(temp)
    //     return a
    // }, [])


    //     a.push({
    //         name: v.template.name,
    //         ...v.parts.reduce((a1, v1) => {
    //             a1[v1] = library[v1]
    //             return a1
    //         }, {}),
    //     })
    //     return a
    // }, [])

    return orders.map(compose);

    function compose(order) {
        const result = Object.assign({}, order.template);

        for (let part of order.parts) {
            result[part] = library[part];
        }

        return result;
    }
}
// const library = {
//     print: function () {
//         console.log(`${this.name} is printing a page`);
//     },
//     scan: function () {
//         console.log(`${this.name} is scanning a document`);
//     },
//     play: function (artist, track) {
//         console.log(`${this.name} is playing '${track}' by ${artist}`);
//     },
// };
// const orders = [
//     {
//         template: { name: 'ACME Printer'},
//         parts: ['print']
//     },
//     {
//         template: { name: 'Initech Scanner'},
//         parts: ['scan']
//     },
//     {
//         template: { name: 'ComTron Copier'},
//         parts: ['scan', 'print']
//     },
//     {
//         template: { name: 'BoomBox Stereo'},
//         parts: ['play']
//     },
// ];
// const products = objectFactory(library, orders);
// console.log(products);



function createAssemblyLine() {
    return {
        hasClima: (car) => {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp--;
                }
            };
        },

        hasAudio: (car) => {
            car.currentTrack = {'name': '', 'artist': ''};
            car.nowPlaying = () => {
                if (car.currentTrack !== null) {
                    console.log(`Now playing ${car.currentTrack.name} by ${car.currentTrack.artist}`)
                }
            };
        },

        hasParktronic: (car) => {
            car.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            };
        },
    }
}
// const assemblyLine = createAssemblyLine();
// const myCar = {
//     make: 'Toyota',
//     model: 'Avensis'
// };
// //
// assemblyLine.hasClima(myCar);
// console.log(myCar.temp);
// myCar.tempSettings = 18;
// myCar.adjustTemp();
// console.log(myCar.temp);
// //
// assemblyLine.hasAudio(myCar);
// myCar.currentTrack = {
//     name: 'Never Gonna Give You Up',
//     artist: 'Rick Astley'
// };
// myCar.nowPlaying();
// //
// assemblyLine.hasParktronic(myCar);
// myCar.checkDistance(0.4);
// myCar.checkDistance(0.2);
// //
// console.log(myCar);



function jsonHtml(string) {
    const parsed = JSON.parse(string)
    const escapeChar = w =>
        `${w}`
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
    const makeRow = (tag, data) =>
        `<tr>${data.map(x => `<${tag}>${escapeChar(x)}</${tag}>`).join("")}</tr>`

    return `<table>
${makeRow("th", Object.keys(parsed[0]))}
${parsed.map(x => makeRow("td", Object.values(x))).join("\n")}
</table>`
}







































