// Write a function that returns an array of numbers from 1 to 100.
// The function should be able to be called with or without arguments.

// If no arguments are given, each number in the array divisible by 3
// should be replaced with the word 'Fizz', and each number in the array
// divisible by 5 should be replaced with the word 'Buzz'. If the number is
// divisble by both 3 and 5, then it should be replaced with 'FizzBuzz'.

// The function should also be able to take up to 4 arguments. The first and
// second arguments are strings, which should be 'Fizz' and 'Buzz' by default.

// The third and fourth arguments are integers and and should be 3 and 5 by default.

function fizzbuzz(firstPhrase: string = 'Fizz', secondPhrase: string = 'Buzz', firstNum: number = 3, secondNum: number = 5): Array<any> {
  let arr: Array<any> = []
  for (let i = 1; i < 101; i++) {
    if (i % firstNum === 0 && i % secondNum === 0) {
      arr.push(firstPhrase.concat(secondPhrase))
    } else if (i % firstNum === 0) {
      arr.push(firstPhrase)
    } else if (i % secondNum === 0) {
      arr.push(secondPhrase)
    } else {
      arr.push(i)
    }
  }
  return arr
}
console.log(fizzbuzz())
