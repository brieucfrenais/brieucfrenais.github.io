/*
Page personnelle de Brieuc Frénais, hébergée sur le serveur de l'ENS Rennes

Script de gestion du menu de navigation sur la version mobile
*/

window.onload=function(){
	var on = document.querySelector('.on').className;
	on = on.split('a')
	var i = parseInt(on[1])

	var btnright = document.getElementById('btnright');

	btnright.onclick = function(){
		i = (i + 1) % 5	;
		for (var j=0; j<5; j++){

			if (j==i) {
				var li = document.querySelector('.a'+j.toString());	
				li.className = "on a"+j.toString();

			} else {
				var li = document.querySelector('.a'+j.toString());
				li.className = "a"+j.toString();
			}
		}
	}

	var btnleft = document.getElementById('btnleft');

	btnleft.onclick = function(){
		i = (i + 4) % 5	;
		for (var j=0; j<5; j++){

			if (j==i) {
				var li = document.querySelector('.a'+j.toString());	
				li.className = "on a"+j.toString();

			} else {
				var li = document.querySelector('.a'+j.toString());
				li.className = "a"+j.toString();
			}
		}
	}
}