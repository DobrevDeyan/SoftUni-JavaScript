/* function trapeze(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let h = Number(input[2]);

    let sqTrapeze = (a + b) * (h / 2);
    console.log(sqTrapeze.toFixed(2));
}
trapeze(["8", "13", "7"]); */

/* function triangle(input) {
    let side = Number(input[0]);
    let height = Number(input[1]);
    let sqArea = (side * height) / 2;
    //console.log(sqArea.toFixed(2));

    let rounded = sqArea.toFixed(2);
    console.log(rounded);
}
triangle(["4", "4"]); */

/* function convertor(input) {
    let degreeC = Number(input[0]);
    let degreeF = (degreeC * 1.8) + 32;
    console.log(degreeF.toFixed(2));
}
convertor(["-5.5"]); */

/* function calculate(input) {
    let vegPriceKg = Number(input[0]);
    let fruPriceKg = Number(input[1]);
    let vegTtlKg = Number(input[2]);
    let fruTtlKg = Number(input[3]);
    let totalInLeva = vegPriceKg * vegTtlKg + fruPriceKg * fruTtlKg;
    let totalInEur = totalInLeva / 1.94;
    console.log(totalInEur.toFixed(2));
}
calculate(["1.5", "2.5", "10", "10"]); */

// function totalSeets(input){
//     let length = Number(input[0]);
//     let width = Number(input[1]);
//     let seetsPerRow = Math.floor(((width * 100)-100)/70);
//     let rows = Math.floor((length * 100)/120);
//     let seets = rows*seetsPerRow - 3;
//     console.log(seets);
// }
// totalSeets(["8.4", "5.2"]);


// function price (input){
//     let skuPriceKg = Number(input[0]);
//     let cacaPriceKg = Number(input[1]);
//     let palamudKg = Number(input[2]);
//     let safridKg = Number(input[3]);
//     let midiKg = Number(input[4]);
//     let palamudPriceKg = skuPriceKg + (skuPriceKg*0.6);
//     let safridPriceKg = cacaPriceKg + (cacaPriceKg*0.8);
//     let midiPriceKg = 7.5;
//     let palamud = palamudPriceKg*palamudKg;
//     let safrid = safridKg*safridPriceKg;
//     let midi = midiKg*midiPriceKg;
//     let totalPrice = (palamud+safrid+midi).toFixed(2);
//     console.log(totalPrice);
// }




// price(["6.9", "4.2", "1.5", "2.5", "1"]);
// function paints(input){
//     let x = Number(input[0]);
//     let y = Number(input[1]);
//     let h = Number(input[2]);
//     let green = (2*(x*x) + 2*(x*y)) - ((1.2*2) + 2*(1.5*1.5));
//     let red =  (2*(x*y) + 2*((x*h )/2));
//     greenPaint = (green/3.4).toFixed(2);
//     redPaint = (red/4.3).toFixed(2);
//     console.log(greenPaint);
//     console.log(redPaint);
// }
// paints(["6", "10", "5.2"]);



// function circle(input) {
//     let r = Number(input[0]);
//     let area = (Math.PI * Math.pow(r, 2)).toFixed(2);
//     let parameter = (2 * Math.PI * r).toFixed(2);

//     console.log(area);
//     console.log(parameter);
// }
// circle(["3"]);


// function weather(input) {
//     let a = input[0];
//     let b = "sunny";
//     if (a == b) {
//         console.log("It's warm outside!");
//     } else {
//         console.log("It's cold outside!");
//     }
// }
// weather(["sunny"]);

// function degree(input) {
//     let a = Number(input[0]);
//     if (a >= 26 && a <= 35) {
//         console.log("Hot");
//     } else if (a >= 20.1 && a <= 25.9) {
//         console.log("Warm");
//     } else if (a >= 15 && a <= 20) {
//         console.log("Mild");
//     } else if (a >= 12 && a <= 14.9) {
//         console.log("Cool");
//     } else if (a >= 5 && a <= 11.9) {
//         console.log("Cold");
//     } else {
//         console.log("unknown");
//     }
// }
// degree(["0"]);