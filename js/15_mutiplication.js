var saisie = prompt("Entrez un chiffre compris entre 2 et 9:");
while (saisie > 1 || saisie < 10) {
  if (saisie >= 2 && saisie <= 9) {
    for (var i = 1; i <= 10; i++) {
      var resultat = saisie * i;
      document.write(saisie + " x " + i + " = " + resultat + "<br />");
    }
    break;
  } else {
    saisie = prompt("Entrez un chiffre compris entre 2 et 9 : ");
  }
}
