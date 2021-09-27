 function solve() {
    const button = document.getElementById("searchBtn");
    button.addEventListener("click", search);

    function search() {
        const input = document.getElementById("searchField");
        let inputText = input.value.toLowerCase();
        let tableElements = Array.from(document.querySelectorAll("tbody tr"));

        tableElements.forEach((element) => {
            let text = element.textContent.toLowerCase();
            if (text.includes(inputText)) {
                element.classList.add("select");
            } else {
                element.classList.remove("select");
            }
        });

        input.value = " ";
    }
}