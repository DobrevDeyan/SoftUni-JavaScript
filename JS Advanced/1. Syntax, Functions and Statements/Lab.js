function echoFunction(input) {
    console.log(input.length);
    console.log(input);
}
// echoFunction('Hello, JavaScript!');
// echoFunction('strings are easy');



function stringLength(string1, string2, string3) {
    let lengthSum = string1.length + string2.length + string3.length;

    console.log(lengthSum);
    console.log(Math.round(lengthSum/3));
}
// stringLength('chocolate', 'ice cream', 'cake');
// stringLength('pasta', '5', '22.3');



function largestNumber(num1, num2, num3) {
    let largestNum;

    if (num1 > num2 && num1 > num3) {
        largestNum = num1;
    } else if (num2 > num1 && num2 > num3) {
        largestNum = num2;
    } if (num3 > num1 && num3 > num2) {
        largestNum = num3;
    }

    console.log(`The largest number is ${largestNum}.`)
}
// largestNumber(5, -3, 16);
// largestNumber(-3, -5, -22.5);



function circleArea(input) {
    if (typeof(input) === 'number') {
        let area = Math.PI*(Math.pow(input, 2));
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`)
    }
}
// circleArea(5);
// circleArea('name');



function mathOperations(num1, num2, string) {
    let result;

    switch (string) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }
    console.log(result);
}
// mathOperations(5, 6, '+');
// mathOperations(3, 5.5, '*');



function sumOfNumbers(n, m) {
    let firstNumber = Number(n);
    let secondNumber = Number(m);
    let result = 0;

    for (let i = firstNumber; i <= secondNumber; i++) {
        result += i;
    }
    return result;
}
// sumOfNumbers('1', '5' );
// sumOfNumbers('-8', '20');



function daysOfWeek(input) {
    if (input === 'Monday') {
        return 1;
    } else if (input === 'Tuesday') {
        return 2;
    } else if (input === 'Wednesday') {
        return 3;
    } else if (input === 'Thursday') {
        return 4;
    } else if (input === 'Friday') {
        return 5
    } else if (input === 'Saturday') {
        return 6;
    } else if (input === 'Sunday') {
        return 7;
    } else {
        return 'error';
    }
}
// daysOfWeek('Monday');
// daysOfWeek('Friday');
// daysOfWeek('Invalid');



function squareOfStars(input) {
    if (input !== undefined) {
        let subject = Number(input);
        for (let i = 1; i <= subject; i++) {
            let result = "";
            for (let j = 1; j <= subject; j++) {
                result += '*' + ' ';
            }
            console.log(result);
        }
    } else {
        let subject = 5;
        for (let i = 1; i <= subject; i++) {
            let result = "";
            for (let j = 1; j <= subject; j++) {
                result += '*' + ' ';
            }
            console.log(result);
        }
    }
}
// squareOfStars(1);
// squareOfStars(2);
// squareOfStars(5);
// squareOfStars();



function aggregateElements(inputArray) {
    let sum = 0;
    let sumInverse = 0;
    let concatenated = '';

    for (let inputElement of inputArray) {
        sum += inputElement;
        sumInverse += 1/Number(inputElement);
        concatenated += inputElement;
    }
    console.log(sum);
    console.log(sumInverse);
    console.log(concatenated);
}
// aggregateElements([1, 2, 3]);
// aggregateElements([2, 4, 8, 16]);



