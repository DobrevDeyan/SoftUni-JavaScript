function printArray(arr, str) {
  console.log(arr.join(str));
}
// printArray(['One', 'Two', 'Three', 'Four', 'Five'], '-');
// printArray(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');

function printEveryNthElement(arr, num) {
  return arr.filter((_, i) => i % Number(num) === 0);
}
// printEveryNthElement(['5', '20', '31', '4', '20'], 2);
// printEveryNthElement(['dsa', 'asd', 'test', 'tset'], 2);
// printEveryNthElement(['1', '2', '3', '4', '5'], 6);

// ok will try this too

function addRemoveElements(arr) {
  // let num = 0;
  // let newArr = [];
  //
  // for (let arrElement of arr) {
  //     num += 1;
  //     if (arrElement === 'add') {
  //         newArr.push(num);
  //     } else if (arrElement === 'remove') {
  //         newArr.pop();
  //     }
  // }
  //
  // if (newArr.length === 0) {
  //     console.log('Empty')
  // } else {
  //     for (let newArrElement of newArr) {
  //         console.log(newArrElement);
  //     }
  // }

  let newArr = [];
  let num = 1;
  let actions = {
    add: (x) => newArr.push(x),
    remove: () => newArr.pop(),
  };

  arr.forEach((x) => actions[x](num++));
  console.log(newArr.length !== 0 ? newArr.join("\n") : "Empty");
}
// addRemoveElements(['add', 'add', 'add', 'add']);
// addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
// addRemoveElements(['remove', 'remove', 'remove']);

function rotateArray(arr, num) {
  for (let i = 0; i < Number(num); i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr.join(" "));
}
// rotateArray(['1', '2', '3', '4'], 2);
// rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);

function extractIncrSubsequence(arr) {
  return arr.reduce((a, v) => {
    if (v >= (a[a.length - 1] || arr[0])) {
      a.push(v);
    }
    return a;
  }, []);
}
// extractIncrSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// extractIncrSubsequence([1, 2, 3, 4]);
// extractIncrSubsequence([20, 3, 2, 15, 6, 1]);

function listOfNames(arr) {
  arr = arr.sort((a, b) => a.localeCompare(b));
  arr.forEach((x, i) => console.log(`${i + 1}.${x}`));
}
// listOfNames(["John", "Bob", "Christina", "Ema"]);

function sortingNumbers(arr) {
  // let i = arr.length - 1
  // return arr
  //     .sort((a, b) => a - b)
  //     .reduce((a, v, _, tArr) => {
  //         a.push(v)
  //         a.push(tArr[i--])
  //         return a
  //     }, [])
  //     .slice(0, arr.length);

  let newArray = [];
  let arrayLength = arr.length;

  for (let i = 0; i < arrayLength; i++) {
    let number;
    if (i % 2 === 0) {
      number = Math.min(...arr);
    } else {
      number = Math.max(...arr);
    }
    newArray.push(number);
    arr.splice(arr.indexOf(number), 1);
  }
  return newArray;

  // let newArray = [];
  // let num = 0;
  // let i = arr.length - 1;
  //
  // arr = arr.filter((a, b, i) => {
  //     if (i % 2 === 0) {
  //         num = Math.min(...arr);
  //         newArray.push(num);
  //         arr.splice(arr.indexOf(num), 1);
  //
  //     } else {
  //         num = Math.max(...arr);
  //         newArray.push(num);
  //         arr.splice(arr.indexOf(num), 1);
  //     }
  // });
  //
  // console.log(newArray)
}
// sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

function sortArrayByCriteria(arr) {
  let sorted = arr.sort((a, b) => {
    // return a.length - b.length === 0 ? a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()) : a.length - b.length;
    if (a.length - b.length === 0) {
      return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
    } else {
      return a.length - b.length;
    }
  });

  for (let sortedElement of sorted) {
    console.log(sortedElement);
  }
}
// sortArrayByCriteria(['alpha', 'beta', 'gamma']);
// sortArrayByCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// sortArrayByCriteria(['test', 'Deny', 'omen', 'Default']);

function magicMatrices(arr) {
  return [
    ...arr.map((x) => x.reduce((a, v) => a + v, 0)),
    ...arr.reduce((a, v, i) => {
      a.push(arr.reduce((c, d) => c + d[i], 0));
      return a;
    }, []),
  ].every((x, _, arr) => x === arr[0]);
}
// magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
// magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
// magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);

function ticTacToe(arr) {
  const board = [0, 0, 0].map((x) => ["false", "false", "false"]);
  let player = "X";

  function isWinningMove(board, row, place) {
    // after the move has been made, we -->
    // check current row for 3 equals
    // || reducing to new array with column === the place player is marking.
    //e.g. if player is on place 2 in row 1,
    //we make new array with all places 2 from all 3 rows
    //to check for column equality
    // || adding main diagonal to new array, checking it for equality
    // || adding second diagonal and checking it.
    return (
      board[row].every((x) => x === player) ||
      board
        .reduce((a, v) => {
          a.push(v[place]);
          return a;
        }, [])
        .every((x) => x === player) ||
      [board[0][0], board[1][1], board[2][2]].every((x) => x === player) ||
      [board[0][2], board[1][1], board[2][0]].every((x) => x === player)
    );
  }

  const printBoard = (board) =>
    console.log(board.map((x) => x.join("\t")).join("\n"));

  for (let i = 0; i < arr.length; i++) {
    const [row, place] = arr[i].split(" ").map(Number);

    if (board[row][place] !== "false") {
      console.log("This place is already taken. Please choose another!");
      continue;
    }
    board[row][place] = player;

    if (isWinningMove(board, row, place)) {
      console.log(`Player ${player} wins!`);
      printBoard(board);
      break;
    }

    if (board.every((x) => x.every((y) => y !== "false"))) {
      console.log("The game ended! Nobody wins :(");
      printBoard(board);
      break;
    }

    player = player === "X" ? "O" : "X";
  }
}
// ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
// ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
// ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);

function diagonalAttack(arr) {
  arr = arr.map((x) => x.split(" ").map(Number));
  const getDiagSum = (arr) => arr.reduce((a, v, i) => a + v[i], 0);
  const mapToSum = (arr, sum) =>
    arr.map((x, i) =>
      x.map((y, j) => (j === i || j === x.length - i - 1 ? y : sum))
    );
  const print = (arr) => arr.map((x) => x.join(" ")).join("\n");
  const [reversedMatrix, resultMatrix] = [arr.reverse(), arr.reverse()];
  return getDiagSum(resultMatrix) === getDiagSum(reversedMatrix)
    ? print(mapToSum(resultMatrix, getDiagSum(resultMatrix)))
    : print(resultMatrix);
}
// diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
// diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);

function orbit(arr) {
  let matrix = new Array(arr[0]).fill(new Array(arr[1]).fill(""));

  return matrix
    .map((x, i) =>
      x.map((y, j) => Math.max(Math.abs(j - arr[3]), Math.abs(i - arr[2])) + 1)
    )
    .map((x) => x.join(" "))
    .join("\n");
}
// orbit([4, 4, 0, 0]);
// orbit([5, 5, 2, 2]);
// orbit([3, 3, 2, 2]);

function spiralMatrix(w, h) {
  let matrix = new Array(h).fill(new Array(w).fill([]));
  matrix = matrix.map((x) => x.map((y) => ""));
  let [startRow, endRow, startClmn, endClmn, counter] = [0, h - 1, 0, w - 1, 0];

  while (startClmn <= endClmn && startRow <= endRow) {
    for (let i = startClmn; i <= endClmn; i++) {
      matrix[startRow][i] = ++counter;
    }
    startRow++;
    for (let i = startRow; i <= endClmn; i++) {
      matrix[i][endClmn] = ++counter;
    }
    endClmn--;
    for (let i = endClmn; i >= startClmn; i--) {
      matrix[endRow][i] = ++counter;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startClmn] = ++counter;
    }
    startClmn++;
  }

  return matrix.map((x) => x.join(" ")).join("\n");
}
// spiralMatrix(5, 5);
// spiralMatrix(3, 3);
