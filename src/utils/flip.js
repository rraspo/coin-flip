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
  if (n >= 1000000 || n <= 0)
    return "randomNumber Parameter must be between interval: (0, 1000000)";
  else if (n === 1) return 0;

  let result = 0;
  const nBinary = n.toString(2);
  let randomBits = Array(nBinary.length)
    .fill(0)
    .map(() => {
      return flip() === true ? 1 : 0;
    });
  result = parseInt(randomBits.join(""), 2) & n;
  if (result === n) result -= 1;
  return result;
}

function flip() {
  return Math.random() >= 0.5;
}

/*
An example execution of your function:

randomNumber(500) // returns 123
randomNumber(1) // returns 0
randomNumber(500) // returns 466
randomNumber(1000001) // throw error
*/
