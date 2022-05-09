var nb1 = Number(prompt("entrez le 1er nombre : "));
var nb2 = Number(prompt("entrez le 2em nombre : "));
var nb3 = Number(prompt("entrez le 3em nombre : "));

if (nb1 > nb2){
    nb1 = nb3 * 2;
}else if(nb3 < nb2){
    nb1++;
    if (nb1 == nb3){
        nb1 = (nb3 * 3) + nb1;
    }
}else{
    var prenom = prompt("Quel est ton premon ?");
    document.write("Felicitation " + prenom + " tu a compris JS " + "<br>");
} 
document.write("nb1 : " + nb1 + "<br>" + "nb2 : " + nb2 + "<br>" + "nb3 : " + nb3);
