function hello() {
    console.log("Hello SoftUni");
}
//hello();


function numsFrom1To10() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}
//numsFrom1To10();

function readName(input) {
    let name = input[0];
    console.log(name);
}
//readName(['SoftUni']);

function squareArea(input) {
    let side = Number(input[0]);
    let area = side * side;
    console.log(area);
}
//squareArea([10])

function greetingByName(input) {
    let name = input[0];
    let result = "Hello, " + name;
    console.log(result);
}


greetingByName(["Svetlin"]);

function stringtest() {
    let a = 5;
    console.log("Ivan is " + a + " years old.");
    console.log(`Ivan is ${a} years old ${a + 10}`);
}
stringtest();

function printName(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let city = input[3];
    console.log(`You are ${firstName} ${lastName}, a ${age} - years old person from ${city}.`);
}
//printName(["Petar", "Petrov", "24", "Sofia"]);


function calc(input) {
    let a = Number(input[0]);
    let inch = a * 2.54;
    console.log(inch);
}
calc(["5"]);


function greeting(input) {
    let name = input[0];
    console.log(`Hello, ${name}!`);
}
greeting(["Emma"]);


function msg(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let city = input[3];
    console.log("You are " + firstName + " " + lastName + ", a " + age + "-years old person from " + city + ".");
    console.log(`You are ${firstName} ${lastName}. a ${age+5}-years old person from ${city}.`);
}
msg(["Deyan", "Dobrev", 30, "Varna."]);

function calculator(input) {
    let projectTime = 3;
    let architectName = input[0];
    let projectCount = input[1];
    let totalTime = Number(projectCount * projectTime);
    console.log(`The architect ${architectName} will need ${totalTime} hours to complete ${projectCount} project/s.`);
}
calculator(["Deayn", 10]);

function dogExpenses(input) {
    let dogs = Number(input[0]);
    let dogFoodCost = dogs * 2.5;
    let notDogs = Number(input[1]);
    let notDogsFoodCost = notDogs * 4;
    console.log(dogFoodCost + notDogsFoodCost + " lv.");
}
dogExpenses([13, 9]);

function gardeningExpenses(input) {
    let sqMeters = input[0];
    let price = sqMeters * 7.61;
    let discount = price * 0.18;
    let finalPrice = price - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
gardeningExpenses(["550"]);