function performOperations(a, b) {
  let addition = a + b;
  console.log("Wynik dodawania wynosi " + addition);

  let subtraction = a - b;
  console.log("Wynik odejmowania wynosi " + subtraction);

  let multiplication = a * b;
  console.log("Wynik mnożenia wynosi " + multiplication);

  if (addition < 0 || subtraction < 0 || multiplication < 0) {
    console.log("Wynik jest nieprawidłowy");
  }
}

performOperations(5, 3);
