for (let i = 1; i < 101; i++) {
  let output = i
  if (i % 3 === 0 && i % 5 === 0) {
    output = "FizzBuzz";
  }
  else if (i % 3 === 0) {
    output = "Fizz";
  }
  else if (i % 5 === 0) {
    output = "Buzz";
  }
  console.log(output);
}
