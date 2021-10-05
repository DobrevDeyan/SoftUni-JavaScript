function create(words) {
    const content = document.getElementById("content");

    for (let word of words) {
        const div = document.createElement("div");
        const paragraph = document.createElement("p");

        paragraph.textContent = word;
        paragraph.style.display = "none";

        div.appendChild(paragraph);
        div.addEventListener("click", reveal);
        content.appendChild(div);
    }

    function reveal(event) {
        if (event.target.tagName === "DIV" && event.target !== content) {
            event.currentTarget.children[0].style.display = "";
        }
    }
}
