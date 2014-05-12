function addJavascript(id,jsname,pos) {
	var t = document.getElementById(id);
	var th = document.getElementsByTagName(pos)[0];
	var s = document.createElement('script');
	s.setAttribute('id',id);
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	if(!t){
		th.appendChild(s);
	}
}

function addCss(id,cssPath,pos){
	var t = document.getElementById(id);
	var th = document.getElementsByTagName(pos)[0];
	var s = document.createElement('link');
	s.setAttribute('id',id);
	s.setAttribute('rel','tstylesheet');
	s.setAttribute('href',cssPath);
	if(!t){
		th.appendChild(s);
	}
	
}


addJavascript('html5PlayerJs','https://rawgit.com/forfuns/AUTO.HTML5Player/master/source/autoHtml5Player.js','body');

//https://raw.github.com/forfuns/AUTO.HTML5Player/master/source/autoHtml5Player.js
