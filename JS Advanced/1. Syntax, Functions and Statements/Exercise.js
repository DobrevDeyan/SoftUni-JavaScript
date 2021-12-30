function fruit(fruitType, weightGrams, priceKg) {
  weightGrams = Number(weightGrams);
  priceKg = Number(priceKg);
  let kgs = weightGrams / 1000;
  let price = kgs * priceKg;
  console.log(
    `I need $${price.toFixed(2)} to buy ${kgs.toFixed(
      2
    )} kilograms ${fruitType}.`
  );
}
// fruit('orange', 2500, 1.80);
// fruit('apple', 1563, 2.35);
dadasdad;

function greatestCommonDivisor(firstNum, secondNum) {
  // if (!secondNum){
  //     return firstNum;
  // }
  // console.log(secondNum, firstNum % secondNum);

  let divisors = [];
  for (let i = 1; i <= Math.min(firstNum, secondNum); i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      divisors.push(i);
    }
  }
  let max = divisors.reduce((a, b) => Math.max(a, b), 0);
  console.log(max);
}
// greatestCommonDivisor(15, 5);
// greatestCommonDivisor(2154, 458);

function sameNumbers(num) {
  let sum = 0;
  let count = 0;

  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    let currentNumber = Number(num[i]);
    let nextNumber = Number(num[i + 1]);

    sum += currentNumber;

    if (i === num.length - 1) {
      nextNumber = currentNumber;
    }

    if (currentNumber === nextNumber) {
      count++;
    }
  }

  if (count === num.length) {
    console.log(true);
  } else {
    console.log(false);
  }
  console.log(sum);
}
// sameNumbers(2222222);
// sameNumbers(1234);

function timeToWalk(num1, num2, num3) {
  let steps = Number(num1);
  let footPrint = Number(num2);
  let speed = Number(num3) / 3.6; // speed in mps
  let distance = steps * footPrint; // total distance in meters
  let timeRequired = distance / speed; // seconds

  let breaks = Math.floor(distance / 500);
  let additionalTime = breaks * 60;
  timeRequired = timeRequired + additionalTime;

  let totalHours = Math.floor(timeRequired / 3600);
  let totalMinutes = Math.floor((timeRequired % 3600) / 60);
  let totalSeconds = Math.round((timeRequired % 3600) % 60);

  if (totalHours < 10) {
    totalHours = "0" + totalHours;
  }
  if (totalMinutes < 10) {
    totalMinutes = "0" + totalMinutes;
  }
  if (totalSeconds < 10) {
    totalSeconds = "0" + totalSeconds;
  }
  console.log(`${totalHours}:${totalMinutes}:${totalSeconds}`);
}
// timeToWalk(4000, 0.60, 5);
// timeToWalk(2564, 0.70, 5.5);

function roadRadar(string1, string2) {
  let speed = Number(string1);
  let area = string2;
  let speedLimit = 0;

  switch (area) {
    case "motorway":
      speedLimit = 130;
      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else {
        let status = "";
        if (speed - speedLimit <= 20) {
          status = "speeding";
        } else if (speed - speedLimit <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      break;
    case "interstate":
      speedLimit = 90;
      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else {
        let status = "";
        if (speed - speedLimit <= 20) {
          status = "speeding";
        } else if (speed - speedLimit <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      break;
    case "city":
      speedLimit = 50;
      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else {
        let status = "";
        if (speed - speedLimit <= 20) {
          status = "speeding";
        } else if (speed - speedLimit <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      break;
    case "residential":
      speedLimit = 20;
      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else {
        let status = "";
        if (speed - speedLimit <= 20) {
          status = "speeding";
        } else if (speed - speedLimit <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      break;
  }
}
// roadRadar(40, 'city');
// roadRadar(21, 'residential');
// roadRadar(120, 'interstate');
// roadRadar(200, 'motorway');

function cookingNumber(number, comm1, comm2, comm3, comm4, comm5) {
  number = Number(number);

  let commands = [];
  commands.push(comm1);
  commands.push(comm2);
  commands.push(comm3);
  commands.push(comm4);
  commands.push(comm5);

  for (let i = 0; i < commands.length; i++) {
    let currentOperation = commands[i];

    if (currentOperation === "chop") {
      number = number / 2;
      console.log(number);
    } else if (currentOperation === "dice") {
      number = Math.sqrt(number);
      console.log(number);
    } else if (currentOperation === "spice") {
      number = number + 1;
      console.log(number);
    } else if (currentOperation === "bake") {
      number = number * 3;
      console.log(number);
    } else if (currentOperation === "fillet") {
      number = number - number * 0.2;
      console.log(number);
    }
  }

  // let number = Number(input[0]);
  //
  // for (let i = 1; i < input.length; i++) {
  //     let currentOperation = input[i];
  //
  //      if (currentOperation === 'chop') {
  //         number = number / 2;
  //         console.log(number);
  //      } else if (currentOperation === 'dice') {
  //         number = Math.sqrt(number);
  //         console.log(number);
  //      } else if (currentOperation === 'spice') {
  //         number = number + 1;
  //         console.log(number);
  //      } else if (currentOperation === 'bake') {
  //         number = number * 3;
  //         console.log(number);
  //      } else if (currentOperation === 'fillet') {
  //         number = number - (number * 0.2);
  //         console.log(number);
  //      }
  // }

  // let number = Number(input[0]);
  //
  // let chop = x => x/2;
  // let dice = x => Math.sqrt(x);
  // let spice = x => ++x;
  // let bake = x => x*3;
  // let fillet = x => x - x * 0.2;
  //
  // for(let i=1; i<=5; i++) {
  //     switch (input[i]) {
  //         case "chop":
  //             number = chop(number);
  //             console.log(number);
  //             break;
  //         case "dice":
  //             number = dice(number);
  //             console.log(number);
  //             break;
  //         case "spice":
  //             number = spice(number);
  //             console.log(number);
  //             break;
  //         case "bake":
  //             number = bake(number);
  //             console.log(number);
  //             break;
  //         case "fillet":
  //             number = fillet(number);
  //             console.log(number);
  //             break;
  //     }
  // }
}
// cookingNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cookingNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

function validityChecker(x1, y1, x2, y2) {
  x1 = Number(x1);
  y1 = Number(y1);
  x2 = Number(x2);
  y2 = Number(y2);

  function pointsDistance(x1, y1, x2, y2) {
    let firstDistance = x1 - x2;
    let secondDistance = y1 - y2;
    return Math.sqrt(firstDistance ** 2 + secondDistance ** 2);
  }

  if (Number.isInteger(pointsDistance(x1, y1, 0, 0))) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  if (Number.isInteger(pointsDistance(x2, y2, 0, 0))) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  if (Number.isInteger(pointsDistance(x1, y1, x2, y2))) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
// validityChecker(3, 0, 0, 4);
// validityChecker(2, 1, 1, 1);

function wordsUppercase(text) {
  let result = text.toUpperCase().match(/\w+/g).join(", ");
  console.log(result);
}
// wordsUppercase('Hi, how are you?');
// wordsUppercase('hello');
