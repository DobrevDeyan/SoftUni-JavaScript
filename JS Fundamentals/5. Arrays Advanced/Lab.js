function sumOfFirstLast(array) {
    console.log(Number(array.shift()) + Number(array.pop()));
}
// sumOfFirstLast(['20', '30', '40']);
// sumOfFirstLast(['5', '10']);



function negativeOrPositive(array) {
    let result = [];
    for (let arrayElement of array) {
        if (arrayElement < 0) {
            result.unshift(arrayElement);
        } else {
            result.push(arrayElement);
        }
    }
    console.log(result.join(" "));
}
// negativeOrPositive([7, -2, 8, 9]);
// negativeOrPositive([3, -2, 0, -1]);



function firstLastKNums(array) {
    // let k = array.shift();
    // console.log(array.slice(0, k).join(" "));
    // console.log(array.slice(array.length - k, array.length).join(" "))

    // let k = array.shift();
    // let forward = [];
    // for (let i = 0; i < k; i++) {
    //     forward.push(array[i]);
    // }
    // let backwards = [];
    // for (let i = array.length - k; i < array.length; i++) {
    //     backwards.push(array[i]);
    // }
    // console.log(forward.join(" "));
    // console.log(backwards.join(" "));

    let k = array[0];
    let forward = array.slice(1, k + 1);
    let backwards = array.slice(array.length - k);
    console.log(forward.join(" "));
    console.log(backwards.join(" "));
}
// firstLastKNums([2, 7, 8, 9]);
// firstLastKNums([3, 6, 7, 8, 9]);



function lastKNumberSequence(n, k) {
    // let sequence = [1];
    // for (let current = 1; i < n; current++) {
    //     let start = Math.max(0, current - k);
    //     let end = current - 1;
    //     sequence[current] = start + end;
    // }
    // console.log(sequence.join(" "));

    let sequence = [1];
    for (let i = 1; i < n; i++ ) {
        let element = sequence.slice(-k); // k елемента от края което е - k.
        let current = 0;
        for (let number of element) {
            current += number;
        }
        sequence.push(current);
    }
    console.log(sequence.join(" "));
}
// lastKNumberSequence(6, 3);
// lastKNumberSequence(8, 2);



function processOddNumbers(array) {
    let predicate = (x, i) => i % 2 === 1;
    let filtered  = array.filter(predicate);

    let operation = x => x * 2;
    let mapped =  filtered.map(operation)
    console.log(mapped.reverse().join(" "));

    // let processOddNumbers = (array) => array.filter((x, i) => i % 2 === 1).map(x => x * 2).reverse().join(" ");
}
// processOddNumbers([10, 15, 20, 25]);
// processOddNumbers([3, 0, 10, 4, 7, 3]);



function smallestTwoNumbers(array) {
    array.sort((a, b) => a - b);
    let result = array.slice(0, 2);
    result = result.join(" ");
    console.log(result);
}
// smallestTwoNumbers([30, 15, 50, 5]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);



function listOfProducts(array) {
    let sorted = array.sort();
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`)
    }
}
// listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);



function arrayManipulation(array) {
    let arr = array.shift().split(" ").map(Number);
    for (let i = 0; i < array.length; i++) {
        let [command, firstNumber, secondNumber] = array[i].split(" ");

        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

        switch (command) {
            case "Add":
                add(firstNumber);
                break;
            case "Remove":
                remove(firstNumber);
                break;
            case "RemoveAt":
                removeAt(firstNumber);
                break;
            case "Insert":
                insertAt(firstNumber, secondNumber);
                break;
        }
    }

    function add(el) {
        arr.push(el);
    }

    function remove(num) {
        arr = arr.filter(el => el !== num);
    }

    function removeAt(index) {
        arr.splice(index, 1);
    }

    function insertAt(num, index) {
        arr.splice(index, 0, num);
    }

    console.log(arr.join(" "));
}
// arrayManipulation(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);





