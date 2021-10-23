class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500}
        this.listOfParticipants = []
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            console.error('Unsuccessful registration at the camp.')
        }

        for (var i=0; i<this.listOfParticipants.length; i++) {
            if (this.listOfParticipants[i].name == name) {
                return 'The '+ name +' is already registered at the camp'
            }
        }

        if (parseInt(money, 10) < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.'
        } else {
            this.listOfParticipants.push({
                name: name,
                condition: condition,
                power: 100,
                wins: 0
            })

            return 'The '+ name +' was successfully registered.'
        }
    }

    unregisterParticipant(name) {
        for (var i=0; i<this.listOfParticipants.length; i++) {
            if (this.listOfParticipants[i].name == name) {
                this.listOfParticipants.splice(i, 1)
                return 'The '+ name +' removed successfully.'
            }
        }

        throw new Error('The '+ name +' is not registered in the camp.');

    }

    getParticipant(name) {
        for (var i=0; i<this.listOfParticipants.length; i++) {
            if (this.listOfParticipants[i].name == name) {
                return this.listOfParticipants[i]
            }
        }

        return false
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        var participant1Obj = this.getParticipant(participant1)
        var participant2Obj = false

        if (participant2) {
            participant2Obj = this.getParticipant(participant2)
        }

        if (!participant1Obj || (participant2 && !participant2Obj)) {
            console.error('Invalid entered name/s.')
            return
        }

        if (participant2 && (participant1Obj.condition != participant2Obj.condition)) {
            console.error('Choose players with equal condition.')
            return
        }

        if (typeOfGame == 'WaterBalloonFights') {
            if (!participant1 || !participant2) {
                console.error('Game WaterBalloonFights requires two players.')
                return
            }

            if (participant1Obj.power > participant2Obj.power) {
                participant1Obj.wins++
                return 'The '+ participant1 + ' is winner in the game '+ typeOfGame +'.'
            }

            if (participant1Obj.power < participant2Obj.power) {
                participant2Obj.wins++
                return 'The '+ participant2 + ' is winner in the game '+ typeOfGame +'.'
            }

            if (participant1Obj.power == participant2Obj.power) {
                return 'There is no winner.'
            }
        }
        if (typeOfGame == 'Battleship') {
            participant1Obj.power += 20
            return 'The '+ participant1 +' successfully completed the game '+ typeOfGame +'.'
        }
    }

    toString() {
        var result = ''
        result += this.organizer + ' will take '+ this.listOfParticipants.length +' participants on camping to '+ this.location +'\n'
        this.listOfParticipants.sort(function(a, b) {
            if (a.wins > b.wins) {
                return -1
            }
            return 1
        })

        for (var i=0; i<this.listOfParticipants.length; i++) {
            result += this.listOfParticipants[i].name +' - '+this.listOfParticipants[i].condition +' - '+this.listOfParticipants[i].power +' - '+this.listOfParticipants[i].wins + '\n'
        }

        return result
    }
}

//
// class SummerCamp {
//     constructor(organizer, location) {
//         this.organizer = organizer,
//             this.location = location,
//             this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 },
//             this.listOfParticipants = [];
//     }
//
//     registerParticipant(name, condition, money) {
//         if (this.priceForTheCamp.hasOwnProperty(condition) == false) {
//             throw new Error('Unsuccessful registration at the camp.');
//         } else if (this.listOfParticipants.some(p => p.name == name)) {
//             return `The ${name} is already registered at the camp.`;
//         } else if (money < this.priceForTheCamp[condition]) {
//             return `The money is not enough to pay the stay at the camp.`;
//         }
//
//         this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
//
//         return `The ${name} was successfully registered.`;
//     }
//
//     unregisterParticipant(name) {
//         if (this.listOfParticipants.some(p => p.name == name) == false) {
//             throw new Error(`The ${name} is not registered in the camp.`);
//         }
//
//         const person = this.listOfParticipants.some(p => p.name == name);
//         this.listOfParticipants.splice(person, 1);
//
//         return `The ${name} removed successfully.`;
//
//     }
//
//     timeToPlay(typeOfGame, participant1, participant2) {
//         let gamerOne = this.listOfParticipants.find(g => g.name == participant1);
//
//         if (!gamerOne) {
//             throw new Error(`Invalid entered name/s.`);
//         }
//
//         if (typeOfGame == 'Battleship') {
//             gamerOne.power += 20;
//             return `The ${gamerOne.name} successfully completed the game ${typeOfGame}.`;
//         }
//
//         if (typeOfGame == 'WaterBalloonFights') {
//
//             let gamerTwo = this.listOfParticipants.find(g => g.name == participant2);
//
//             if (!gamerOne || !gamerTwo) {
//                 throw new Error(`Invalid entered name/s.`);
//             } else if (gamerOne.condition != gamerTwo.condition) {
//                 throw new Error('Choose players with equal condition.');
//             }
//
//             if (gamerOne.power > gamerTwo.power) {
//                 gamerOne.wins++;
//                 return `The ${gamerOne.name} is winner in the game ${typeOfGame}.`;
//             } else if (gamerOne.power < gamerTwo.power) {
//                 gamerTwo.wins++;
//                 return `The ${gamerTwo.name} is winner in the game ${typeOfGame}.`;
//             } else {
//                 return `There is no winner.`;
//             }
//         }
//     }
//
//     toString() {
//         let result = [];
//         result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
//         const sortedList = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
//         for (let player of sortedList) {
//             result.push(`${player.name} - ${player.condition} - ${player.power} - ${player.wins}`);
//         }
//
//         return result.join('\n');
//     }
// }



// class SummerCamp{
//     constructor(organizer, location){
//         this.organizer = organizer;
//         this.location = location;
//         this.priceForTheCamp = {
//             child: 150,
//             student: 300,
//             collegian: 500
//         };
//         this.listOfParticipants = [];
//     }
//
//     registerParticipant (name, condition, money){
//         if (condition !== 'child' && condition !== 'student' && condition !== 'collegian') {
//             throw new Error('Unsuccessful registration at the camp.');
//         }
//         if (this.listOfParticipants.some(partic => partic.name == name)) {
//             return `The ${name} is already registered at the camp.`;
//         }
//
//         let price = -1;
//
//         if (condition == 'child') {
//             price = this.priceForTheCamp.child;
//         }
//         else if (condition == 'student') {
//             price = this.priceForTheCamp.student;
//         }
//         else if (condition == 'collegian') {
//             price = this.priceForTheCamp.collegian;
//         }
//
//         if (Number(money) < price) {
//             return `The money is not enough to pay the stay at the camp.`;
//         }
//
//         let participan = {
//             name: name,
//             condition: condition,
//             power: 100,
//             wins: 0
//         };
//
//         this.listOfParticipants.push(participan);
//
//         return  `The ${participan.name} was successfully registered.`
//     }
//
//     unregisterParticipant (name){
//         if (!this.listOfParticipants.some(p => p.name == name)) {
//             throw new Error(`The ${name} is not registered in the camp.`)
//         }
//
//         this.listOfParticipants = removeByAttr(this.listOfParticipants, 'name', name);
//
//         function removeByAttr(arr, attr, value){
//             var i = arr.length;
//             while(i--){
//                 if( arr[i]
//                     && arr[i].hasOwnProperty(attr)
//                     && (arguments.length > 2 && arr[i][attr] === value ) ){
//
//                     arr.splice(i,1);
//
//                 }
//             }
//             return arr;
//         }
//
//         return `The ${name} removed successfully.`;
//     }
//
//     timeToPlay (typeOfGame, participant1, participant2){
//         if (typeOfGame == 'WaterBalloonFights') {
//
//             let player1 = this.listOfParticipants.find(p => p.name == participant1);
//             let player2 = this.listOfParticipants.find(p => p.name == participant2);
//
//             if (!player1 || !player2) {
//                 throw new Error('Invalid entered name/s.')
//             }
//
//             if (player1.condition != player2.condition) {
//                 throw new Error('Choose players with equal condition.');
//             }
//
//             if (player1.power > player2.power) {
//                 player1.wins += 1;
//                 return  `The ${player1.name} is winner in the game ${typeOfGame}.`
//             }
//             if (player1.power < player2.power) {
//                 player2.wins += 1;
//                 return  `The ${player2.name} is winner in the game ${typeOfGame}.`
//             }
//             else {
//                 return `There is no winner.`;
//             }
//         }
//         else if(typeOfGame == 'Battleship'){
//             let player1 = this.listOfParticipants.find(p => p.name == participant1);
//
//             if (!player1) {
//                 throw new Error('Invalid entered name/s.')
//             }
//
//             player1.power += 20;
//
//             return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
//         }
//     }
//
//     toString () {
//
//         this.listOfParticipants.sort((a, b) => b.power - a.power);
//
//         let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
//
//         for (let index = 0; index < this.listOfParticipants.length; index++) {
//             const player = this.listOfParticipants[index];
//             result += `${player.name} - ${player.condition} - ${player.power} - ${player.wins}\n`
//         }
//
//         return result.trim();
//     }
// }

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// EXPECTED OUTPUT 1

//The money is not enough to pay the stay at the camp.
// The Petar Petarson was successfully registered.
// The Petar Petarson is already registered at the camp.
// Uncaught Error: Unsuccessful registration at the camp.

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// EXPECTED OUTPUT 2

//The Petar Petarson was successfully registered.
// Uncaught Error: The Petar is not registered in the camp.
// The Petar Petarson removed successfully.

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// EXPECTED OUTPUT 3

// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.

//const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
// console.log(summerCamp.toString());

// EXPECTED OUTPUT 4

//The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.
// Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Petar Petarson - student - 120 - 1
// Sara Dickinson - child - 100 - 0
// Dimitur Kostov - student - 100 - 0