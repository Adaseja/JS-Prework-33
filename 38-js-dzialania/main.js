function sum(num1, num2) {
  let sum = num1 + num2;
  if (sum < 0) {
    console.log("Wynik jest nieprawidłowy");
  } else {
    console.log(`Wynik dodawania wynosi ${sum}`);
  }
  return sum;
}
sum(2, 5);

function multiply(num1, num2) {
  let result = num1 * num2;
  if (result < 0) {
    console.log("Wynik jest nieprawidłowy");
  } else {
    console.log(`Wynik mnożenia wynosi ${result}`);
  }
  return result;
}
multiply(2, 5);

function minus(num1, num2) {
  let minus = num1 - num2;
  if (minus < 0) {
    console.log("Wynik jest nieprawidłowy");
  } else {
    console.log(`Wynik odejmowania wynosi ${minus}`);
  }
  return minus;
}
minus(10, 12);
