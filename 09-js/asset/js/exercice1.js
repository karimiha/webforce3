/*votre mission que vous devez acceptez
realiser une fonction permettant à un internaut de
-- saisir son prénom dans un prompt
---*/










/*function nomprenom(prenom, age, annee){
     document.write("<p> saisissez votre prénom </p>");
     var prenom = prenom;
    alert("bonjour"+" "+prenom+" "+ "quel age as-tu?"); 
    var age = age;
    alert ("tu es donc né en" + annee);
    annee = 2017 - age;
    document.write("bonjour"+" " + "tu as" + " "+age );
    */
    

//initialisation des variables*
var DateDujour = new Date();


//cration de la fonction
function hello() {
    // je demande a l'utilisateur son prénom
    prenom = prompt("hello ! what is your name ?" ,"<saisir votre prénom>");
    // je lui demande son age
    age = parseInt(prompt("hello " + prenom + "! how old are you ?" , "saisir votre age>"));
    // j'affiche une alert avec son annéé de naissance
    alert("AMAZING ! so you're borne in " + (datdejour.getFullYear() - age) + " ! ");
    // Affichage dans ma page html
    document.write("hello " + prenom + "it's AMAZING you're" + age + "years old !");
    
}
// execution de ma fonction
hello();

