// 1. Sort Array
function sortArray(array, sortMethod) {
  if (sortMethod === "asc") {
    array.sort((a, b) => a - b);
  } else if (sortMethod === "desc") {
    array.sort((a, b) => b - a);
  }
  return array;
}
// sortArray([14, 7, 17, 6, 8], "asc");

// 2. Argument info
function argumentInfo(...arguments) {
  let map = new Map();
  for (let argument of [...arguments]) {
    let type = typeof argument;
    if (!map.has(type)) {
      map.set(type, 0);
    }
    map.set(type, map.get(type) + 1);
    console.log(`${type}: ${argument}`);
  }
  Array.from(map)
    .sort((a, b) => b[1] - a[1])
    .forEach((elem) => console.log(`${elem[0]} = ${elem[1]}`));
}
// argumentInfo("cat", 42, function () {
//   console.log("Hello world!");
// });

// 3. Fibonacci
function fibonacci() {
  let numbers = [0, 1];

  return () => {
    const result = numbers[0] + numbers[1];
    numbers = [numbers[1], numbers[1] + numbers[0] || 1];
    return result || 1;
  };
}
// let fib = fibonacci();
// console.log(fib()); // 1
// console.log(fib()); // 1
// console.log(fib()); // 2
// console.log(fib()); // 3
// console.log(fib()); // 5
// console.log(fib()); // 8
// console.log(fib()); // 13

// 4. Breakfast Robot
function breakfastRobot() {
  const ingredients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  const recipes = {
    apple: parseRecipeData(0, 1, 0, 2),
    lemonade: parseRecipeData(0, 10, 0, 20),
    burger: parseRecipeData(0, 5, 7, 3),
    eggs: parseRecipeData(5, 0, 1, 1),
    turkey: parseRecipeData(10, 10, 10, 10),
  };

  function parseRecipeData(protein, carbohydrate, fat, flavour) {
    return {
      protein,
      carbohydrate,
      fat,
      flavour,
    };
  }

  function restock(ingr, x) {
    ingredients[ingr] += x;
    return "Success";
  }

  function prepare(required, quantity) {
    const parsedRecipe = Object.entries(required).map((x) => [
      x[0],
      x[1] * quantity,
    ]);

    for (let i = 0; i < parsedRecipe.length; i++) {
      const [name, amount] = parsedRecipe[i];
      if (ingredients[name] - amount < 0) {
        return `Error: not enough ${name} in stock`;
      }
    }

    parsedRecipe.forEach(([name, amount]) => (ingredients[name] -= amount));
    return "Success";
  }

  const report = () =>
    Object.entries(ingredients)
      .map(([key, value]) => `${key}=${value}`)
      .join(" ");

  const actions = {
    prepare: (r, q) => prepare(recipes[r], q),
    restock,
    report,
  };

  return (s) => {
    const [command, a, b] = s.split(" ").map((x) => (isNaN(x) ? x : Number(x)));

    return actions[command](a, b);
  };
}
let managerFunction = breakfastRobot();
// console.log(managerFunction("restock flavour 50")); // Success
// console.log(managerFunction("prepare lemonade 4")); // Error: not enough carbohydrate in stock

// 5. Functional Sum
function functionalSum(number) {
  let temp = 0;
  function recursive(x) {
    temp += x;

    return recursive;
  }
  recursive.toString = () => temp;
  return recursive(number);
}
// functionalSum(1); //1
// functionalSum(1)(6)(-3); //4

// 6. Monkey Patcher
function monkeyPatcher(command) {
  const actions = {
    upvote: (x) => (x.upvotes += 1),
    downvote: (x) => (x.downvotes += 1),
    score: (x) => getScore(x),
  };

  function isObfuscable(votes) {
    return votes > 50;
  }

  function getObfNum(u, d) {
    return Math.ceil(0.25 * Math.max(u, d));
  }

  function calcRating(u, d) {
    if (u + d < 10) return "new";
    if (u > (u + d) * 0.66) return "hot";
    if (u - d >= 0 && (u > 100 || d > 100)) return "controversial";
    if (u - d < 0) return "unpopular";

    return "new";
  }

  function getScore({ upvotes, downvotes }) {
    const obfNum = isObfuscable(upvotes + downvotes)
      ? getObfNum(upvotes, downvotes)
      : 0;
    const [rUps, rDowns] = [upvotes + obfNum, downvotes + obfNum];
    const balance = rUps - rDowns;

    return [rUps, rDowns, balance, calcRating(upvotes, downvotes)];
  }

  return actions[command](this);
}
// monkeyPatcher.call({ upvotes: 1, downvotes: 2 }, "upvote");

