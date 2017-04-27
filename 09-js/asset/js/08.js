/*les conditons*/

//--- declare la majorité légale
var Mjoritelegal = 18;

//--creé une foction pour demander l'age
function verifieage() {
    //-- demande de l'age de mon visiteur et le retourner.
   return parseInt(prompt("bonjour , quel age avez vous ?" ,"<saisissez votre age>"));
}
    
    if(verifieage() >= Mjoritelegal) {
        // jafiiche un message de bienvenu
        alert("bienvenu sur mon site internet pour les majeur...");
        
    } else {
        //-- j'affiche une allerte  
        alert("Attention vous devez etre majeur pour accéder à ce site");
        //-- je redirige vers google
        document.location.href ="https://www.google.fr/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=google+.fr";
    }
 // les operateur de comparaison*/
// "==" signifie égale à il permet de vérifier que deux variables sont identiques
 // "===" signifie strictement egal à il va comparer la valeur et aussi le type de donnéé
// "!=" signifie différent de
// "!==" strictement différent de


// exercice----*
/*j'arrive sur un espace sécurisé au moyen d'un email et d'un mot de passe.
je doit saisir mail et mot de passe*/
var email, mdp;

email = "wf3@h1-media.fr";
mdp ="wf3";



//1-- demander au user de saisir son mail
var emaillogin = prompt("bonjour, quel est votre email ?" , "<saisissez votre email>");
// je vérifie si l'email saisie corresspond à celui de la base de donnée email
if(emaillogin === email) {
    // si tous est ok je continu la verification de mot de pass
    // demande a mon user son mot de passe
     var mdplogin = prompt("votre mot de passe <saisissez votre mot de passe>");
     if(mdplogin === mdp){
         alert("bienvenue user !");
     }  else{
         // je lance l'alert si le mdp ne correspond pas
         alert("attention mot de passe non reconnue");
     }
     
} else {
    // si non le mail ne correspond pas je lance une alert
    alert("attention adresse mail non reconnu")
}
     /* _______ les opérateurs logiques_________*/
// l'operteur ET && ou AND 
//  si la combinaison emaillogin et email et la combinaison mdplogin et mdp correspond.
//  dans cette condition ,les 2 doivent obligatoirrement correspondre pour etere validée
if((emaillogin === email) && (mdplogin === mdp))

    
//--- ici dans cette condition au moins l'une des 2 doits correspondre pour etter validée.
    
 if((emaillogin === email) || (mdplogin === mdp))  
     
// l'opérateur "!"  : qui signifie le contraire de  ou encore not
     
     var isuserApproved = true;
if(!isuserApproved)  {
    //si le user n'est pas approuvé
}
//revien également à ecrire
if(isuserApproved==false){}
    

    
    





    
    