function calc() {
    const firstNumber = document.getElementById("num1");
    const secondNumber = document.getElementById("num2");
    const result = document.getElementById("sum");

    result.value = Number(firstNumber.value) + Number(secondNumber.value);
}
