//""""""""""" LE DOM""""""""""

/*-------------------------------------------------------------
Le Dom est une interface de développement en js
pour HTML; grace au dom , je vais être en mesur d'acceder
modifier mo Html.
l'objet "document": c'et le point d'entreé vers mon contenuhtml
chaque page chargée dans mon naviagteur à un objet "document" 
----------------------------------------------------------------*/
// en fais un tour dans la HTML
// comment puis je fair pour récupérer des différents informations de page HTML?
/*_____________________________________________________________________-*/
/*'''''''''''''''document.getElementById'''''''''''''''
''''''document.getElementById() : c'est une fonction qui va permettre 
 de récupérer un élément HTML à partir de son identifient unique: ID*/

var bonjour = document.getElementById("bonjour");
console.log(bonjour);// <p id="bonjour">paragraph</p>

/*---- document.getElementByclassName---------
 document.getElementByclassName  c'est une fonction qui va permettre de récupérer un ou plusieurs élement 
(une listes) HTML à PARTIR DE LEUR CLASSE'*/

var contenu = document.getElementsByClassName("contenu");
console.log(contenu);
//------- me renvoi un tableau js avec mes élements HTML une collection d'éléments HTML


/*---------- getElementTagName------*/
/*---- document.getElementByTagName---------

 document.getElementByTagName  c'est une fonction qui va permettre de récupérer un ou plusieurs élement 
(une listes) HTML à PARTIR DE LEUR Balises '*/

var span = document.getElementsByTagName("span");
console.log(span);
