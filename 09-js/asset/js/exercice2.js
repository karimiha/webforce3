/*consigne*/
// cree un tableau 3D "premier trimestre" contenant la moyenne d'un etudiant pour plusieur matiere.
// nous aurons donc pour un etudiant, sa moyenne à plusieur matiere.
// par exemple : hugo liegeard :[francais: 12 , math 19 ; physique 4]
// vous allez cree au  minimum 5 étudiant 
// afficher sur la page (document.write) pour chaque etudiant la liste ul li de sa moyenne à chaque matiere puis sa moyenne général
 var premiertrimestre =[
     {
         "nom"     : "iha",
         "prenom"  :"karim",
          "moyenne":{
              "francais" : 8,
              "Math"  : 18,
              "physique" :18.5,
               "moy"     :14.5
              
          }
     },
     {
         "nom"     : "hericout",
         "prenom"  :"rudy",
          "moyenne":{
              "francais" : 10,
              "Math"  : 13,
              "physique" :18.5,
               "moy"     :15
          }
     },
     {
         "nom"     : "liegeard",
         "prenom"  :"hugo",
          "moyenne":{
              "francais" : 4,
              "Math"  : 8,
              "physique" :18,
              "moy"      : 13
          }
     },
      
 ]
/* console.log(premiertrimestre[1])*/
document.write('<ol>')
// je souhaite afficher la listes de mes etudiants.
for (var i = 0 ; i < premiertrimestre.length ; i++){
   
    
   
   // on récupère l'objet etudiant de l'itération
    
     var Etudiant = premiertrimestre[i];
    
     var nombredematiere = 0, sommedesnotes = 0,
    // Aperçu dans la consol
    
    console.log(Etudiant);
    
    
    // afficher le prénom et le nom de l'étudiant
   
    
    document.write("<li>")
          document.write(Etudiant.prenom +" " + Etudiant.nom );
          
           document.write("<ul>")
             
              for(var matiere in Etudiant.moyenne){
                  //1(Etudiant.moyenne[matiere]);
                  nombredematiere++;
                  sommedesnotes += Etudiant.moyenne[matiere];
                  document.write("<li>")
                  document.write(matiere + " :"  + Etudiant.moyenne[matiere]);
                  document.write("</li>")
                  //fin de la boucle Matière
                  //affichage de la moyenne
                  
                  
   /*           }
    document.write("</ul>")
    document.write("<strong> moyenne générale : </strong>" + sommedesnotes / nombredematiere);
    document.write("</li>")
}
document.write('</ol>')
*/
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
