function sumDigits(num) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    console.log(sum);
}
// sumDigits(245678);
// sumDigits(97561);
// sumDigits(543);



function charsToString(p1, p2, p3) {
    let result = (p1 + p2 + p3);
    result = result.toString();
    console.log(result);
}
// charsToString("a", "b", "c");
// charsToString('%', '2', 'o');
// charsToString('1', '5', 'p');



function townInfo(name, population, area) {
    console.log(`Town ${name} has population of ${population} and area ${area} square km.`)
}
// townInfo('Sofia', 1286383, 492);



function metersToKilometers(n) {
    let result = n / 1000;
    console.log(result.toFixed(2));
}
// metersToKilometers(1852);
// metersToKilometers(798);



function poundsToDollars(n) {
    let result = n * 1.31;
    console.log(result.toFixed(3));
}
// poundsToDollars(80);
// poundsToDollars(39);



function reservedChars(p1, p2, p3) {
    let str = (p1 + p2 + p3).toString();
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i] + " ";
    }
    console.log(result)
}
// reservedChars('A', 'B', 'C');
// reservedChars('1', 'L', '&');



function lowerUpper(str) {
    if (str >= "A" && str <= "Z") {
        console.log("upper-case");
    } else if (str >= "a" && str <= "z") {
        console.log("lower-case");
    }
}
// lowerUpper("f");
// lowerUpper("L");



function calculator(firstNumber, simbolChar, secondNumber) {
    let result;
    switch (simbolChar) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
    }
    console.log(result.toFixed(2));
}
// calculator(5, '+', 10);
// calculator(25.5, '-', 3);



function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldtPrice, armorPrice){
    let shieldCount = 0;
    let neededMoney = 0;

    for(let i = 1; i <= lostFightsCount; i++ ) {
        if(i % 2 === 0){
            neededMoney += +helmetPrice;
        }
        if(i % 3 === 0){
            neededMoney += +swordPrice;
        }
        if(i % 2 === 0 && i % 3 === 0){
            neededMoney += +shieldtPrice;
            shieldCount++;
        }
        if(shieldCount % 2 === 0 && shieldCount > 0){
            neededMoney += +armorPrice;
            shieldCount = 0;
        }
    }
    console.log(`Gladiator expenses: ${neededMoney.toFixed(2)} aureus`);
}
// gladiatorExpenses(7, 2, 3, 4, 5);
// gladiatorExpenses(23, 12.50, 21.50, 40, 200);



function spiceMustFlow(startingYield) {
    let totalExtract = 0;
    let days = 0;

    while (startingYield >= 100) {
        totalExtract += (startingYield - 26);

        startingYield -= 10;
        days++;
    }

    totalExtract -= 26;
    if (totalExtract < 0) {
        totalExtract = 0;
    }

    console.log(days);
    console.log(totalExtract);
}
// spiceMustFlow(111);