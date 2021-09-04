function problemOne(array) {
    let budget = array[0];
    let students = array[1];
    let flourPricePerPackage = array[2];
    let eggPricePerEgg = array[3];
    let pricePerApron = array[4];
    let neededPrice = 0;
    let freePackages = 0;

    for (let i = 1; i < students + 1; i++) {
        if (i % 5 === 0) {
            freePackages++;
        }
    }

    neededPrice = pricePerApron * (students + Math.ceil(students * 0.2)) + (eggPricePerEgg * 10 * students) + flourPricePerPackage * (students - freePackages);

    if (neededPrice <= budget) {
        console.log(`Items purchased for ${neededPrice.toFixed(2)}$.`);
    } else {
        console.log(`${(neededPrice-budget).toFixed(2)}$ more needed.`);
    }


    console.log(pricePerApron * (students + Math.ceil(students * 0.2)));
    console.log((eggPricePerEgg * 10 * students));
    console.log((flourPricePerPackage * (students - freePackages)));
    console.log(freePackages);
}
// problemOne([50, 2, 1.0, 0.10, 10.0]);
// problemOne([100, 25, 4.0, 1.0, 6.0]);
// problemOne([40, 2, 1.0, 0.10, 10.0]);



function problemTwo(arrayString) {
    let numbers = arrayString.shift().split(" ").map(Number);

    for (let i = 0; i < arrayString.length; i++) {
        let [command, number, replacement] = arrayString[i].split(" ");

        number = Number(number);
        replacement = Number(replacement);

        if (command === "Finish") {
            // console.log(numbers.join(" "));
            break;
        }

        switch (command) {
            case "Add":
                numbers.push(number);
                break;
            case "Remove":
                // if (numbers.includes(number)) {
                numbers.splice(numbers.indexOf(number), 1);
                // }
                break;
            case "Replace":
                // if (numbers.includes(number)) {
                numbers.splice(numbers.indexOf(number), 1, replacement);
                // }
                break;
            case "Collapse":
                // console.log(numbers)
                // for (let i = 0; i < numbers.length; i++) {
                //     if (numbers[i] < number) {
                //         numbers.splice(numbers.indexOf(numbers[i]), 1);
                //     }
                // }
                numbers = numbers.filter(x => x >= number);
                break;
        }
    }
    console.log(numbers.join(" "));
}
// problemTwo(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
// problemTwo(["-3 -2 20 -1 -10", "Collapse 8", "Finish"]);
// problemTwo(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);



function problemThree(array) {
    let chat = [];

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(" ");
        let command = tokens[0];
        let message = tokens[1];
        let newMessage = tokens[2];

        if (command === "end") {
            break;
        }

        if (command === "Chat") {
            chat.push(message);
        }

        if (command === "Delete") {
            if (chat.includes(message)) {
                chat.splice(chat.indexOf(message), 1);
            }
        }

        if (command === "Edit") {
            if (chat.includes(message)) {
                chat.splice(chat.indexOf(message), 1, newMessage);
            }
        }

        if (command === "Pin") {
            if (chat.includes(message)) {
                chat.push(chat.splice(chat.indexOf(message), 1));
            }
        }

        if (command === "Spam") {
            let spammed = [...tokens];
            for (let i = 1; i < spammed.length; i++) {
                chat.push(spammed[i]);
            }
        }
    }
    console.log(chat.join("\n"));
}
// problemThree(["Chat Hello", "Chat darling", "Edit darling Darling", "Spam how are you", "Delete Darling", "end"]);
// problemThree(["Chat John", "Spam Let's go to the zoo", "Edit zoo cinema", "Chat tonight", "Pin John", "end"]);
