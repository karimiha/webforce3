/*la manipulation des contenu*/
// je souhaite récupérer mon lien ;comment procédé?
var google = document.getElementById("google");
console.log(google);

// A : le lien vers lequel pointe la balise
// l('le le lien vers lequel pointe la balise )
console.log(google.href)

// : l'id de la balise
console.log(google.id);
// c: la classe de la balise
console.log('la calasse de la balise :');
console.log(google.className)
// D ---- le texte de la balise (l'élément)
 
console.log('le texte de la balise');
console.log(google.textContent);

//--- Maintenant je souhaite modifier le contenu de mon lien
// comme une variable classique , je vais simplement venir affecter une nouvelle 
// valeur.
google.textContent = "mon lien vers google";

/* Ajouter un élement dans la page*/
// 2 methodes
    //1_____ la fontion documet creatElement() va permettre de générer
    // un nouvelle élément dans le DOM ; que je pourrais par la suite modifier avec 
    // les methodes que nous venons de voir.

// ps : ce nouvel élément est placé en mémoir

// Définintion de mon élement 
var  span = document.createElement('span');
// si je souhite lui donner un Id
span.id = "mon span";

// si je souhaite lui attribuer du contenu
 span.textContent = "Mon beau texte en js";

// la fonction appendChil()va me permettre de rajouter un enfant à un élement du DOM

google.appendChild(span);

/*-----------Exercice 
   En partant du travail déja réaliser sur la page.
    créez directement dans la page une balise <h1></h1> ayant comme contenu:
    TITRE DE MON ARTICLE
    
    dans cette balise, vous créérez un lien vers une url de votre choix
    
    BONUS : CE lien sera de couleur rouge et non souligné*/


/*var titre = document.createElement("<h1>titre de mon article</h1>");
console.log(titre);*/
// creation de la balise h1
var h1 =  document.createElement("h1");
// cration de la balise a
var a = document.createElement("a");

// je vais donner un titre a mon lien

a.textContent = "titre de mon article";

// je veux donner un lien à mon lien

a.href  = "#";
//--appendchild()

//------je met mon lien (a)dans mon h1
h1.appendChild(a);
// je met mon h1 dans ma page
document.body.appendChild(h1);
//__ correction du bonnus
  // je veux que mon lien soit de couleur rouge
  a.style.color = "red";
  a.style.textDecoration = "none";
  

























