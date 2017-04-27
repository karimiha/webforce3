/*_________ les boucles _____________*/

// la boucle for 
// pour i = 1 ; tant que i <= (strctement inféerieur ou égale ) 10 ; alors, j'incrémente i de + 1 ;
for (var i = 1 ; i <= 10; i++){
    document.write("<p>instruction exécutée :<strong>" + i + "</strong></p>")
}


// subtilite
var i = 40;
i++ //affiche 40
++i // affiche 41

// la boucle while : tant que
var j =1;
while(j <= 10){
    document.write("<p>instruction exécutée :<strong>" + j + "</strong></p>")
    j++;
}

/*exercice*/
// supposons le tableau suivant 
var prenoms = [ 'hugo', 'jean', 'matthieu', 'luc', 'pierre', 'marc'];
//-- consigne : grace à la boucle For ,afficher la liste  des prénoms du tableau suivant dans la console ou sur votre page.
var i = 0
for (var i = 0; i <= 5; i++){
    console.log(prenoms[i]);
}
// 2eme façon de fair 
var nbrelementdsmontableau = prenoms.length;
for (var i = 0; i < nbrelementdsmontableau; i++){
    console.log(prenoms[i]);
}


/// le meme exercice avec la boucle while
var j =0; 
while (j < prenoms.length){
    console.log(prenoms[j]);
    j++;
}


// eutre fçon de parcourire mon tableau.
// Attention ici à la performence.

/*consol.log('- - - ')*/
prenoms.forEach(afficheprenom);
function afficheprenom(prenom, index){
    console.log(prenom);
}




