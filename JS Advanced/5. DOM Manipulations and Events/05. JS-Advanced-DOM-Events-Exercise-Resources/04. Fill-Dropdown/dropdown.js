function addItem() {

    const inputText = document.getElementById('newItemText').value;
    const inputValue = document.getElementById('newItemValue').value;
    const dropdownMenu = document.getElementById('menu');

    const option = createElement('option', inputText, inputValue);
    dropdownMenu.appendChild(option);
    clearInputs();

    function createElement(tagName, text, value) {
        const element = document.createElement(tagName);
        element.textContent = text;
        element.value = value;

        return element;
    }

    function clearInputs() {
        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';
    }
}