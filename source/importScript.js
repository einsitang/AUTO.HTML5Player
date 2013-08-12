function addJavascript(jsname,pos) {
	var th = document.getElementsByTagName(pos)[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}

function addCss(cssPath,pos){
	var th = document.getElementsByTagName(pos)[0];
	var s = document.createElement('link');
	s.setAttribute('rel','tstylesheet');
	s.setAttribute('href',cssPath);
	th.appendChild(s);
}


addJavascript('http://localhost:8080/goaland_new/autoHtml5Player.js','body');
//http://localhost:8080/goaland_new