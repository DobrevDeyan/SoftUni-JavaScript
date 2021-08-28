//SECOND LECTURE

/* function convertor(input){
    let usd = input[0];
    let bgn = Number(usd*1.79549);
    console.log(bgn);
}
convertor(["22"]);
 */

/* function angleConv(input){
    let radians = Number(input[0]);
    let degree = radians*180/Math.PI;
    console.log(degree.toFixed(0));
}
angleConv(["0.5236"]); */

/*     function sum(input){
        let deposit = Number(input[0]);
        let timeOfDeposit = Number(input[1]);
        let interest = Number(input[2]);
        let finalSum = deposit + timeOfDeposit * ((deposit*(interest*0.01))/12);
        console.log(finalSum);
    }
sum(["200", "3", "5.7"]); */

/* function hours(input){
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let hoursPerDay = (pages/pagesPerHour)/days;
    console.log(hoursPerDay);
}
hours(["212", "20", "2"]); */

/* function rent(input){
    let price = Number(input[0]);
    let cake = price*0.2;
    let drinks = cake-(cake*0.45);
    let animator = price/3;
    let allItems = price+cake+drinks+animator;
    console.log(allItems);
}
rent(["2250"]);
 */


/* function sum(input){
    let campaignDays = Number(input[0]);
    let numberOfBakers = Number(input[1]);
    let numberOfCakes = Number(input[2]);
    let numberOfGofrets = Number(input[3]);
    let numberOfPancakes = Number(input[4]);
 
    let ttlCakes = numberOfBakers*numberOfCakes;
    let ttlGofrets = numberOfBakers*numberOfGofrets;
    let ttlPancakes = numberOfBakers*numberOfPancakes;
 
    let totalCakes = ttlCakes*45;
    let totalGofrets = ttlGofrets*5.8;
    let totalPancakes = ttlPancakes*3.2;
 
    let totalMoney = (totalCakes + totalGofrets + totalPancakes) * campaignDays;
    totalMoney = totalMoney - ( totalMoney / 8 );
    console.log(totalMoney);
}
sum(["23", "8", "14", "30", "16"]); */


/* function neededMoney(input) {
    let strawberriesPrice = Number(input[0]);
    let bananaQua = Number(input[1]);
    let orangeQua = Number(input[2]);
    let berriesQua = Number(input[3]);
    let strawberriesQua = Number(input[4]);

    let berriesPrice = strawberriesPrice / 2;
    let orangePrice = berriesPrice * 0.6;
    let bananaPrice = berriesPrice * 0.2;

    let payment = (strawberriesPrice * strawberriesQua) +
        (bananaPrice * bananaQua) +
        (orangePrice * orangeQua) +
        (berriesPrice * berriesQua);

    console.log(payment);
}
neededMoney(["63.5", "3.57", "6.35", "8.15", "2.5"]); */



/* function liters(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let volume = (length * height * width) * 0.001;
    let neededLiters = volume - ((percent / 100) * volume);

    console.log(neededLiters);
}
liters(["85", "75", "47", "17"]); */