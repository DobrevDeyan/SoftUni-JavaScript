function addItem() {
  const input = document.getElementById("newItemText").value;
  const inputVal = document.getElementById("newItemValue").value;
  const dropDownMenu = document.getElementById("menu");

  const option = createElement("option", input, inputVal);
  dropDownMenu.appendChild(option);
  clearInputs();

  function createElement(tagname, text, value) {
    const element = document.createElement(tagname);
    element.textContent = text;
    element.value = value;

    return element;
  }
  function clearInputs() {
    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
  }
}
