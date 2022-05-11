var note = parseFloat(prompt("entrez votre note : "));

if (note < 10) {
  document.write("Bonjour, vous etes recalé !");
} else if (note >= 10 && note <= 12) {
  document.write("Bonjour, vous etes recu félicitation !");
} else {
  document.write("Bonjour, vous etes recu avec mention félicitation !");
}
