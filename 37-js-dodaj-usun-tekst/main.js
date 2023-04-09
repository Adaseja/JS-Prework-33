const dodajBtn = document.getElementById("dodaj");
const usunBtn = document.getElementById("usun");
const tekst = document.getElementById("text");

dodajBtn.addEventListener("click", function () {
  tekst.textContent = "Udalo sie! Dziala!";
});

usunBtn.addEventListener("click", function () {
  tekst.textContent = "";
});
