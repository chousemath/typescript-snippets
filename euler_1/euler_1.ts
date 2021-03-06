// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

let divisible = (value: number) => value%3 === 0 || value%5 === 0;
let sum = 0;
for (let i = 1; i <= 500; i++) {
  let opposite = 1000-i;
  if (i === opposite && divisible(i)) {
    sum += i;
  } else {
    if (divisible(i)) sum += i;
    if (divisible(opposite)) sum += opposite;
  }
}
console.log(sum);
