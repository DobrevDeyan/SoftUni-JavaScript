function train(array) {
    let train = array.shift().split(" ").map(Number); // или .map((x) => Number(x)) за превръщане в число.
    let capacity = Number(array.shift());

    for (let commands of array) {
        let tokens = commands.split(" ");

        if (tokens[0] === "Add") {
            let passengers = Number(tokens[1])
            train.push(passengers);
        } else {
            let passengers = Number(tokens[0]);

            for(let i = 0; i < train.length; i++) {
                if (train[i] + passengers <= capacity) {
                    train[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(train.join(" "));
}
// train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
// train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);



function distinctArray (array) {
   let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) {
            result.push(array[i]);
        }
    }
   console.log(result.join(" "));
}
// distinctArray([1, 2, 3, 4]);
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
// distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);



function houseParty (array) {
    let resultList = [];

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(" ");
        let token1 = tokens[0];
        let token2 = tokens[2];
        if (token2 === "going!") {
            if (resultList.includes(token1)){
                console.log(`${token1} is already in the list!`);
            } else {
                resultList.push(token1);
            }
        } else {
            if (!resultList.includes(token1)) {
                console.log(`${token1} is not in the list!`);

            } else {
                resultList = resultList.filter(x => x !== token1);
            }
        }
    }
    console.log(resultList.join("\n"));
}
// houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
// houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);



function sorting (array) {
    let newArray = [];
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let number;

        if (i % 2 === 0) {
            number = Math.max(...array);
        } else {
            number = Math.min(...array);
        }

        newArray.push(number);
        array.splice(array.indexOf(number), 1);
    }
    console.log(newArray.join(" "));
}
// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);



function sortAnArrayByTwoCriteria (array) {
    array.sort((a, b) => a.length-b.length || a.localeCompare(b));
    console.log(array.join("\n"));
}
// sortAnArrayByTwoCriteria(["alpha", "beta", "gamma"]);
// sortAnArrayByTwoCriteria(["Isac", "Theodor", "Jack", "Harrison", "George"]);



function bombNumbers (array1, array2) {
    let bomb = array2[0];
    let bombPower = array2[1];

    for (let i = 0; i < array1.length; i++) {
        let current = array1[i];

        if(current === bomb) {
            let lowerRange = i - bombPower;
            let bombCount = 1 + (bombPower * 2);

            while (lowerRange < 0) {
                lowerRange++;
                bombCount--;
            }

            array1.splice(lowerRange, bombCount);
            i--;
        }
    }

    let reducer = (a, b) => a + b;
    console.log(array1.reduce(reducer));
}
// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);



function searchNumber (array1, array2) {
    let numbersToTake = array2[0];
    let numberToDelete = array2[1];
    let searchNumber = array2[2];
    let count = 0;

    let newArray = array1.slice(0, numbersToTake);

    newArray.splice(0, numberToDelete);

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === searchNumber) {
            count++;
        }
    }
    console.log(`Number ${searchNumber} occurs ${count} times.`);
}
// searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);



function arrayManipulator (arrayIntegers, arrayCommands) {
    for (let command of arrayCommands) {
        let tokens = command.split(" ");

        if (tokens[0] === "add") {
            let index = Number(tokens[1]);
            let element = Number(tokens[2]);

            arrayIntegers.splice(index, 0, element); // добавя елемент. 0 казва, че няма да се премахва елемент.
        } else if (tokens[0] === "addMany") {
            let index = Number(tokens[1]);

            tokens.splice(0, 2); // почни от нулевия и махи два елемента.
            let numbersToAdd = tokens.map(Number);
            arrayIntegers.splice(index, 0, ...numbersToAdd);
        } else if (tokens[0] === "contains") {
            let result = arrayIntegers.indexOf(Number(tokens[1])); // връща индекса на който е числото ако съществува,

            console.log(result); // ако не го намери ще върне -1.
        } else if (tokens[0] === "remove") {
            let index = Number(tokens[1]);
            arrayIntegers.splice(index, 1);

        } else if (tokens[0] === "shift") {
            let positions = Number(tokens[1]);

            for (let i = 0; i < positions; i++) {
                arrayIntegers.push(arrayIntegers.shift()); // shift взема първия елемент след което го пушваме в края на масива.
            }

        } else if (tokens[0] === "sumPairs") {
            let newArray = [];
            if (arrayIntegers.length % 2 !== 0) {
                arrayIntegers.push(0);
            }

            for (let i = 0; i < arrayIntegers.length - 1; i += 2) {
                let current = arrayIntegers[i];
                let next = arrayIntegers[i + 1];

                let sum = current + next;
                newArray.push(sum);
            }

            arrayIntegers = newArray;
        } else if (tokens[0] === "print") {
            console.log(`[ ${arrayIntegers.join(", ")} ]`)
            return;
        }
    }
}
// arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);



function gladiatorInventory (input) {
    let inventory = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(' ');

        if (commands[0] === "Buy") {
            if (!inventory.includes(commands[1])) {
                inventory.push(commands[1]);
            }
        } else if (commands[0] === "Trash") {
            if (inventory.includes(commands[1])) {
                let index = inventory.indexOf(commands[1]);
                inventory.splice(index, 1);
            }
        } else if (commands[0] === "Repair") {
            if (inventory.includes(commands[1])) {
                let index = inventory.indexOf(commands[1]);
                inventory.splice(index, 1);
                inventory.push(commands[1]);
            }
        } else if (commands[0] === "Upgrade") {
            let upgadeElement = commands[1].split('-');
            if (inventory.includes(upgadeElement[0])) {
                let index = inventory.indexOf(upgadeElement[0]);
                inventory.splice(index + 1, 0, `${upgadeElement[0]}:${upgadeElement[1]}`);
            }
        }
    }
    console.log(inventory.join(' '));
}
// gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
// gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);



function buildWall (array){
    let parsedArr = array.map(Number);
    let dailyConcrete = [];
    let totalConcrete = 0;
    let costs;
    let crews = parsedArr.filter(len => len < 30).length;
    while (crews !== 0) {
        let concreteByAllCrews = 0;
        for (let i = 0; i < parsedArr.length; i++){
            if (parsedArr[i] !== 30) {
                parsedArr[i]++;
                concreteByAllCrews += 195;
                if (parsedArr[i] === 30) {
                    crews--;
                }
            }
        }
        totalConcrete += concreteByAllCrews;
        dailyConcrete.push(concreteByAllCrews);
    }
    costs = totalConcrete * 1900;
    console.log(dailyConcrete.join(", "));
    console.log(`${costs} pesos`);
}
// buildWall([21, 25, 28]);
// buildWall([17]);
// buildWall([17, 22, 17, 19, 17]);





















