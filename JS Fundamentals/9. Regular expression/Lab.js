function matchFullname(string) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let result = string.match(pattern); // kogato nqmame grupi, vikame samo match za suvpadeniqta
    console.log(result.join(" "));

    // let result = [...string.matchAll(pattern)].map(m => m[0]);
    // console.log(result.join(" "));

    // let result = [];
    // let match = pattern.exec(string);
    // while (match !== null) {
    //     result.push(match[0]);
    //
    //     match = pattern.exec(string);
    // }
    // console.log(result.join(" "));
}
// matchFullname("\"Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov\"");



function matchPhoneNumber(text) {
    let validPhones = [];
    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    let validPhone;

    while ((validPhone = pattern.exec(text)) !== null) {
        validPhones.push(validPhone[0]);

    }
    console.log(validPhones.join(", "));
}
// matchPhoneNumber("\"+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222\"")



function matchDates(text) {
    let pattern  = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let validDate;

    while ((validDate = pattern.exec(text)) !== null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
// matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");












