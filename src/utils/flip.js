/*
You must implement a randomNumber(n) function that 
generates a random number greater than or equal to 0, and less than input n.

n must be greater than 0
n must be less than 1,000,000
Your only source of randomness must be the provided flip() function
You cannot use Math.random in your implementation
You can use Google to figure out how to do this
*/
export function randomNumber(n) {
  const MAX = 1000000;
  const MIN = 0;
  let result = MIN;
  if (n >= MAX || n <= MIN) return `n must be between: (${MIN}, ${MAX})`;
  else if (n === MIN + 1) return result;

  const randomBits = Array(n)
    .fill(0)
    .map(() => {
      return flip() === true ? 1 : 0;
    })
    .reduce((previous, current) => {
      return previous + current;
    });

  result = randomBits * Date.now();
  result = middleSquares(result);
  result = Math.floor(result / MAX * n);
  return result;
}

function flip() {
  return Math.random() >= 0.5;
}

function middleSquares(seed) {
  let result = String(seed * seed);
  return result.substring(result.length / 2 - 3, result.length / 2 + 3);
}

/*
An example execution of your function:

randomNumber(500) // returns 123
randomNumber(1) // returns 0
randomNumber(500) // returns 466
randomNumber(1000001) // throw error
*/
