function multiplyNumber(num) {
    console.log(num * 2);
}
// multiplyNumber(2);
// multiplyNumber(5);
// multiplyNumber(20);



function excellentGrade(num) {
    if (num >= 5.5) {
        console.log("Excellent");
    } else {
        console.log("Not excellent");
    }
}
// excellentGrade(5.50);
// excellentGrade(4.35);



function oneToFive() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
// oneToFive();



function nToOne(num) {
    // for (let i = num; i >= 1; i--) {
    //     console.log(i);
    // }
    while (num >= 1) {
        console.log(num);
        num--;
    }
}
// nToOne(5);
// nToOne(3);



function numbersMtoN(num1, num2) {
    for (let i = num1; i >= num2; i--) {
        console.log(i);
    }
}
// numbersMtoN(6, 2);
// numbersMtoN(4, 1);



function studentInformation(name, age, grade) {
    let result = `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`;
    console.log(result);
}
// studentInformation("John", 15, 5.54678);
// studentInformation('Steve', 16, 2.1426);
// studentInformation('Marry', 12, 6.00);



function monthPrinter(num) {
    if (num === 1) {
        console.log("January");
    } else if (num === 2) {
        console.log("February");
    } else if (num === 3) {
        console.log("March");
    } else if (num === 4) {
        console.log("April");
    } else if (num === 5) {
        console.log("May");
    } else if (num === 6) {
        console.log("June");
    } else if (num === 7) {
        console.log("July");
    } else if (num === 8) {
        console.log("August");
    } else if (num === 9) {
        console.log("September");
    } else if (num === 10) {
        console.log("October");
    } else if (num === 11) {
        console.log("November");
    } else if (num === 12) {
        console.log("December");
    } else {
        console.log("Error!");
    }
}
// monthPrinter(2);
// monthPrinter(13);



function foreignLanguages(input) {
    let country = input;

    if (country === "USA" || country === "England") {
        console.log("English");
    } else if (country === "Spain" || country === "Argentina" || country === "Mexico") {
        console.log("Spanish");
    } else {
        console.log("unknown");
    }
}
// foreignLanguages("USA");
// foreignLanguages("Germany");



function theatrePromotions(day, age) {
    let typeOfday = day;
    let ageOfPerson = age;

    if (ageOfPerson < 0 || ageOfPerson > 122) {
        console.log("Error!");
    }
    switch (typeOfday) {
        case "Weekday":
            if (ageOfPerson >= 0 && ageOfPerson <= 18) {
                console.log("12$");
            } else if (ageOfPerson > 18 && ageOfPerson <= 64) {
                console.log("18$");
            } else if (ageOfPerson > 64 && ageOfPerson <= 122) {
                console.log("12$");
            }
            break;
        case "Weekend":
            if (ageOfPerson >= 0 && ageOfPerson <= 18) {
                console.log("15$");
            } else if (ageOfPerson > 18 && ageOfPerson <= 64) {
                console.log("20$");
            } else if (ageOfPerson > 64 && ageOfPerson <= 122) {
                console.log("15$");
            }
            break;
        case "Holiday":
            if (ageOfPerson >= 0 && ageOfPerson <= 18) {
                console.log("5$");
            } else if (ageOfPerson > 18 && ageOfPerson <= 64) {
                console.log("12$");
            } else if (ageOfPerson > 64 && ageOfPerson <= 122) {
                console.log("10$");
            }
            break;
    }
}
// theatrePromotions("Holiday", -12);
// theatrePromotions('Weekday', 42);
// theatrePromotions('Holiday', 15);


function divisionByThree() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
// divisionByThree();



function sumOddNumbers(input) {
    let number = Number(input);
    let sum = 0;
    let counter = 0;
    for (let i = 1; i <= 100; i += 2) {
        console.log(i);
        counter++;
        sum += i;
        if (counter === number) {
            console.log(`Sum: ${sum}`);
            break;
        }
    }
}
// sumOddNumbers(5);
// sumOddNumbers(3);