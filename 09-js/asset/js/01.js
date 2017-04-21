alert("wow tu es sur ma page");
//deux slash pour fair un commentair uniligne.

/*ici je peux fair un commentaire 
sur plusieur lignes
*/
//__1:déclarer une variable en js
var prenom;
//__2:Affecter unr valeur
prenom="karim";

//__3 :Affecter la valeur dans la console.
console.log(prenom);


/*-----------------------------------------------------
--------les types de variables-------------------------
------------------------------------------------------*/

//__ ici, typeof me permet de connaitre le type de ma variable
console.log(typeof prenom);
//__déclaration d'un nombre
var Age =40;
//--Afficher dans la console
console.log(Age);
//__connaitre son type
console.log(typeof Age);

/*---------------la portee des variables------------
les variables déclarer directement à la racine du fichier js sont appelées variables
GLOBALES.

La portée des variables globales s'arrets au fichier.
si je change de pages, les variables n'existe plus,


Les variables qui sont déclarer à l'interieurs d'une fonction sont appelé variables LOCALES.
Elles sont disponible uniquement à l'interieur de ma fonction.


Depuis ECMA6, vous pouvez déclarer une variable avec le mot-clé"let".
votre variable, sera alors ccessible uniquement dans le bloc dans lequel elle est contenu(déclarer)

si elle est déclarer dans une fonction ,elle sera disponible que dans le bloc de la fonction

si elle est déclarer dans une condition, elle sera disponible que dans le bloc de la condtion,...*/

//--Les Variables FLOAT
var unedecimale =-2.54;
console.log(unedecimale);
console.log(typeof unedecimale);

//--les booléen (vrai/faux)
var unbooleen = false; //--true
console.log(unbooleen);
console.log(typeof unbooleen);
// les costantes
/* la déclaration CONST permet de créer une costante accessible uniquement en lecture .sa valeur ne pourra 
pas etre modifiere par des réafictations ultérieurs ,une costante ne peux pas etre déclareé à nouveau*/

// généralement par covention, les constantes sont en majuscules.
const PAYS = "france";
// je ne peux pas faire cela...
//PAYS = "algerie";

//uncaught type: assignement to constant variable.
/*--------------------------------------------
               la minute info
au fur et à mesur que l'on affecte ou réaffecte
des valeurs à une variable ,celle ci prend la nouvelle
valeur et le nouveu type
en javascript (ECMA script)'  les variables sont auto typées
pour convertir une variable de type number en string et string en nunmber
je peux utiliser les fonction natives de javascript*/
var unnombre = "24"
console.log(unnombre);
console.log(typeof unnombre);
//la foction parseInt() pour retourner un entier à partir de ma chaine de caractere
unnombre = parseInt(unnombre);
console.log(unnombre);
console.log(typeof unnombre);

// je réafect une valeur à ma variable
unnombre =" 12.5";
console.log(unnombre);
console.log(typeof unnombre);
//la fonction parsetFloat() permet de retournet un float sur la base d'une chaine de caracter
unnombre = parseFloat(unnombre);
console.log(unnombre);
console.log(typeof unnombre);
// converstion d'u nombre en string avec tosting()
var unnombreenstring = 10;
var machainedecaractere = unnombreenstring.toString();
console.log( unnombreenstring);
console.log(typeof unnombreenstring);
console.log(typeof machainedecaractere);




//---conversion d'un nombre en string




 



