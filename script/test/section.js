window.onload = function () {

var header = document.createElement("header");

header.style.width = "500px";
header.style.height = "150px";
header.style.border = "1px solid black";
header.style.margin = "50px";
header.style.marginLeft = "400px";
header.innerHTML = "Test Java";
header.style.fontSize = "500%";
header.style.paddingTop = "50px";
header.style.textAlign = "center";
header.style.textDecoration = "underline";
header.style.color = "lightgrey";
header.style.borderRadius = "15px";
header.style.backgroundColor = "red";
document.body.appendChild(header);

var barreDeNav = document.createElement("nav");

barreDeNav.style.width = "200px";
barreDeNav.style.height = "350px";
barreDeNav.style.border = "1px solid black";
barreDeNav.style.backgroundColor = "cyan";
barreDeNav.style.marginTop = "-250px";
barreDeNav.style.fontSize = "200%";

document.body.appendChild(barreDeNav);

var liste = document.createElement("ul");

barreDeNav.appendChild(liste);

//Création des éléments dans la barre de nav

var item1 = document.createElement("li");
liste.appendChild(item1);

var ancre1 = document.createElement("a");
ancre1.innerHTML = "Formation";
item1.appendChild(ancre1);

var item2 = document.createElement("li");
liste.appendChild(item2);

var ancre2 = document.createElement("a");
ancre2.innerHTML = "Expériences";
item2.appendChild(ancre2);

var item3 = document.createElement("li");
liste.appendChild(item3);

var ancre3 = document.createElement("li");
ancre3.innerHTML = "Qui suis-je ?";
item3.appendChild(ancre3);

var item4 = document.createElement("li");
liste.appendChild(item4);

var ancre4 = document.createElement("li");
ancre4.innerHTML = "Loisirs";
item4.appendChild(ancre4);

var section1 = document.createElement("section");
section1.style.width = "1200px";
section1.style.height = "150px";
section1.style.border = "1px solid black";
section1.style.margin = "20px";

document.body.appendChild(section1);

var section2 = document.createElement("section");
section2.style.width = "1200px";
section2.style.height = "150px";
section2.style.border = "1px solid black";
section2.style.margin = "20px";

document.body.appendChild(section2);

var section3 = document.createElement("section");
section3.style.width = "1200px";
section3.style.height = "150px";
section3.style.border = "1px solid black";
section3.style.margin = "20px";

document.body.appendChild(section3);

var section4 = document.createElement("section");
section4.style.width = "1200px";
section4.style.height = "150px";
section4.style.border = "1px solid black";
section4.style.margin = "20px";

document.body.appendChild(section4);

var footer = document.createElement("footer");
footer.style.width = "700px";
footer.style.height = "150px";
footer.style.border = "1px solid black";
footer.style.margin = "20px";
footer.style.marginLeft = "250px";

document.body.appendChild(footer);

};













	

