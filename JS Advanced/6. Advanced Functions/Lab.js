function areaVolCalculator(area, volume, input) {
  return JSON.parse(input).map((item) => ({
    area: area.apply(item),
    volume: volume.apply(item),
  }));

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

function add(n) {
  let number = n;

  return function solution(n) {
    return number + n;
  };
}
// let addNum = add(5);
// console.log(addNum(2));
// console.log(addNum(3));

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

function filterEmployees(data, criteria) {
  console.log(data);
  console.log(criteria);

  //parse input, if criteria all, print all
  //find (sort) all employees who correspond to the criteria and print them
}

// function filterEmployees(string, reqCriteria) {
//   const parsed = JSON.parse(string);
//   const [criteria, value] = reqCriteria.split("-");

//   return parsed
//       .filter(x => x[criteria] === value)
//       .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
//       .join('\n');

// }
filterEmployees(
  `[{
  "id": "1",
  "first_name": "Ardine",
  "last_name": "Bassam",
  "email": "abassam0@cnn.com",
  "gender": "Female"
  }, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Jost",
  "email": "kjost1@forbes.com",
  "gender": "Female"
  },
  {
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
  }]`,
  "gender-Female"
);
