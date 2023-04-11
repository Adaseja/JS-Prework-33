document
  .getElementById("showDataButton")
  .addEventListener("click", function () {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;

    document.getElementById("name").textContent = "Imię: " + firstName;
    document.getElementById("surname").textContent = "Nazwisko: " + lastName;
    document.getElementById("phone").textContent =
      "Numer telefonu: " + phoneNumber;
  });
