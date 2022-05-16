var saisie = "base";
var i = 1;

while (saisie !== "oui" && saisie !== "non") {
  saisie = prompt("Voulez vous jouer a ni Oui ni Non ?");
  document.write(
    "Votre réponse du tour" +
      "&nbsp" +
      i +
      "&nbsp" +
      "est : " +
      '"' +
      saisie +
      '"' +
      "<br>"
  );
  i++;
}
i--;
document.write(
  "<br>" +
    "Vous avez perdu !" +
    " Nombre de tour : " +
    i +
    "&nbsp" +
    "Désoler.."
);
