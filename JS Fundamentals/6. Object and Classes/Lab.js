function personInfo(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
    return person;
}
// console.log(personInfo("Peter", "Pan", "20"));



function city(object) {
    for (let objectElement of Object.keys(object)) {
        console.log(objectElement, "->", object[objectElement]);
    }
}
// city({name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000"});



function convertObject(string) {
    let person = JSON.parse(string);

    for (let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }
}
// convertObject('{"name": "George", "age": 40, "town": "Sofia"}');



function convertJson(name, lastName, hairColor) {
    let object = {
        name,
        lastName,
        hairColor
    }
    console.log(JSON.stringify(object));
}
// convertJson('George', 'Jones', 'Brown');



function cats(catsAsStrings) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    for (let catData of catsAsStrings) {
        let [name, age] = catData.split(' ');

        let cat = new Cat(name, age);
        cats.push(cat);
    }

    for (let cat of cats) {
        cat.meow();
    }
}
// cats(['Mellow 2', 'Tom 5']);



function getSong(input) {
    class Song {
        constructor (type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = input.shift();
    let typeSong = input.pop();

    for (let i = 0; i < numberOfSongs; i ++) {
        let [type, name, time] = input[i].split("_");
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeSong === "all") {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}
// getSong([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
// getSong([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
// getSong([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);

