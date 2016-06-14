/* La fonction dropdown va afficher ou cacher le menu déroulant selon le paramètre en entrée */
function dropdown(etat) {
   var test = document.getElementById("menuderoulant").className;
	if(etat==1) {
	document.getElementById("menuderoulant").className=test.replace("hide","show");
	}
	else if(etat==0) {
	document.getElementById("menuderoulant").className=test.replace("show","hide");
	}
}
