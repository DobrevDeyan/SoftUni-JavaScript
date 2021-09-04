function characters(string) {
    for (let stringElement of string) {
        console.log(stringElement);
    }
}
// characters('AWord');



function substring(string, startIndex, count) {
    let result;

    result = string.substring(startIndex, startIndex + count);

    console.log(result);
}
// substring("ASentance", 1, 8);



function censoredWords(text, word) {
    let found = text.includes(word);

    while (found) {
        text = text.replace(word, "*".repeat(word.length));
        found = text.includes(word);
    }
    console.log(text);
}
// censoredWords("A small sentence with some words", "small");



function countStringOccurrences(text, string) {
    // let words = text.split(" ");
    // let counter = 0;
    // for (let word of words) {
    //     if (word === string) {
    //         counter++;
    //     }
    // }
    // console.log(counter);

    // string = ` ${string} `;
    // text = ` ${text} `;
    //
    // let count = 0;
    // let index = 0;
    //
    // let found = text.indexOf(string);
    //
    // while (found != -1) {
    //     count++;
    //     index = found + 1;
    //     found = text.indexOf(string, index);
    // }
    //
    // console.log(count);

    console.log(text.split(" ").filter(x => x === string).length);
}
// countStringOccurrences("This is a word and it also is a sentence", "is");