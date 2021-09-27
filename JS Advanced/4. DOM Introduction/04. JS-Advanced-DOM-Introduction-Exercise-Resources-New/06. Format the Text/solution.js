function solve() {
    // const input = document.getElementById("input").value;
    // const output = document.getElementById("output");
    //
    // let textValue = input.split(".");
    // textValue = textValue.filter(x => x.length >= 1);
    // textValue = textValue.filter(x => x !== "");
    //
    //
    // for (let i = 0; i < textValue.length; i+=3) {
    //     let arr = [];
    //     for (let j = 0; j < 3; j++) {
    //         if (textValue[i + j]) {
    //             arr.push(textValue[i + j])
    //         }
    //     }
    //     let paragraph = arr.join(". ") + ".";
    //     output.innerHTML += `<p>${paragraph}</p>`
    // }

    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let textValue = input.split(".").filter(x => x !== "").map(y => y + ".");
    output.innerHTML = "";

    let paragraphNum = Math.ceil(textValue.length/3);

    for (let i = 0; i < paragraphNum; i++) {
        let finalString = textValue.splice(0, 3).join(", ");
        output.innerHTML += `<p>${finalString}</p>`;
    }
}