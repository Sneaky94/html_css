var tva = 1.2;
var prixHT = prompt ("Question: prix HT");
var prixTTC = prixHT * tva;
document.getElementById("prixHT").textContent=prixHT;
document.getElementById("prixTTC").textContent=prixTTC;