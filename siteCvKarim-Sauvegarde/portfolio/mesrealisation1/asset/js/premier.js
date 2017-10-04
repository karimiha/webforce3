// -- 1 : Attente que le DOM soit chargé.
       $(function() {
           // -- 2 : Ecouter l'évènement "submit" du Formulaire.
           $('#MonForm').on('submit', function(a) {
               // -- 3 : Stopper l'envoi du Formulaire
               a.preventDefault();
              //  récupération des champs a vérifier
              select = $('#select');
              message = $('#message');
              // vérification
              var infovalid = true;
              // vérification de selection
              if(select.val().length==0){
                infovalid = false;
              }
              if(message.val().length==0){
                infovalid = false;
              }
              else {
                infovalid = true;

              }
            });
