function repeatString(string, num) {
  function repeatString(string, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
      result += string;
    }
    return result;
  }
  console.log(repeatString(string, num));
}
// repeatString("abc", 3);
// repeatString("String",2);

function grades(num) {
  if (num < 3) {
    console.log(`Fail (2)`);
  } else if (num < 3.5) {
    console.log(`Poor (${num.toFixed(2)})`);
  } else if (num < 4.5) {
    console.log(`Good (${num.toFixed(2)})`);
  } else if (num < 5.5) {
    console.log(`Very good (${num.toFixed(2)})`);
  } else {
    console.log(`Excellent (${num.toFixed(2)})`);
  }
}
// grades(3.33);
// grades(4.50);
// grades(2.99);

function mathPower(n1, n2) {
  let result = 1;

  for (let i = 0; i < n2; i++) {
    result *= n1;
  }

  console.log(result);
}
// mathPower(2, 8);
// mathPower(3, 4);

function orders(product, qty) {
  let price = getPrice(product);

  let total = price * qty;
  console.log(total.toFixed(2));

  function getPrice(product) {
    switch (product) {
      case "coffee":
        return 1.5;
      case "water":
        return 1.0;
      case "coke":
        return 1.4;
      case "snacks":
        return 2.0;
    }
  }
}
// orders("water", 5);
// orders("coffee", 2);

function simpleCalculator(n1, n2, operator) {
  let operators = {
    multiply: (n1, n2) => n1 * n2,
    divide: (n1, n2) => n1 / n2,
    add: (n1, n2) => n1 + n2,
    subtract: (n1, n2) => n1 - n2,
  };

  console.log(operators[operator](n1, n2));
}
// simpleCalculator(5, 5, "multiply");
// simpleCalculator(40, 8, "divide");
// simpleCalculator(12, 19, "add");
// simpleCalculator(50, 13, "subtract");

function signCheck(a, b, c) {
  if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
    if (c > 0) {
      console.log("Positive");
    } else {
      console.log("Negative");
    }
  } else {
    if (c > 0) {
      console.log("Negative");
    } else {
      console.log("Positive");
    }
  }
}
// signCheck(5, 12 , -15);
// signCheck(-6, -12 , 14);
// signCheck(-1, -2 , -3);
// signCheck(-5, 1 , 1);
