function concatenateNames(name1, name2, delimiter) {
    console.log(`${name1}${delimiter}${name2}`)
}
// concatenateNames("John", "Smith", "->");
// concatenateNames('Jan', 'White', '<->');
// concatenateNames('Linda', 'Terry', '=>');



function rightPlace(string, char, string2) {
    let result = string.replace("_", char);
    if (result === string2) {
        console.log("Matched")
    } else {
        console.log("Not Matched")
    }
}
// rightPlace('Str_ng', 'I', 'Strong');
// rightPlace('Str_ng', 'i', 'String');



function integerAndFloat(n1, n2, n3) {
    let result = n1 + n2 + n3;
    if (result % 1 === 0) {
        console.log(`${result} - Integer`)
    } else {
        console.log(`${result} - Float`)
    }
}
// integerAndFloat(9, 100, 1.1);
// integerAndFloat(100, 200, 303);



function amazingNumbers(num) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    let result = sum.toString().includes("9");
    if (result) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
// amazingNumbers(1233);
// amazingNumbers(999);



function gramophone(band, album, song) {
    let time = (album.length * band.length) * song.length / 2;
    let rotations = Math.ceil(time / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}
// gramophone('Black Sabbath', 'Paranoid', 'War Pigs');



function fuelMoney(distance, passengers, priceLiter) {
    let fuelInscrease = passengers * 0.100;
    let fuel = (distance / 100) * (7 + fuelInscrease);
    let neededMoney = fuel * priceLiter;

    console.log(`Needed money for that trip is ${neededMoney.toFixed(2)}lv.`)
}
// fuelMoney(260, 9, 2.49);
// fuelMoney(90, 14, 2.88);



function centuriesToMinutes(num) {
    let years = num * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = 60 * hours;

    console.log(`${num} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
// centuriesToMinutes(1);
// centuriesToMinutes(5);



function specialNumbers(num) {
    let sum = 0;
    let result = '';
    for (let i = 1; i <= num; i++) {
        i = i.toString();
        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }
        result = sum === 5 || sum === 7 || sum === 11;
        if (result) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        sum = 0;
    }
}
// specialNumbers(15);



function triplesLatinLetters(n) {
    for (let i = 0; i < n; i++) {
        let letter1 = String.fromCharCode(i + 97);
        for (let j = 0; j < n; j++) {
            let letter2 = String.fromCharCode(j + 97);
            for (let k = 0; k < n; k++) {
                let letter3 = String.fromCharCode(k + 97);
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}
// triplesLatinLetters(3);

