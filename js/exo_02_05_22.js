// var monaieExercice = ("je suis en train de faire mon exercice");

// document.write(monaieExercice);

// console.log(monaieExercice);

// alert(monaieExercice)

// var monChiffre = 2022;
// document.write(typeof monChiffre + "<br>");

// var maDecimale = 3.14;
// document.write(typeof maDecimale + "<br>");

// var maChainedeCharactere = "57.12";
// console.log(typeof maChainedeCharactere);
// document.write(maChainedeCharactere + "&nbsp");

// maChainedeCharactere = parseFloat (maChainedeCharactere);
// console.log(typeof maChainedeCharactere);
// document.write(maChainedeCharactere + "&nbsp");

// maChainedeCharactere = parseInt (maChainedeCharactere);
// console.log(typeof maChainedeCharactere);
// document.write(maChainedeCharactere + "&nbsp");

// maChainedeCharactere = maChainedeCharactere.toString();
// console.log(typeof maChainedeCharactere);
// document.write(maChainedeCharactere);

// var annee = 2017;
// var future = 3;
// var calcul = annee + future;
// console.log(calcul);
// document.write(calcul + "&nbsp &nbsp" + calcul + "<br>");

// var nb1, nb2, resultat;
// nb1 = 10;
// nb2 = 5;

// resultat = nb1 + nb2;
// console.log(resultat);
// document.write(resultat + "<br>");

// var resultatSoustraction = nb1 - nb2;
// console.log(resultatSoustraction);
// document.write(resultatSoustraction + "<br>");

// var resultatMultiplication = nb1 * nb2;
// console.log(resultatMultiplication);
// document.write(resultatMultiplication + "<br>");

// var resultatDivision = nb1 / nb2;
// console.log(resultatDivision);
// document.write(resultatDivision + "<br>");

// var resultatModulo= nb1 % nb2;
// console.log(resultatModulo);
// document.write(resultatModulo + "<br>");

// var saisie = prompt("Entrez votre saisie : ");

// var resultat = parseFloat(saisie);
// if (isNaN(resultat)) {
//     document.write(saisie + " est une chaine de caractere peut-etre composée de chiffre");
// } else {
//     var finalResalt = resultat % 7;
//     if (finalResalt == 0) {
//         document.write(saisie + " est un multiple de 7");
//     } else {
//         document.write(saisie + " n'est pas un multiple de 7 et le résultat du modulo est : " + finalResalt);
//     }
// }



// var motDePasse = prompt("Taper votre mot de passe");
// var code = ["Poles2022","123456","949494"];

// if (motDePasse === code[0] || motDePasse === code[1] || motDePasse === code[2] ){
//     var prenom = prompt("Entrez votre prenom");
//     document.write("Acces autorisée" + "<br>" + "<br>")
//     document.write("Bonjour , " + prenom + "<br>" + "Bravo exercice reussi avec succès! 10/10");
// } else {
//     alert("Mot de passe incorrect")
//     document.write("Acces refusée" + "<br>" + "<br>" + "1 - Si vous utilisez un outil de gestion des mots de passe avec une fonctionnalité de remplissage automatique des champs, effacez le mot de passe pré-enregistré puis tapez votre mot de passe manuellement." + "<br>" + "2 - Vérifiez si vos majuscules ne sont pas activées. Le champ du mot de passe est sensible à la casse." + "<br>" + "3 - Si vous avez plusieurs langues ou configurations de clavier installées, assurez-vous d'utiliser la bonne." + "<br>" +  "4 - Essayez de taper votre mot de passe dans un fichier-texte pour voir ce que vous entrez.")
// }



// var test = prompt("multiple de 5");
// var test2 = 5
// var calcul = test * test2
// document.write(calcul + "<br>")

// var calcul2 = calcul % 3
// document.write(calcul2) 


// var nombre1 = 25;
// var nombre2 = "arbre";

// var nombre3;

// nombre3 = nombre1;
// nombre1 = nombre2;
// nombre2 = nombre3;

// document.write(nombre1 + "<br>" + nombre2);

var exemple = "example"
for (var i = 0; i<=9; i++){
    document.write(exemple + "<br>");
    exemple = exemple + "example";
}