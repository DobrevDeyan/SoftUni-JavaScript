function contextPrint() {
  console.log(this);
}

function myFunc() {
  obj.contextPrint();
}

const obj = {
  name: "Peter",
  contextPrint,
};
// obj.contextPrint();
// myFunc();

const extractedFunc = obj.contextPrint;
// extractedFunc();

document.querySelector("button").addEventListener("click", obj.contextPrint);
