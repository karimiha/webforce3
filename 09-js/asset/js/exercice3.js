/* A partie du tableau fourni, vous devez mettre  en place un sustème d'authentification. Aprés
 avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE et aprés AVOIR VéRIFIE SES INFORMATIONS ? VOUS LUI SOUHAITEZ LA BIENVENUE 
 AVEC SON NOM ET PRNOM(DOCUMENT.WRITE);
 En cas d'échec vous affichez une alert pour l'informez dr l'erreur. 
 vous deverez préciser s'il s'agit d'une erreur au niveau du mail ou du mot de passe*/
var basesdedonnes =  [
    {'prenom': 'hugo','nom':'liegeard', 'email' : 'wf3@hl-media.fr','mdp': 'wf3'},
    {'prenom': 'karim','nom':'iha', 'email' : 'wf35@hl-media.fr','mdp': 'wf2'},
    {'prenom': 'nacer','nom':'viva', 'email' : 'wf22@hl-media.fr','mdp': 'wf1'},
    {'prenom': 'omar','nom':'ffe', 'email' : 'wf11@hl-media.fr','mdp': 'wf0'},
    {'prenom': 'rachid','nom':'kkk', 'email' : 'wf365hl-media.fr','mdp': 'wf5'},
    
]
    
                      
  // on demande au user son mail et mot de passe

    var emaillogin = prompt("bonjour, quel est votre email ?" , "<saisissez votre email>");
// je vérifie si l'email saisie corresspond à celui de la base de donnée email
    for(i = 0 ;i< basesdedonnes.length; i++){
        if(emaillogin==basesdedonnes.email){
            var mdplogin = prompt("saisissez votre mot de pass")
         else {
    // si non le mail ne correspond pas je lance une alert
    alert("attention adresse mail non reconnu")
}
        }
    }
        

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

    

   