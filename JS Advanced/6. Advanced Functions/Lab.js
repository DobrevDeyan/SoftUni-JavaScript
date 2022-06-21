// 1. Area and Volume Calculator
function areaVolCalculator(area, volume, input) {
  return JSON.parse(input).map((item) => ({
    area: area.apply(item),
    volume: volume.apply(item),
  }));

  // Second solution
  // const data = JSON.parse(input);
  // const resultArr = [];
  // // const resultArr = new Set();

  // for (let item of data) {
  //   const cubeArea = area.apply(item);
  //   const cubeVolume = volume.apply(item);
  //   resultArr.push({ area: cubeArea, volume: cubeVolume });
  // }
  // return resultArr;
}
function area() {
  return Math.abs(this.x * this.y);
}
function volume() {
  return Math.abs(this.x * this.y * this.z);
}
// console.log(
//   areaVolCalculator(
//     area,
//     volume,
//     `[
//   {"x":"10","y":"-22","z":"10"},
//   {"x":"10","y":"-22","z":"10"},
//   {"x":"55","y":"8","z":"0"},
//   {"x":"100","y":"100","z":"100"},
//   {"x":"55","y":"80","z":"250"}
//   ]`
//   )
// );

// 2. Add
function add(n) {
  let number = n;

  return function solution(n) {
    return number + n;
  };
}
// let addNum = add(5);
// console.log(addNum(2));
// console.log(addNum(3));

// 3. Currency Format
function createFormatter(a, b, c, func) {
  return func.bind(undefined, a, b, c);
}

let dollarFormatter = createFormatter(",", "$", true, currencyFormatter);
function currencyFormatter(separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator;

  result += value.toFixed(2).substr(-2, 2);

  if (symbolFirst) return symbol + " " + result;
  else return result + " " + symbol;
}
// console.log(dollarFormatter(5345));

// 4. Filter Employees
function filterEmployees(data, criteria) {
  const parsedInput = JSON.parse(data);
  const [sortingCriteria, value] = criteria.split("-");

  // Second solution
  // let result = "";
  // let counter = 0;

  // for (let person of parsedInput) {
  //   if (person[sortingCriteria] === value) {
  //     console.log(
  //       `${counter}. ${person.first_name} ${person.last_name} - ${person.email}`
  //     );
  //     counter++;
  //   }
  // }

  console.log(
    parsedInput
      .filter((x) => x[sortingCriteria] === value)
      .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
      .join("\n")
  );
}
// filterEmployees(
//   `[{
//   "id": "1",
//   "first_name": "Ardine",
//   "last_name": "Bassam",
//   "email": "abassam0@cnn.com",
//   "gender": "Female"
//   }, {
//   "id": "2",
//   "first_name": "Kizzee",
//   "last_name": "Jost",
//   "email": "kjost1@forbes.com",
//   "gender": "Female"
//   },
//   {
//   "id": "3",
//   "first_name": "Evanne",
//   "last_name": "Maldin",
//   "email": "emaldin2@hostgator.com",
//   "gender": "Male"
//   }]`,
//   "gender-Female"
// );

// 5. Command Processor
function commandProcessor() {
  let text = "";

  const result = {
    append,
    removeStart,
    removeEnd,
    print,
  };

  return result;

  // return {
  //   append,
  //   removeStart,
  //   removeEnd,
  //   print,
  // };

  function append(string) {
    text += string;
    return result;
  }
  function removeStart(n) {
    text = text.slice(n);
    return result;
  }
  function removeEnd(n) {
    text = text.slice(0, -n);
    return result;
  }
  function print() {
    console.log(text);
    return result;
  }
}
const test = commandProcessor();
// test.append("111111");
// test.append("2222222");
// test.removeStart(5);
// test.removeEnd(3);
// test.print();

// test.append("111111").append("2222222").removeStart(5).removeEnd(3).print();

// 6. List Processor
function listProcessor(input) {
  // let innerCollection = [];

  // for (let item of input) {
  //   let [command, value] = item.split(" ");

  //   if (command === "add") {
  //     innerCollection.push(value);
  //   } else if (command === "remove") {
  //     innerCollection = innerCollection.filter((x) => x !== value);
  //   } else if (command === "print") {
  //     console.log(innerCollection.join(","));
  //   }
  // }

  // Second solution
  let innerCollection = [];

  let commandsObject = {
    add: (string) => innerCollection.push(string),
    remove: (string) =>
      (innerCollection = innerCollection.filter((x) => x !== string)),
    print: () => console.log(innerCollection.join(",")),
  };

  input.forEach((item) => {
    let [command, value] = item.split(" ");
    commandsObject[command](value);
  });
}
// listProcessor([
//   "add pesho",
//   "add george",
//   "add peter",
//   "remove peter",
//   "print",
// ]);
// listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
