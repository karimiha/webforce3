 // on demande au user son pseudo
 var monForm = document.getElementById("monFormulaire");
 var membres = document.getElementById ("membres");
   
// je vérifie si le pseudo saisie existe dans la base de donnéés


      
    pseudo.addEventListener("keyup", verif);
      verif(){
              var pseudo = document.getElementById("pseudo");
              var psd = membres.pseudo;
        for (i =0 ; i <  membres.length ; i ++ )
            if ( psd == pseudo);
                {
                var notif=document.getElementsByClassName("pseudoError");
                }
                else
                {
                var notif="bon pseudo vous pouvez submittez";
                }

                 return notif;
                }
 
    
        

   

    
   
            
            
            
    
    
