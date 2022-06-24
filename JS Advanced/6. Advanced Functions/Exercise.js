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
    // console.log(`${type}: ${argument}`);
  }
  console.log([...map.entries()]);
  console.log([map.entries()]);
  console.log(map.entries());
}
argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});

// function argumentInfo() {
//     let map = new Map();

//     for (let arg of arguments) {
//         let type = typeof(arg);
//         if (!map.has(type)) {
//             map.set(type, 0);
//         }
//         map.set(type, map.get(type)+1);
//         console.log(`${type}: ${arg}`)
//     }

//     [...map.entries()].sort((a,b) => b[1] - a[1])
//         .forEach((elem) => console.log(`${elem[0]} = ${elem[1]}`))
// }
