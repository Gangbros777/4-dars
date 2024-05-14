let RandomNumber = Math.round(Math.random() * 100);
alert(`Random number: ${RandomNumber}`);

for (let i = 1; i <= RandomNumber; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    alert("FizzBuzz");
  } else if (i % 3 === 0) {
    alert("Fizz");
  } else if (i % 5 === 0) {
    alert("Buzz");
  } else {
    alert(i);
  }
}