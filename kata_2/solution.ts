function capitalize(word: string): string {
  return word.charAt(0).toUpperCase().concat(word.slice(1))
}
function jadenize(input: string): string {
  return input.split(' ').map(capitalize).join(' ')
}
console.log(jadenize('hello i am jaden smith'))
