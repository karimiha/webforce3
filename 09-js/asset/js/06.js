/*#######les fontions##########*/



//--declare une fonction
function Ditbonjour(){
    //**lors de l'appel de la fonction les instructions ci dessous seront exécutées.
    alert("bonjour !");
    
}
Ditbonjour();


function bonjour(prenom){
    // ici prenom est une variable à la portéé locale cette variable ne sera accessible que dans cette fonction !
    document.write("<p>hello<srong>" +" " + prenom + "</stron> ! </p>");
    
} 
/*Appeler /utiliser une fonction avec un paramètre*/
bonjour("karim");

/*exercice :
crée une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre*/
  function addition(nb1, nb2){
     /*le mot clé return permet de renvoyer une valeur en sortie*/ 
      var resultat = nb1 + nb2;
      return resultat;
  }  
   var resultat = addition(10, 5);
 document.write("<p>" + resultat + "</p>");
