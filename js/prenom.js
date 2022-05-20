var nom = [];

for (var i = 0; i <= 11; i++) {
  nom[i] = prompt("taper un prenom");
  document.write("nom taper : " + nom[i] + "<br>");
}

nom.sort();

for (var a = 0; a < nom.length; a++) {
  document.write("<br>" + "Prénom trier : " + nom[a]);
}
