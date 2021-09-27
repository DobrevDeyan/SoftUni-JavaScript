function colorize() {
    let row = document.querySelectorAll("table tr");
    let index = 0;

    // for (let rowElement of row) {
    //     index++;
    //     if (index % 2 === 0) {
    //         rowElement.style.background = "teal";
    //     }
    // }

    for (let i = 1; i < row.length; i+=2) {
        row[i].style.background = "teal";
    }
}