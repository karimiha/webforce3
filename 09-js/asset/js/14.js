/* Les evenemment 
les évenelment vont permettre de déclencher 
une fonction , c'est à dire : une série d'instructions
, suite à une action de mon utilisateur
Objectif : etre en mesur de capturer ces évenements
afin d'exécuter une fonction'*/

// les évenements : mousse(souris)
// click : au clic sur élément
//mouseenter : la souris passe par dessus de la zone qu'occupe un élement
// mousseleave : la souris sort de cette zone

//______les Evenements  : KEYBOARD ( clavier)

// keydown : une touche de clavier est enfoncéé
// keyup : une touche à été relachée 

//-- les évenements  :WINDOW(fenetre)

//-- scroll : défilement de la fenetre
//__resize : redimenssionnement de la fenetre

//les évenements FORM(formulaire)

// change : pour les élements <input> ,<select>,<textarea>
// submit  :à l'envoie d'un formulaire

// les évenements  :DOCUMENT
   // DOMContentloaded : executer lorsque le document html est complètement
// chargéé sans attendre le css et les images

                /*------------les ecouteur d'evenement*/

// pour attaché un évenement à un élement, ou autrement dit,pour déclarer un écouteur d'evenement
// qui se chargera de lancer une action, c'est a dire une fonction pour un évenement donné,je
//vais utiliser la syntaxe suivante.
var p = document.getElementById("monparagraphe");
 console.log(p);
// je souhaite que mon paragraphe soit rouge au clic de la souri
// 1 : je défini une fonction chargéé d'executer cette action.

function changecolortored(){
    p.style.color = "red";
}

// je déclare un ecouteur qui se chargera d'appeler la fonction au déclenchement de l'évenement.

p.addEventListener("click", changecolortored);

/* exercice A l'aide de javascript  cree un champ "input"
type texte avec un Id unique, Affichez ensuite dans une alert la saisie de l'utilisateur.'*/

 // creation champs input
 var  input = document.createElement('input');

// attribution d'un attribut
 input.setAttribute('type', 'text');

// attribution d'un ID 
input.id = "Moninput";

// ajout de l'élément dans la page.
document.body.appendChild(input);

// creation d'un écouteur
 input.addEventListener('change', voirlasaisiedemoninput);
 function voirlasaisiedemoninput(){
     alert(input.value);
 }



















