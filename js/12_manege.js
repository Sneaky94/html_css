var question = prompt("Combien de tours ?");
var compteur = 1;

while (compteur <= question) {
  document.write("Manége 1 tour n° : " + compteur + "<br/>");
  compteur++;
}
document.write("<br>");

var nbTours = prompt("Combien de tours ?");
for (var tour = nbTours; tour <= nbTours; tour++) {
  document.write("Manége 2 tour n° : " + tour + "<br/>");
  tour++;
}
