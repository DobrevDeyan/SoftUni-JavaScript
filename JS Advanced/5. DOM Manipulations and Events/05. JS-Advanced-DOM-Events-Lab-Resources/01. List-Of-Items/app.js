function addItem() {
    const input = document.getElementById("newItemText");

    const newElement = document.createElement("li");
    newElement.textContent = input.value;

    document.getElementById("items").appendChild(newElement);
    input.value = '';
}


