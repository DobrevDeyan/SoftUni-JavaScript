function revealWords(string, input) {
    let words = string.split(", ");
    let template = input.split(" ");
    let result = input;
    let matchedWords = [];
    let matchedTemplate = [];

    for (let word of words) {
        for (let templateElement of template) {
            if (word.length === templateElement.length && templateElement.includes("*")){
                matchedWords.push(word);
                matchedTemplate.push(templateElement);
            }
        }
    }

    for (let i = 0; i < matchedWords.length; i++) {
        for (let matchedTemplateElement of matchedTemplate) {
            if (result.includes(matchedTemplateElement)) {
                result = result.replace(matchedTemplateElement, matchedWords[i++]);
            }
        }
    }
    console.log(result);
}
// revealWords('great', 'softuni is ***** place for learning new programming languages');
// revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');



function modernTimes(input) {
    let text = input.split(" ");

    for (let textElement of text) {
        if (textElement.startsWith("#") && textElement.length > 1) {
            let test = true;
            for (let char of textElement.substring(1)) {
                let code = char.charCodeAt(0);
                if (code < 65 || code > 122 || (code >= 91 && code <= 96)) {
                    test = false;
                    break;
                }
            }
            if (test) {
                console.log(textElement.slice(1));
            }
        }
    }
}
// modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');



function extractFile(path) {
    let name = path.split('\\').pop().split(".").slice(0, -1).join(".");
    let ext = path.split('\\').pop().split(".").pop();
    console.log(`File name: ${name}`);
    console.log(`File extension: ${ext}`);
}
// extractFile('C:\\Internal\\training-internal\\Template.pptx');
// extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');



function stringSubstring(word, text) {
    let tokens = text.split(' ');

    if (tokens.map(t => t.toLocaleLowerCase()).includes(word)) {
        return console.log(word);
    }
    console.log(`${word} not found!`)
}
// stringSubstring('javascript','JavaScript is the best programming language');
// stringSubstring('python', 'JavaScript is the best programming language');



function repeatingChars(text) {
    let result = text[0];

    for (let i = 1; i < text.length; i++) {
        if (text[i] !== text[i - 1]) {
            result += text[i];
        }
    }

    console.log(result);
}
// repeatingChars('aaaaabbbbbcdddeeeedssaa');
// repeatingChars('qqqwerqwecccwd');



function pascalCase(input) {
    let result = input[0];
    for (let i = 1; i < input.length; i++) {
        if (input[i] === input[i].toLocaleUpperCase()) {
            result += ", ";
        }
        result += input[i];
    }

    console.log(result);
}
// pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
// pascalCase('HoldTheDoor');
// pascalCase('ThisIsSoAnnoyingToDo');



function cutReverse(input) {
    let middle = input.length / 2;
    let first = input.substring(0, middle).split("").reverse().join("");
    let second = input.substring(middle).split("").reverse().join("");

    console.log(first);
    console.log(second);
}
// cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');
// cutReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');

