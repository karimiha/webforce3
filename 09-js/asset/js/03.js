/*la cocatenation*/


var debutphrase        = " aujourdui ";
var datdejour          = new Date();
var suitedephrase      = " sont présents : ";
var nombredestagiaires = 11;
var findephrase        = "stagiaires.<br>";

//-- nous souhaitos ,grace à la concatenation, afficher tout ce petit monde, en un seul morceau !
document.write(debutphrase +":"+ datdejour.getDate() + "/" + (datdejour.getMonth() + 1 ) + "/" +
               datdejour.getFullYear() + suitedephrase +  nombredestagiaires + findephrase);


/*exercice :
creér une concatenation à partir des éléments suivant:*/

var phrase1 = "je m'appel ";
var phrase2 ="xxx et j'ai ";
var age     =00;
var phrase3 = " ans !";
document.write(phrase1 +  phrase2 + age + phrase3 );