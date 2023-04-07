let opisParagraph = document.getElementById("opis");

let opisButton = document.querySelector("#opis-button");

opisButton.onclick = function () {
  opisParagraph.textContent = "To jest opis produktu";
};
