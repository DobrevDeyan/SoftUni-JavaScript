function solve() {
  let buttons = document.getElementsByTagName("button");
  let textArea = document.getElementsByTagName("textarea")[0];

  let list = new Map();

  Array.from(buttons).forEach((b) => {
    b.addEventListener("click", (event) => {
      if (event.target.className === "add-product") {
        let currentElement = event.target.parentElement;

        let currentElementPrice = currentElement.nextElementSibling.innerHTML;
        let typeOfElement =
          currentElement.previousElementSibling.children[0].innerHTML;

        if (!list.has(typeOfElement)) {
          list.set(typeOfElement, 0);
        }
        list.set(
          typeOfElement,
          list.get(typeOfElement) + Number(currentElementPrice)
        );
        textArea.value += `Added ${typeOfElement} for ${currentElementPrice} to the cart.\n`;
      } else {
        let totalPrice = Number(
          Array.from(list.values()).reduce((a, b) => +a + +b, 0)
        );
        textArea.value += `You bought ${Array.from(list.keys()).join(
          ", "
        )} for ${totalPrice.toFixed(2)}.`;

        let disButtons = Array.from(document.querySelectorAll("button"));
        disButtons.forEach((disButtons) => (disButtons.disabled = true));
      }
    });
  });
}
