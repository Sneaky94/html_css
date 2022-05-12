var saisie = prompt("Entrez une valeur comprise entre 1 a 12 : ");

if (saisie === "1") {
  document.write("le chiffre 1 représente le mois de janvier / 31 jours");
} else if (saisie === "2") {
  document.write("le chiffre 2 représente le mois de fevrier / 28 jours");
} else if (saisie === "3") {
  document.write("le chiffre 3 représente le mois de mars / 31 jours");
} else if (saisie === "4") {
  document.write("le chiffre 4 représente le mois de avril / 30 jours");
} else if (saisie === "5") {
  document.write("le chiffre 5 représente le mois de mai / 31 jours");
} else if (saisie === "6") {
  document.write("le chiffre 6 représente le mois de juin / 30 jours");
} else if (saisie === "7") {
  document.write("le chiffre 7 représente le mois de juillet / 31 jours");
} else if (saisie === "8") {
  document.write("le chiffre 8 représente le mois de aout / 31 jours");
} else if (saisie === "9") {
  document.write("le chiffre 9 représente le mois de septembre / 30 jours");
} else if (saisie === "10") {
  document.write("le nombre 10 représente le mois de octobre / 31 jours");
} else if (saisie === "11") {
  document.write("le nombre 11 représente le mois de novembre / 30 jours");
} else if (saisie === "12") {
  document.write("le nombre 12 représente le mois de decembre / 31 jours");
} else {
  document.write(
    "⚠ Erreur de syntaxe ⚠ Veullez saisir un chiffre ou un nombre compris entre 1 et 12 merci ⚠ Erreur de syntaxe ⚠"
  );
}
