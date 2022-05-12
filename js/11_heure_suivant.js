// initialise 3 boite de dialogue
var heure = prompt("entrez un heure : ");
var minute = prompt("entrez les minutes : ");
var seconde = prompt("entrez les secondes : ");

// condition principal roulette time incrementation
if (
  heure >= 0 &&
  heure <= 23 &&
  minute >= 0 &&
  minute <= 59 &&
  seconde >= 0 &&
  seconde <= 59
) {
  seconde++;
  // condition secondaire roulette time S 59 a 0 + incrementation + 1 minute
  if (seconde === 60) {
    seconde = 0;
    minute++;

    // condition secondaire roulette time M 59 a 0 + incrementation + 1 Heure
    if (minute === 60) {
      minute = 0;
      heure++;

      // condition secondaire roulette time H 24 a 0
      if (heure === 24) {
        heure = 0;
      }
    }
  }

  // Affichage sur la page du resultat de h + m + s
  document.write(
    "Dans une seconde il sera : " +
      heure +
      "h" +
      "&nbsp" +
      minute +
      "m" +
      "&nbsp" +
      seconde +
      "s"
  );
}
// Affichage message d'erreur
else {
  document.write("⚠ Erreur de syntaxe ⚠");
}
