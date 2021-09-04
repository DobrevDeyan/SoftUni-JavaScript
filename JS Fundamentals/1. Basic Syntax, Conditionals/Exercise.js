function ages(number) {
    if (number >= 0 && number <= 2) {
        console.log("baby");
    } else if (number >= 3 && number <= 13) {
        console.log("child");
    } else if (number >= 14 && number <= 19) {
        console.log("teenager");
    } else if (number >= 20 && number <= 65) {
        console.log("adult");
    } else if (number >= 66) {
        console.log("elder");
    } else if (number < 0) {
        console.log("out of bonds");
    }
}
// ages(20);
// ages(1);
// ages(100);



function rounding(num1, num2) {
    if (num2 > 15) {
        num2 = 15;
    }
    let result = parseFloat(num1.toFixed(num2));
    console.log(result);
}
// rounding(3.1415926535897932384626433832795, 2);
// rounding(10.5, 3);



function division(number) {
    if (number % 10 === 0) {
        console.log('The number divisible by 10')
    } else if (number % 7 === 0) {
        console.log('The number divisible by 7')
    } else if (number % 6 === 0) {
        console.log('The number divisible by 6')
    } else if (number % 3 === 0) {
        console.log('The number divisible by 3')
    } else if (number % 2 === 0) {
        console.log('The number divisible by 2')
    } else {
        console.log('Not divisible')
    }
}
// division(30);
// division(15);
// division(12);
// division(1643);



function vacation(group, type, day) {
    let total = 0;
    switch (type) {
        case "Students":
            if (day === "Friday") {
                if (group >= 30) {
                    total = (group * 8.45) * 0.85;
                    console.log(`Total price: ${total.toFixed(2)}`);
                } else {
                    total = group * 8.45;
                    console.log(`Total price: ${total.toFixed(2)}`);
                }
            }
            if (day === "Saturday") {
                if (group >= 30) {
                    total = (group * 9.8) * 0.85;
                    console.log(`Total price: ${total.toFixed(2)}`);
                } else {
                    total = group * 9.8;
                    console.log(`Total price: ${total.toFixed(2)}`);
                }
            }
            if (day === "Sunday") {
                if (group >= 30) {
                    total = (group * 10.46) * 0.85;
                    console.log(`Total price: ${total.toFixed(2)}`);
                } else {
                    total = group * 10.46;
                    console.log(`Total price: ${total.toFixed(2)}`);
                }
            }
            break;

        case "Business":
            if (day === "Friday") {
                if (group >= 100) {
                    group -= 10;
                    total = group * 10.90;
                    console.log(`Total price: ${total.toFixed(2)}`);
                } else {
                    total = group * 10.90;
                    console.log(`Total price: ${total.toFixed(2)}`);
                }
            }
            if (day === "Saturday") {
                if (group >= 100) {
                    group -= 10;
                    total = group * 15.60;
                    console.log(`Total price: ${total.toFixed(2)}`);
                } else {
                    total = group * 15.60;
                    console.log(`Total price: ${total.toFixed(2)}`);
                }
            }
            if (day === "Sunday") {
                if (group >= 100) {
                    group -= 10;
                    total = group * 16;
                    console.log(`Total price: ${total.toFixed(2)}`);
                } else {
                    total = group * 16;
                    console.log(`Total price: ${total.toFixed(2)}`);
                }
            }
            break;

        case "Regular":
            if (day === "Friday") {
                if (group >= 10 && group <= 20) {
                    total = (group * 15) * 0.95;
                    console.log(`Total price: ${total.toFixed(2)}`);
                } else {
                    total = group * 15;
                    console.log(`Total price: ${total.toFixed(2)}`);
                }
            }
            if (day === "Saturday") {
                if (group >= 10 && group <= 20) {
                    total = (group * 20) * 0.95;
                    console.log(`Total price: ${total.toFixed(2)}`);
                } else {
                    total = group * 20;
                    console.log(`Total price: ${total.toFixed(2)}`);
                }
            }
            if (day === "Sunday") {
                if (group >= 10 && group <= 20) {
                    total = (group * 22.50) * 0.95;
                    console.log(`Total price: ${total.toFixed(2)}`);
                } else {
                    total = group * 22.50;
                    console.log(`Total price: ${total.toFixed(2)}`);
                }
            }
            break;
    }
}
// vacation(30, "Students", "Sunday");
// vacation(40, "Regular", "Saturday");



function leapYear(number) {
    if (number % 4 === 0 && number % 100 !== 0 || number % 400 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
// leapYear(1984);
// leapYear(2003);
// leapYear(4);




function printSum(num1, num2) {
    let result = "";
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        result += i + " ";
        sum += i;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}
// printSum(5, 10);
// printSum(0, 26);
// printSum(50, 60);



function triangleOfNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += i + " ";
        }
        console.log(line);
    }
}
// triangleOfNumbers(3);
// triangleOfNumbers(5);
// triangleOfNumbers(6);



function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        let result = `${num} X ${i} = ${num*i}`;
        console.log(result);
    }
}
// multiplicationTable(5);
// multiplicationTable(2);



function login(input) {
    let username = input.shift();
    let password = username.split('').reverse().join('');

    let failsCounter = 0;
    let currentPassword = input.shift();
    while (currentPassword !== password && failsCounter < 3) {
        failsCounter++;
        console.log(`Incorrect password. Try again.`);
        currentPassword = input.shift();
    }

    if (currentPassword === password) {
        console.log(`User ${username} logged in.`);
    } else {
        console.log(`User ${username} blocked!`);
    }
}
// login(['Acer','login','go','let me in','recA']);
// login(['momo','omom']);
// login(['sunny','rainy','cloudy','sunny','not sunny']);



function pyramidDjoser(baseSide, blockHeight) {
    baseSide = Number(baseSide);
    blockHeight = Number(blockHeight);
    let floor = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    while (baseSide > 1) {
        let totalBlocks = (baseSide * baseSide * blockHeight);
        let innerBlocks = ((baseSide - 2) * (baseSide - 2)) * blockHeight;
        let outerBlocks = totalBlocks - innerBlocks;

        if (baseSide - 2 === 0) {
            break;
        }

        floor++;
        baseSide -= 2;

        if (floor % 5 === 0) {
            lapis += outerBlocks;
            stone += innerBlocks;
        } else {
            marble += outerBlocks;
            stone += innerBlocks;
        }

    }
    floor++;
    height = Math.floor(floor * blockHeight);
    gold += Math.ceil(baseSide * baseSide * blockHeight);

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${height}`);
}
// pyramidDjoser(11, 1);
// pyramidDjoser(11, 0.75);
// pyramidDjoser(12, 1);
// pyramidDjoser(23, 0.5);



function bitcoinMining(minedGold) {
    let boughtBitcoin = 0;
    let days = 0;
    let money = 0;
    let firstDay = 0;
    for (let i = 0; i < minedGold.length; i++) {
        days++;
        let gold = minedGold[i];
        if (days % 3 === 0) {
            money += (gold - gold * 0.3) * 67.51;
        } else {
            money += gold * 67.51;
        }
        while (money >= 11949.16) {
            if (firstDay === 0) {
                firstDay = days;
            }
            money -= 11949.16;
            boughtBitcoin++;
        }
    }
    console.log(`Bought bitcoins: ${boughtBitcoin}`);
    if (boughtBitcoin >= 1) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
// bitcoinMining([100,200,300]);
// bitcoinMining([50, 100]);
// bitcoinMining([3124.15, 504.212, 2511.124]);