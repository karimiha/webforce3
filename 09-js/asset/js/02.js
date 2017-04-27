// déclarer un tableau numérique
var monTableau = [];
var myArray = new Array;

// affecter des valeurs à un tableau numérique
myArray[0] = "john";
myArray[1] = "rudy";
myArray[2] = "theva";
myArray[3] = "carol";
// afficher le contenu de mon tableau numérique dans la consol

console.log(myArray[2]); // teva
console.log(myArray[0]);//--john
console.log(myArray);// affiche toutes les données

// -- déclarer et affecter des valeur à un tableau numérique

var nosprenonms = ["nabila", "karim", "johrdan", "hanane"];
console.log(nosprenonms);
console.log(typeof nosprenonms);

//declarer et affecter une valeur à un objet (pas de tableau associatif en js)

var coordonnee = {
    "prenom"    :"karim",
    "nom"       :"ihadadene",
    "age"       :43
}
console.log(coordonnee);
console.log(typeof coordonnee);


// comment cree et affecter des valeurs à un tableau de 2 dimension.
//-- ici , il s'agit de tableau numériques
var listedenoms   =["ihada", "karaf", "maidi"];
var listeprenoms  =["karim","hanane", "nabila"];
// je vais créé un tableau a 2 dimensions à partir de mes deux tableaux précédents
var Annuaire = [listedenoms, listeprenoms];
console.log(Annuaire);

//Afficher un nom et un prénom sur ma page html
document.write(Annuaire[0][1]);
document.write(" ");
document.write(Annuaire[1][1]);


/* créz un tableaux à 2 dimmention appellé annuairedesstagiaires qui contiendera toutes les coordonéés 
nom prénom et télé*/
/*var nom =["karaf", "ihada", "maidi", "thiaw" ];
var prenom =["hanane", "karim", "nabila", "abdullah"];
var tel =["06 14 12 12", "06 17 15 17 14","07 15 14 12","05 12 12 14 12"];
 var annuairedesstagiaire =[nom, prenom, tel];
console.log(annuairedesstagiaire);*/
 var annuairedesstagiaire =[
     {"prenom":"hanane", "nom" :"karaf", "tel" :"010 20 1020"},
     {"prenom":"karim", "nom" :"ihada", "tel" :"012 20 1020"},
     {"prenom":"nabila", "nom" :"maidi", "tel" :"015 20 1020"},
     {"prenom":"abdullah", "nom" :"thiaw", "tel" :"017 20 1020"},
 ];
console.log(annuairedesstagiaire);


   
    var couleur =['bleu', 'jaune', 'vert','ornge'];
    // si je souhaite ajouter un élément dans mon tableau.
    //  je fais appel fonction push() qui me renvoi le nombre d'element de mon tableau
// la fonction unshit() permt d'ajouter un ou plusieur en début de tableau
  /* recuperer et sortir un dernier element*/
// la fonction pop( me permet de supprimer le dernier élement de mon tableau et d'en recuperer la valeur)
// je peux accessoirement recuperer cette valeur dans une variable 
var mondernierelement = couleur.pop();
// la mem chose est possible avec le premier élément en utilisant la fonction shift()
// la fonction splice()vous permet de fair sortir un ou plusieurs éléments de votre tableau

/**/














