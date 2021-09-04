function addSubtract(arr) {
    let newArray = [];
    let arrSum = 0;
    let newArraySum = 0;
    for (let arrElement of arr) {
        arrSum += arrElement;
        if (arrElement%2===0) {
            arrElement += arr.indexOf(arrElement);
            newArray.push(arrElement);
            newArraySum += arrElement;
        } else {
            arrElement -= arr.indexOf(arrElement);
            newArray.push(arrElement);
            newArraySum += arrElement;
        }
    }
    console.log(newArray);
    console.log(arrSum);
    console.log(newArraySum);
}
// addSubtract([5, 15, 23, 56, 35]);
// addSubtract([-5, 11, 3, 0, 2]);



function commonElements(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                console.log(arr2[i]);
            }
        }
    }
}
// commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
//     ['s', 'o', 'c', 'i', 'a', 'l']);
// commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
//     ['Petar', 10, 'hey', 4, 'hello', '2']);



function mergeArrays(arr1, arr2) {
    let newArray = [];

    for (let  i = 0; i < arr1.length; i++) {
        let firstNumber = arr1[i];
        let secondNumber = arr2[i];

        if (i % 2 === 0 ) {
            let sum = Number(firstNumber) + Number(secondNumber);
            newArray.push(sum);
        } else {
            let result = firstNumber + secondNumber;
            newArray.push(result);
        }
    }
    let finalOutput = newArray.join(" - ");
    console.log(finalOutput);
}
// mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
// mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);



function arrayRotation(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstElement = array[0];

        for (let j = 0; j < array.length - 1; j++) {
            array[j] = array[j + 1];
        }
        let lastIndex = array.length-1;
        array[lastIndex] = firstElement;
    }
    console.log(array.join(" "));
}
// arrayRotation([51, 47, 32, 61, 21], 2);
// arrayRotation([32, 21, 61, 1], 4);
// arrayRotation([2, 4, 15, 31], 5);



function maxNumber(array) {
    let topInteger = [];

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        let isTop = true;

        for (let j = i + 1; j < array.length; j++) {
            let rightNumber = array[j];

            if (rightNumber >= currentNumber) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topInteger.push(currentNumber);
        }
    }
    console.log(topInteger.join(" "));
}
// maxNumber([1, 4, 3, 2]);
// maxNumber([14, 24, 3, 19, 15, 17]);
// maxNumber([41, 41, 34, 20]);
// maxNumber([27, 19, 42, 2, 13, 45, 48]);


function equalSums(arr1) {
    let hasFoundResult = false;
    for (let i = 0; i < arr1.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let leftIndex = 0; leftIndex < i; leftIndex++) {
            let currentNumber = arr1[leftIndex]
            leftSum += currentNumber;
        }

        for (let rightIndex = i + 1; rightIndex < arr1.length; rightIndex++) {
            let currentNumber = arr1[rightIndex];
            rightSum += currentNumber;
        }

        if (leftSum === rightSum) {
            console.log(i);
            hasFoundResult = true;
            break;
        }
    }
    if (!hasFoundResult) {
        console.log("no");
    }
}
// equalSums([1, 2, 3, 3]);
// equalSums([1, 2]);
// equalSums([1]);
// equalSums([1, 2, 3]);
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);



function maxSequence(arr) {
    let longestSequence = [];
    let leftMostIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentEl = Number(arr[i]);
        let currentSequence = [currentEl];

        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = Number(arr[j]);

            if (nextEl === currentEl) {
                currentSequence.push(nextEl)
            } else {
                break;
            }
        }

        if (currentSequence.length > longestSequence.length) {
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        } else if (currentSequence.length === longestSequence.length) {
            let leftmostIndex;
            if (i < leftMostIndex) {
                leftmostIndex = i;
            }
        }
    }
    console.log(longestSequence.join(' '));
}
// maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequence([4, 4, 4, 4]);
// maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);



function magicSum(array, number) {
    for (let i = 0; i < array.length; i ++) {
        let current = Number(array[i]);

        for (let j = i + 1; j < array.length; j++ ) {
            let next = Number(array[j]);
            
            if (next + current === number) {
                console.log(`${current} ${next}`)
            }
        }
    }
}
// magicSum([1, 7, 6, 2, 19, 23], 8);
// magicSum([14, 20, 60, 13, 7, 19, 8], 27);
// magicSum([1, 2, 3, 4, 5, 6], 6);



function dungeonDark(arr){
    let dungeon = arr[0].split('|');
    let health = 100;
    let coins = 0;
    let counterRooms = 0;
    let allCoins = 0;

    for(let i = 0; i < dungeon.length;i++){
        let currentRoom = dungeon[i].split(' ');
        let command = currentRoom[0];
        let num = Number(currentRoom[1]);
        counterRooms++;

        if(command === 'potion'){
            if (health + num > 100) {
                num = 100 - health;
                health = 100;
            } else
            {
                health += num;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);

        }else if(command === 'chest'){
            coins = Number(num);
            allCoins += Number(num);
            console.log(`You found ${coins} coins.`);

        }else{
            health -= Number(num);
            if(health > 0){
                console.log(`You slayed ${command}.`);
            }else{
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${counterRooms}`);
                return;
            }

        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${allCoins}`);
    console.log(`Health: ${health}`);
}
// dungeonDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
// dungeonDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);



function ladybugs(arr) {
    let sizeOfField = arr[0];
    let initialIndexes = arr[1];
    initialIndexes = initialIndexes.split(" ");
    let commands = arr.slice(2);
    let field = [];

    for (let i = 0; i < sizeOfField; i++) {
        field.push(0);
    }

    for (let i = 0; i < initialIndexes.length; i++) {
        let position = Number(initialIndexes[i]);
        if (position > field.length - 1) {
            continue;
        }
        field[position] = 1;
    }

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];
        currentCommand = currentCommand.split(" ");

        let position = Number(currentCommand[0]);
        let direction = currentCommand[1];
        let flyCount = Number(currentCommand[2]);

        if (field[position] === 0
            || position < 0
            || position > field.length - 1) {
            continue;
        }

        field[position] = 0;

        if (flyCount < 0) {
            direction = direction === "right" ? "left" : "right";
            flyCount = Math.abs(flyCount);
        }

        let nextPosition = 0;

        if (direction === "right") {
            nextPosition = position + flyCount;
        } else if (direction === "left") {
            nextPosition = position - flyCount;
        }

        while (field[nextPosition] === 1) {
            if (direction === "right") {
                nextPosition += flyCount;
            } else if (direction === "left") {
                nextPosition -= flyCount;
            }
        }

        if (nextPosition > field.length - 1 || nextPosition < 0) {
            continue;
        }

        field[nextPosition] = 1;
    }

    console.log(field.join(" "));
}
// ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ]);
// ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
// ladybugs([ 5, '3', '3 left 2', '1 left -2']);



















