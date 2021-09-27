
function editElement(reference, match, replace) {
    const text = reference.textContent;
    const matcher = new RegExp(match, 'g');
    reference.textContent = text.replace(matcher, replace);
}