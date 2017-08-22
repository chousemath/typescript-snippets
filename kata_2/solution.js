function capitalize(word) {
    return word.charAt(0).toUpperCase().concat(word.slice(1));
}
function jadenize(input) {
    return input.split(' ').map(capitalize).join(' ');
}
console.log(jadenize('hello i am jaden smith'));
