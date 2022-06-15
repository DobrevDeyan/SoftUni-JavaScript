function evenPositionElement(input) {
  let result = "";

  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      result += input[i] + " ";
    }
  }
  console.log(result);
}
// evenPositionElement(['20', '30', '40', '50', '60']);
// evenPositionElement(['5', '10']);

function lastKNumberSequence(n, k) {
  n = Number(n); // array length
  k = Number(k); // sum of last k count
  let result = [1];

  for (let i = 1; i < n; i++) {
    let element = result.slice(-k); // k elements from the end inward.
    let current = 0;
    for (let number of element) {
      current += number;
    }
    result.push(current);
  }

  return result;
  // console.log(result);
}
// lastKNumberSequence(6, 3);
// lastKNumberSequence(8, 2);

function sumFirstLast(input) {
  return Number(input.shift()) + Number(input.pop());
}
// sumFirstLast(['20', '30', '40']);
// sumFirstLast(['5', '10']);

function negativePositiveNumbers(input) {
  let resultArray = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] >= 0) {
      resultArray.push(input[i]);
    } else {
      resultArray.unshift(input[i]);
    }
  }

  for (let resultArrayElement of resultArray) {
    console.log(resultArrayElement);
  }
}
// negativePositiveNumbers([7, -2, 8, 9]);
// negativePositiveNumbers([3, -2, 0, -1]);

function smallestTwoNumbers(input) {
  let result = input.sort((a, b) => a - b).slice(0, 2);
  console.log(result.join(" "));
}
// smallestTwoNumbers([30, 15, 50, 5]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

function biggerHalf(input) {
  let sorted = input.sort((a, b) => a - b);
  let result = [];

  if (sorted.length % 2 === 0) {
    result = sorted.slice(sorted.length / 2);
  } else {
    result = sorted.slice(-Math.ceil(sorted.length / 2));
  }
  return result;
}
// biggerHalf([4, 7, 2, 5]);
// biggerHalf([3, 19, 14, 7, 2, 19, 6]);

function piecePie(array, string1, string2) {
  let startIndex = array.indexOf(string1);
  let endIndex = array.indexOf(string2);

  return array.splice(startIndex, endIndex + 1);
}
// piecePie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],
//     'Key Lime Pie',
//     'Lemon Meringue Pie');
// piecePie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie',
//         'Smoked Fish Pie'],
//     'Pot Pie',
//     'Smoked Fish Pie');

function processOddPositions(input) {
  // let arr = [];
  // for (let i = 0; i < input.length; i++) {
  //     if (i % 2 !== 0) {
  //         arr.push(input[i]*2);
  //     }
  // }
  // return arr.reverse().join(' ');

  return input
    .filter((_, i) => i % 2 !== 0)
    .map((x) => x * 2)
    .reverse();
}
// processOddPositions([10, 15, 20, 25]);
// processOddPositions([3, 0, 10, 4, 7, 3]);

function biggestElement(input) {
  return input.reduce(
    (a, v) => (a = Math.max(...v) > a ? Math.max(...v) : a),
    -Infinity
  );
}
// biggestElement([[20, 50, 10], [8, 33, 145]]);
// biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);

function diagonalSums(input) {
  const calcDiagonal = (input) => input.reduce((a, v, i) => a + v[i], 0);
  return `${calcDiagonal(input)} ${calcDiagonal(input.reverse())}`;
}
// diagonalSums([[20, 40], [10, 60]]);
// diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);

function equalNeighbors(input) {
  let count = 0;
  input.forEach((x) =>
    x.reduce((a, v) => {
      if (a === v) {
        count += 1;
      }
      return v;
    })
  );

  for (let i = 0; i < input.length - 1; i++) {
    input[i].forEach((_, j) => {
      if (input[i][j] === input[i + 1][j]) {
        count += 1;
      }
    });
  }
  return count;
}
// equalNeighbors([['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']]);
// equalNeighbors([['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']]);

let sum = [10, 6, 2, 3].reduce(function (acc, curr) {
  return acc + curr;
}, 0);
// console.log(sum);

const numbersArr = [30, 50, 40, 10, 70];
const average = numbersArr.reduce((total, number, index, array) => {
  total += number;
  if (index === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
});
// console.log(average);
let arr = [
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
];
arr.forEach(printRow);
function printRow(row) {
  console.log(row);
  row.forEach(printNumber);
}
function printNumber(num) {
  console.log(num);
}
