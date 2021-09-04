function smallestOfThreeNumbers(n1, n2, n3) {
    return Math.min(n1, n2, n3);
}
// let result = smallestOfThreeNumbers(2, 5, 3);
// let result = smallestOfThreeNumbers(600, 342, 123);
// let result = smallestOfThreeNumbers(25, 21, 4);
// console.log(result);



function addAndSubtract(n1, n2, n3) {
    function sum(n1, n2) {
        return n1 + n2;
    }

    function subtract(n1 ,n2) {
         return n1 - n2;
    }

    let numberSum = sum(n1, n2);
    return subtract(numberSum, n3);
}
// let result = addAndSubtract(23, 6, 10);
// let result = addAndSubtract(1, 17, 30);
// let result = addAndSubtract(42, 58, 100);
// console.log(result);





function charactersInRange(string1, string2) {
    let min = string1.charCodeAt(0);
    let max = string2.charCodeAt(0);

    let firstCharAsNumber = string1.charCodeAt(0);
    let secondCharAsNumber = string2.charCodeAt(0);

    if  (firstCharAsNumber > secondCharAsNumber) {
        min = secondCharAsNumber;
        max = firstCharAsNumber;
    }

    let result = "";

    for (let i = min + 1; i < max; i++) {
        let character = String.fromCharCode(i);
        result += character + " ";
    }
    return result;
}
// let result = charactersInRange('a', 'd');
// let result = charactersInRange('#', ':');
// let result = charactersInRange('C', '#');
// console.log(result);



function oddAndEvenSum(num) {
    let subject = num.toString();
    let currentNumber = 0;
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < subject.length; i++) {
        currentNumber = Number(subject[i]);

         if (currentNumber % 2 === 0) {
             evenSum += currentNumber;
         } else {
             oddSum += currentNumber;
         }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
// let result = oddAndEvenSum(1000435);
// let result = oddAndEvenSum(3495892137259234);
// console.log(result);



function palindromeIntegers(arr) {
    for (let number of arr) {
        let numberToString = number.toString();
        let reverseString = numberToString.split("").reverse().join("");
        console.log(numberToString === reverseString);
    }
}
// let result = palindromeIntegers([123, 323, 421, 121]);
// let result = palindromeIntegers([32, 2 ,232, 1010]);
// console.log(result);



function passwordValidator(password) {
    let longCheck = isLengthBetweenSixAndTen(password);
    let lettersDigitCheck = containsOnlyLettersAndDigits(password);
    let atLeastTwoCheck = atLeastTwoDigits(password);

    if (longCheck && lettersDigitCheck && atLeastTwoCheck) {
        console.log("Password is valid");
    }

    if (!longCheck) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!lettersDigitCheck) {
        console.log("Password must consist only of letters and digits");
    }
    if (!atLeastTwoCheck) {
        console.log("Password must have at least 2 digits");
    }


    function isLengthBetweenSixAndTen(string) {
        return string.length >= 6 && string.length <= 10;
    }

    function containsOnlyLettersAndDigits(string) {
        for (let element of string) {
            let elementCode = element.charCodeAt(0);
            if (!(elementCode >= 48 && elementCode <= 57) && !(elementCode >= 65 && elementCode <= 90)
                && !(elementCode >= 97 && elementCode <= 122)) {
                return false;
            }
        }
        return true;
    }

    function atLeastTwoDigits(string) {
        let counter = 0;
        for (let element of string) {
            let elementCode = element.charCodeAt(0);
            if (elementCode >= 48 && elementCode <= 57) {
                counter ++;
            }
        }
        return counter >= 2;
    }
}
// passwordValidator('logIn');
// passwordValidator('MyPass123');
// passwordValidator('Pa$s$s');



function nxnMatrix(number) {
    for (let rows = 0; rows < number; rows++) {
        let row = "";
        for (let columns = 0; columns < number; columns++) {
            row += `${number} `;
        }
        console.log(row);
    }
}
// nxnMatrix(3);
// nxnMatrix(7);
// nxnMatrix(2);



function perfectNumber(number) {
    let divisorsSum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            divisorsSum += i;
        }
    }

    if (divisorsSum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
// perfectNumber(6);
// perfectNumber(28);
// perfectNumber(1236498);



function loadingBar(number) {
    let percentages = '%'.repeat(number / 10);
    let dots = '.'.repeat(10 - number / 10);
    if (number === 100) {
        console.log(`${number}% Complete!`);
        console.log(`[${percentages}]`);
    } else {
        console.log(`${number}% [${percentages}${dots}]`);
        console.log(`Still loading ...`);
    }
}
// loadingBar(30);
// loadingBar(50);
// loadingBar(100);



function factorialDivision(n1, n2) {
    let n1factorial = 1;
    let n2factorial = 1;

    for (let i = 1; i <= n1; i++) {
        n1factorial *= i;
    }
    for (let i = 1; i <= n2; i++) {
        n2factorial *= i;
    }

    let result = n1factorial/n2factorial;
    console.log(result.toFixed(2));
}
// factorialDivision(5, 2);
// factorialDivision(6, 2);



























