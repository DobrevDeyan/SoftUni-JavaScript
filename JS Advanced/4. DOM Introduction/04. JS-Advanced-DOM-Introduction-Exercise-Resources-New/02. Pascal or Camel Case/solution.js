function solve() {
  const input = document.getElementById("text").value;
  const naming = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  const splitInput = input.split(" ");
  let resultString = "";

  if (naming === "Pascal Case") {
    for (let i = 0; i < splitInput.length; i++) {
      resultString +=
        splitInput[i][0].toUpperCase() +
        splitInput[i].slice(1, splitInput[i].length).toLowerCase();
    }
  } else if (naming === "Camel Case") {
    resultString +=
      splitInput[0][0].toLowerCase() +
      splitInput[0].slice(1, splitInput[0].length).toLowerCase();

    for (let i = 1; i < splitInput.length; i++) {
      resultString +=
        splitInput[i][0].toUpperCase() +
        splitInput[i].slice(1, splitInput[i].length).toLowerCase();
    }
  } else {
    result.textContent = "Error!";
    return;
  }

  result.innerText = resultString;
}
