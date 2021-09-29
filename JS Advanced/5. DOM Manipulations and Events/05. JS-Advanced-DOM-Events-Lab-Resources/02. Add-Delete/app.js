function addItem() {
    const input = document.getElementById("newItemText");

    const newElement = document.createElement("li");
    newElement.textContent = input.value;

    const button = document.createElement("a");
    button.href = "#";
    button.textContent = "[Delete]";
    button.addEventListener("click", removeElement);

    newElement.appendChild(button);
    document.getElementById("items").appendChild(newElement);

    input.value = '';

    function removeElement(event) {
        const parent = event.target.parentNode;
        parent.remove();
    }
}





