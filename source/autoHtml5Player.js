/*本工具由  Meigong5.com  整理提供请在此输入您的代码，单击 go 将恢复格式*/(function () {
	if(window.isHTML5PlayerBookMarkCodeByZythum)return ;
	window.isHTML5PlayerBookMarkCodeByZythum=!0;
	var youkuhtml5playerbookmark2=function () {
		var e=document.createElement("video").canPlayType("application/x-mpegURL")?!0:!1,t={
			getTop:function (e) {
				var n=e.offsetTop;
				return e.offsetParent!=null&&(n+=t.getTop(e.offsetParent)),n
			},getLeft:function (e) {
				var n=e.offsetLeft;
				return e.offsetParent!=null&&(n+=t.getLeft(e.offsetParent)),n
			},byId:function (e) {
				return document.getElementById(e)
			},cTag:function (e,t,n,r) {
				var i=document.createElement(e);
				return t&&(i.className=t),n&&n.appendChild(i),r&&(i.innerHTML=r),i
			},rNode:function (e) {
				try{
					e.parentNode.removeChild(e)
				}catch(t) {
				}
			},dClick:function (e) {
				var t={
				},n="d_click",r=function (n) {
					if(!n||n==e||!n.getAttribute||!n.tagName)return ;
					var i=n.getAttribute("data-click"),s;
					if(i&&t[i])for(s=0;s<t[i].length;s++)t[i][s](n);r(n.parentNode)
				},i=function (e) {
					e=e||window.event,r(e.target||e.srcElement)
				},s=function (e,n) {
					t[e]||(t[e]=[]),t[e].push(n)
				};
				return e.onclick=i,{
					add:s,destroy:function () {
						e.onclick=null
					}
				}
			},jsonp:function (e,n,r) {
				var i=document.createElement("script"),s=r||"HTML5PlayerBookMarkCodeByZythum"+(new Date).getTime()+Math.random().toString ().replace(".","");
				window[s]=function () {
					n&&n.apply(this,arguments),t.rNode(i),delete window[s]
				},document.body.appendChild(i),i.src=e+s
			}
		},n=!1,r="&#x8FBE;&#x6210;&#x5951;&#x7EA6;&#x7684;&#x8FC7;&#x7A0B;&#x4E2D;&#x597D;&#x50CF;&#x51FA;&#x73B0;&#x4E86;&#x95EE;&#x9898;",i="youkuhtml5playerbookmark2-",s=t.cTag("div",i+"cover"),o=t.cTag("div",i+"layer"),u=t.cTag("div",i+"title",o,"&#x5988;&#x5988;&#x518D;&#x4E5F;&#x4E0D;&#x7528;&#x62C5;&#x5FC3;&#x6211;&#x7684;macbook&#x53D1;&#x70EB;&#x4E86;&#x8BA1;&#x5212;"),a=t.cTag("div",i+"player",o),f=t.cTag("video",i+"video",a),l=t.cTag("div",i+"ctrlbar "+i+"ctrlbarhover",a),c=t.cTag("div",i+"ctrlbarbottom",l),h=t.cTag("div",i+"progressNum",c),p=t.cTag("div",i+"progress",c),d=t.cTag("div",i+"volume",c),v=t.cTag("div",i+"btns",c),m=t.cTag("div",i+"close",l),g=t.cTag("div",i+"center",l,'<div class="'+i+'center-before"></div><div class="'+i+'center-after"></div>'),y=t.cTag("div",i+"range",p),b=t.cTag("div",i+"rangeinner",y),w=t.cTag("div",i+"rangebtn",b),E=t.cTag("div",i+"range",d),S=t.cTag("div",i+"rangeinner",E),x=t.cTag("div",i+"rangebtn",S),T=t.cTag("div",i+"btn "+i+"cmtBtn",v),N=t.cTag("div",i+"btn "+i+"allscreen",v),C=t.cTag("div",i+"btn "+i+"fullscreen",v),k=t.cTag("div",i+"comment"),L=t.cTag("div",i+"commentFloat",k),A=t.cTag("div",i+"commentBottom",k),O=t.cTag("div",i+"logArea");
		T.style.display="none",m.setAttribute("data-click","close"),C.setAttribute("data-click","fullscreen"),N.setAttribute("data-click","allscreen"),g.setAttribute("data-click","center"),f.setAttribute("autoplay","true");
		var M,_=!1,D=!1,P=!0,H=0,B=t.dClick(o),j=B.add,F=[],I=undefined,q=t.cTag("div"),R={
			setUrl:function (e) {
				R.url=[];
				var n,r;
				for(n in e)r=t.cTag("div",i+"btn",null,n),v.insertBefore(r,v.children[0]),r.setAttribute("data-click","hd"),r.setAttribute("data-url",e[n]),F.push(r),R.url.push(e[n]);r.className=i+"btn "+i+"select",f.src=e[n],R.url.pop()
			},addUrl:function (e) {
				var n,r;
				for(n in e)r=t.cTag("div",i+"btn",null,n),v.insertBefore(r,v.children[0]),r.setAttribute("data-click","hd"),r.setAttribute("data-url",e[n]),F.push(r),R.url&&R.url.push(e[n])
			},setFlashElement:function (e) {
				try{
					I=e,e.parentNode.insertBefore(q,I),e.parentNode.removeChild(I)
				}catch(t) {
				}
			},formatTime:function (e) {
				var t=parseInt(e/3600),n=parseInt((e-t*3600)/60),r=parseInt((e-t*3600-n*60)/1);
				return t+":"+n+":"+r
			},showPlayer:function () {
				document.body.appendChild(s),document.body.appendChild(o),document.body.appendChild(O),P=!1
			},initComment:function () {
				T.style.display="",T.setAttribute("data-click","cmt"),T.setAttribute("data-status","show"),T.className=i+"btn "+i+"select "+i+"cmtBtn",j("cmt",function () {
					T.getAttribute("data-status")=="show"?(R.hideComment(),T.className=i+"btn "+i+"cmtBtn",T.setAttribute("data-status","hide")):(R.showComment(),T.className=i+"btn "+i+"select "+i+"cmtBtn",T.setAttribute("data-status","show"))
				})
			},cmt:null,commentLoop:function () {
			},hideComment:function () {
				A.innerHTML=L.innerHTML="",R.commentLoop=function () {
				}
			},showComment:function (e) {
				if(e)R.cmt=e=e.sort(function (e,t) {
					return parseFloat(e.p[0])-parseFloat(t.p[0])
				});
				else {
					if(!R.cmt)return ;
					e=R.cmt
				}a.appendChild(k);
				var t=0,n=0;
				R.commentLoop=function (r) {
					if(t===r)return ;
					t>r&&(t=r,n=0),t+1<r&&(t=r-1,n=0);
					var i,s=[t,r],o=n;
					while(i=e[o++]) {
						var u=parseFloat(i.p[0]);
						if(u<s[0])continue;
						if(u>s[1])break;
						i.p[1]<=3&&R.pushCmt(i.msg,i.p),(i.p[1]==4||i.p[1]==5)&&R.pushCmtBottom(i.msg,i.p)
					}t=r,n=o
				}
			},pushCmtBottom:function (e,n) {
				var r=4,s=t.cTag("div",i+"commentBlockBottom");
				s.appendChild(document.createTextNode(e)),A.children[0]?A.insertBefore(s,A.children[0]):A.appendChild(s),s.style.cssText+=";color:#"+n[3].toString (16)+";",setTimeout(function () {
					s.parentNode.removeChild(s)
				},r*1e3)
			},line:[],pushCmt:function (e,n) {
				var r=8,s=0,o=0,u=a.offsetWidth,f=t.cTag("div",i+"commentBlock");
				f.appendChild(document.createTextNode(e)),L.appendChild(f),s=f.offsetWidth+10,o=25,u+=s,removeTime=r/a.offsetWidth*u,isShowdTime=r/a.offsetWidth*s;
				var l=0;
				while(R.line[l])l++;
				R.line[l]=f,f.style.cssText+=";-webkit-transform: translate3d("+u+"px, 0, 0);top:"+l*o+"px;left:0px;color:#"+parseInt(n[3]).toString (16)+";",setTimeout(function () {
					f.style.cssText+=";-webkit-transform: translate3d(-"+s+"px, 0, 0);-webkit-transition:-webkit-transform "+r+"s linear;"
				},0),setTimeout(function () {
					R.line[l]=undefined
				},isShowdTime*1e3),setTimeout(function () {
					f.parentNode.removeChild(f)
				},removeTime*1e3)
			},videoLayout:{
				width:800,height:450
			},setVideoLayout:function (e,t) {
				if(_||document.webkitIsFullScreen)return ;
				var n=800,r=n/e*t||450;
				r>window.innerHeight-80&&(r=window.innerHeight-80,n=r/t*e,n=n<500?500:n),R.videoLayout.height=r,R.videoLayout.width=n,R.fixVideoLayout()
			},fixVideoLayout:function () {
				_||document.webkitIsFullScreen?(o.style.width="",o.style.marginLeft="",o.style.height="",o.style.marginTop=""):(o.style.width=R.videoLayout.width+"px",o.style.marginLeft="-"+R.videoLayout.width/2+"px",o.style.height=R.videoLayout.height+"px",o.style.marginTop="-"+R.videoLayout.height/2+"px")
			},log:function (e) {
				window.console&&window.console.log(e);
				var n=t.cTag("div",i+"log",O,e);
				setTimeout(function () {
					t.rNode(n)
				},1e3)
			}
		},U;
		j("hd",function (e) {
			var t=f.currentTime;
			if(e.className==i+"btn "+i+"select")return ;
			var n=0,r=F.length;
			for(;n<r;n++)F[n].className!=i+"btn"&&(F[n].className=i+"btn");e.className=i+"btn "+i+"select",f.src=e.getAttribute("data-url"),clearTimeout(U);var s=function () {
				try{
					clearTimeout(U),f.currentTime=t
				}catch(e) {
					U=setTimeout(s,100)
				}
			};
			s()
		}),j("fullscreen",function () {
			document.webkitIsFullScreen?document.webkitCancelFullScreen():a.webkitRequestFullScreen()
		}),j("allscreen",function () {
			if(document.webkitIsFullScreen)return ;
			_?(o.className=i+"layer",N.className=i+"btn "+i+"allscreen",_=!1):(o.className=i+"layer "+i+"full",N.className=i+"btn "+i+"select "+i+"allscreen",_=!0),R.fixVideoLayout()
		}),j("close",function () {
			if(document.webkitIsFullScreen)document.webkitCancelFullScreen();
			else {
				t.rNode(o),t.rNode(s),t.rNode(O),clearTimeout(M),P=!0,f.src="",f.pause();
				try{
					q.parentNode.insertBefore(I,q),q.parentNode.removeChild(q)
				}catch(e) {
				}delete window.isHTML5PlayerBookMarkCodeByZythum,a.removeEventListener("webkitfullscreenchange",J,!1),g.removeEventListener("dblclick",V,!1),document.body.removeEventListener("keydown",$,!1),f.removeEventListener("canplay",K,!1),y.removeEventListener("mousedown",Y,!1),E.removeEventListener("mousedown",Z,!1),document.removeEventListener("mouseup",et,!1),document.removeEventListener("mousemove",tt,!1),a.removeEventListener("mousemove",playerMousemoveHandler,!1),B.destroy()
			}
		});
		var z=0,W;
		j("center",function () {
			z++,clearTimeout(W),W=setTimeout(function () {
				z==1&&(f.paused?f.play():f.pause()),z=0
			},0)
		});
		var X=function () {
			D?(s.className=i+"cover",D=!1):(s.className=i+"cover "+i+"block",D=!0)
		};
		s.addEventListener("dblclick",X,!1);
		var V=function () {
			if(P)return ;
			document.webkitIsFullScreen?document.webkitCancelFullScreen():a.webkitRequestFullScreen()
		};
		g.addEventListener("dblclick",V,!1);
		var $=function (e) {
			if(P)return ;
			switch(e.keyCode) {
				case 37:f.currentTime>20?f.currentTime=f.currentTime-20:"",e.preventDefault(),e.preventDefault();
				break;
				case 39:f.currentTime<f.duration-20?f.currentTime=f.currentTime+20:"",e.preventDefault(),e.preventDefault();
				break;
				case 40:f.volume>.1?f.volume=f.volume-.1:"",e.preventDefault(),e.preventDefault();
				break;
				case 38:f.volume<.9?f.volume=f.volume+.1:"",e.preventDefault(),e.preventDefault();
				break;
				case 32:f[f.paused?"play":"pause"](),e.preventDefault()
			}
		};
		document.body.addEventListener("keydown",$,!1);
		var J=function () {
			if(P)return ;
			R.fixVideoLayout(),document.webkitIsFullScreen?(o.className=i+"layer "+i+"full",C.className=i+"btn "+i+"select "+i+"fullscreen",N.style.display="none"):(o.className=_?i+"layer "+i+"full":i+"layer",C.className=i+"btn "+i+"fullscreen",N.style.display="")
		};
		a.addEventListener("webkitfullscreenchange",J,!1);
		var K=function () {
			if(P)return ;
			f.play(),R.setVideoLayout(f.videoWidth,f.videoHeight)
		};
		f.addEventListener("canplay",K,!1);
		var Q=!1,G=!1,Y=function () {
			if(P)return ;
			Q=!0
		};
		y.addEventListener("mousedown",Y,!1);
		var Z=function () {
			if(P)return ;
			G=!0
		};
		E.addEventListener("mousedown",Z,!1);
		var et=function (e) {
			if(P)return ;
			var n=0,r=0;
			Q&&(n=e.clientX-t.getLeft(b),r=n/b.offsetWidth,r=r>1?1:r,r=r<0?0:r,f.currentTime=f.duration*r,w.style.width=r*100+"%"),G&&(n=e.clientX-t.getLeft(S),r=n/S.offsetWidth,r=r>1?1:r,r=r<0?0:r,f.volume=r,x.style.width=r*100+"%"),Q=!1,G=!1
		};
		document.addEventListener("mouseup",et,!1);
		var tt=function (e) {
			if(P)return ;
			var n=0,r=0;
			Q&&(n=e.clientX-t.getLeft(b),r=n/b.offsetWidth,r=r>1?1:r,r=r<0?0:r,f.currentTime=f.duration*r,w.style.width=r*100+"%"),G&&(n=e.clientX-t.getLeft(S),r=n/S.offsetWidth,r=r>1?1:r,r=r<0?0:r,f.volume=r,x.style.width=r*100+"%")
		};
		document.addEventListener("mousemove",tt,!1);
		var nt=!0,rt=setTimeout(function () {
			l.className=i+"ctrlbar"
		},3e3);
		playerMousemoveHandler=function () {
			clearTimeout(rt),l.className!=i+"ctrlbar "+i+"ctrlbarhover"&&(l.className=i+"ctrlbar "+i+"ctrlbarhover"),rt=setTimeout(function () {
				l.className=i+"ctrlbar"
			},3e3)
		},a.addEventListener("mousemove",playerMousemoveHandler,!1);
		var it=-1,st=0,ot=!1,ut=function () {
			if(n)return ;
			Q||w.style.width!=f.currentTime/f.duration*100+"%"&&(w.style.width=f.currentTime/f.duration*100+"%"),G||x.style.width!=f.volume*100+"%"&&(x.style.width=f.volume*100+"%"),h.innerHTML=R.formatTime(f.currentTime)+" / "+R.formatTime(f.duration),f.duration==10&&R.url.length&&(f.src=R.url[0]),f.paused?g.className!=i+"center "+i+"pause"&&(g.className=i+"center "+i+"pause"):g.className!=i+"center"&&(g.className=i+"center"),it!=f.currentTime||f.ended||f.readyState==3||f.readyState==4||f.readyState==5?ot||(u.innerHTML="&#x5988;&#x5988;&#x518D;&#x4E5F;&#x4E0D;&#x7528;&#x62C5;&#x5FC3;&#x6211;&#x7684;macbook&#x53D1;&#x70EB;&#x4E86;&#x8BA1;&#x5212;",ot=!0):(ot&&(u.innerHTML="&#x52C7;&#x6562;&#x7684;&#x5C11;&#x5E74;&#x8BF7;&#x8010;&#x5FC3;&#xFF0C;&#x5C11;&#x5973;&#x52AA;&#x529B;&#x7948;&#x7977;&#x4E2D;...",ot=!1),g.className!=i+"center "+i+"loading"&&(g.className=i+"center "+i+"loading")),R.commentLoop&&(st%2==0&&R.commentLoop(it=f.currentTime),++st>10&&(st=0)),M=setTimeout(ut,500)
		};
		ut();
		var at=[];
		return {
			add:function (n) {
				try{
					n&&at.push(n(t,e))
				}catch(r) {
				}
			},init:function () {
				for(var e=0,i=at.length;e<i;e++)if(at[e]&&at[e].reg&&at[e].call) {
					R.showPlayer(),R.log("&#x64AD;&#x653E;&#x5668;&#x521D;&#x59CB;&#x5316;");
					try{
						at[e].call(function (e) {
							R.setUrl(e.urls),R.log("&#x83B7;&#x53D6;&#x64AD;&#x653E;&#x6E90;&#x5730;&#x5740;"),R.setFlashElement(t.byId(e.flashElementId)),e.comment&&(R.initComment(),R.log("&#x521D;&#x59CB;&#x5316;&#x5F39;&#x5E55;"),setTimeout(function () {
								R.showComment(e.comment),R.log("&#x751F;&#x6210;&#x5F39;&#x5E55;")
							},100))
						})
					}catch(s) {
						n=!0,u.innerHTML=r,R.log("&#x64AD;&#x653E;&#x5931;&#x8D25;&#x3002;&#x8BF7;&#x628A;url&#x5730;&#x5740;&#x8D4B;&#x503C;&#x3002;&#x4E0A;&#x5FAE;&#x535A;@zythum_&#x6731;&#x4E00;&#x7AE5;&#x978B;")
					}R.log("&#x51C6;&#x5907;&#x5B8C;&#x6BD5;");
					break
				}
			}
		}
	}();
	youkuhtml5playerbookmark2.add(function (e,t) {
		var n=window.videoId,r=function (e) {
			return e({
				"&#x6807;&#x6E05;":"/player/getM3U8/vid/"+n+"/type/flv/ts/"+(((new Date).getTime()/1e3).toString ()|0)+"/v.m3u8","&#x9AD8;&#x6E05;":"/player/getM3U8/vid/"+n+"/type/mp4/ts/"+(((new Date).getTime()/1e3).toString ()|0)+"/v.m3u8","&#x8D85;&#x6E05;":"/player/getM3U8/vid/"+n+"/type/hd2/ts/"+(((new Date).getTime()/1e3).toString ()|0)+"/v.m3u8"
			})
		},i=function (t) {
			function r(e) {
				var t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/\\:._-1234567890".split(""),n=[],r;
				for(var i=0,s=t.length;i<s;i++)e=(e*211+30031)%65536,r=Math.floor(e/65536*t.length),n.push(t[r]),t.splice(r,1);return n.join("")
			}function i(e,t) {
				var n=r(t),i=e.split("*"),s=[],o;
				for(var u=0;u<i.length;u++)o=parseInt(i[u],10),s.push(n.charAt(o));return s.join("")
			}e.jsonp("http://v.youku.com/player/getPlaylist/VideoIDS/"+n+"/Pf/4?__callback=",function (n) {
				var r=new Date,s=i(n.data[0].streamfileids["3gphd"],n.data[0].seed),o=r.getTime()+""+(1e3+r.getMilliseconds())+""+parseInt(Math.random()*9e3),u=n.data[0].segs["3gphd"][0].k,a=n.data[0].segs["3gphd"][0].seconds;
				e.jsonp("http://f.youku.com/player/getFlvPath/sid/"+o+"_00/st/mp4/fileid/"+s+"?K="+u+"&hd=1&myp=0&ts=1156&ypp=0&ymovie=1&callback=",function (e) {
					t({
						"&#x9AD8;&#x6E05;":e[0].server
					})
				})
			})
		};
		return {
			reg:/youku\.com/.test(window.location.host)&&n,call:function (e) {
				return (t?r||i:i)(function (t) {
					return e({
						urls:t,flashElementId:"movie_player"
					})
				})
			}
		}
	}),youkuhtml5playerbookmark2.add(function (e,t) {
		var n=window.iid,r=window.itemData&&window.itemData.vcode,i=function (e) {
			return r?e({
				"&#x6807;&#x6E05;":"http://v.youku.com/player/getM3U8/vid/"+r+"/type/flv/ts/"+(new Date).getTime().toString ().substring(0,10)+"/sc/2/useKeyframe/0/v.m3u8","&#x539F;&#x753B;":"http://v.youku.com/player/getM3U8/vid/"+r+"/type/hd2/ts/"+(new Date).getTime().toString ().substring(0,10)+"/sc/2/useKeyframe/0/v.m3u8"
			}):e({
				"&#x6807;&#x6E05;":"http://vr.tudou.com/v2proxy/v2.m3u8?it="+n+"&st=2","&#x539F;&#x753B;":"http://vr.tudou.com/v2proxy/v2.m3u8?it="+n+"&st=5"
			})
		},s=function (t) {
			r?e.jsonp("https://openapi.youku.com/v2/videos/files.json?client_id=513edb6cf9833ca7&client_secret=eaf151ffdbf1383d934ab4cb91250fa6&type=play&video_id="+r+"&_="+(new Date).getTime().toString ()+"&callback=",function (e) {
				return t({
					"&#x6807;&#x6E05;":e.files["3gphd"].segs[0].url
				})
			}):e.jsonp("http://vr.tudou.com/v2proxy/v2.js?it="+n+"&st=52%2C53%2C54&pw=&jsonp=",function (e) {
				if(e.code==-1)return ;
				for(var n={
				},r=0,i=e.urls.length;
				r<i;
				r++)n[r]=e.urls[r];
				return t(n)
			})
		};
		return {
			reg:/tudou\.com/.test(window.location.host)&&n,call:function (e) {
				return (t?i||s:s)(function (t) {
					return e({
						urls:t,flashElementId:"playerObject"
					})
				})
			}
		}
	}),youkuhtml5playerbookmark2.add(function (e,t) {
		var n=location.search.match(/vid=([0-9a-zA-Z]+)/);
		n?n=n[1]:(n=location.href.match(/\/([0-9a-zA-Z]+).html/),n&&(n=n[1],window.COVER_INFO.id==n&&(n=window.VIDEO_INFO.vid)));
		if(!n)return ;
		var r=function (t) {
			e.jsonp("http://vv.video.qq.com/geturl?otype=json&vid="+n+"&charge=0&callback=",function (e) {
				t({
					"&#x9AD8;&#x6E05;":e.vd.vi[0].url
				})
			})
		};
		return {
			reg:/v\.qq\.com/.test(window.location.host)&&window.COVER_INFO,call:function (e) {
				return r(function (t) {
					return e({
						urls:t,flashElementId:"mod_player"
					})
				})
			}
		}
	}),youkuhtml5playerbookmark2.add(function (e,t) {
		var n;
		try{
			n=$SCOPE.video.videoData.ipad_vid
		}catch(r) {
			n=!1
		}var i=function (e) {
			e({
				"&#x9AD8;&#x6E05;":"http://edge.v.iask.com.sinastorage.com/"+n+".mp4"
			})
		};
		return {
			reg:/video\.sina\.com\.cn/.test(window.location.host)&&n,call:function (e) {
				return i(function (t) {
					return e({
						urls:t,flashElementId:"myMovie"
					})
				})
			}
		}
	}),youkuhtml5playerbookmark2.add(function (e,t) {
		var n=window.vid,r=window.nid,i=function (t) {
			e.jsonp("http://zythum.sinaapp.com/youkuhtml5playerbookmark/sohu.php?vid="+n+"&nid="+r+"&callback=",function (e) {
				var n=e.urls.m3u8.filter(function (e) {
					if(e)return e
				});
				t({
					"&#x9AD8;&#x6E05;":n[0]
				})
			})
		},s=function (t) {
			e.jsonp("http://zythum.sinaapp.com/youkuhtml5playerbookmark/sohu.php?vid="+n+"&nid="+r+"&callback=",function (e) {
				var n=e.urls.mp4.filter(function (e) {
					if(e)return e
				});
				t({
					"&#x9AD8;&#x6E05;":n[0]
				})
			})
		};
		return {
			reg:/sohu\.com/.test(window.location.host)&&n,call:function (e) {
				return (t?i||s:s)(function (t) {
					return e({
						urls:t,flashElementId:"player"
					})
				})
			}
		}
	}),youkuhtml5playerbookmark2.add(function (e,t) {
		var n=window._page_,r=function (t) {
			if(n.channel=="view") {
				var r=location.href.match(/v\_([0-9a-zA-Z]+)\.html/);
				r&&(r=r[1],t({
					"&#x9AD8;&#x6E05;":"http://vxml.56.com/m3u8/"+r+"/"
				}))
			}else {
				var i="jsonp_dfInfo",s=window[i];
				console.log("http://vxml.56.com/json/" + oFlv.o.EnId);
				e.jsonp("http://vxml.56.com/ipad/"+(window.oFlv.o.id||window._oFlv_c.id)+"/?src=site&callback=",function (e) {
					urlList=e.df;
					var n={
					};
					for(var r=e.df.length-1;r>=0;r--)n[e.df[r].type]=e.df[r].url;t(n),window[i]=s
				},i)
			}
		};return {
			reg:/56\.com/.test(window.location.host)&&n,call:function (e) {
				return r(function (t) {
					return e({
						urls:t,flashElementId:"mod_player"
					})
				})
			}
		}
	}),youkuhtml5playerbookmark2.add(function (e,t) {
		var n=function (n) {
			var r;
			if(window.info) {
				var i=document.createElement("script");
				i.src="http://cache.video.qiyi.com/m/201971/"+window.info.videoId+"/",document.body.appendChild(i),r=setInterval(function () {
					if(window.ipadUrl) {
						clearInterval(r);
						if(t)n({
							"&#x9AD8;&#x6E05;":ipadUrl.data.url
						});
						else {
							var e=ipadUrl.data.mp4Url,i=document.createElement("script");
							i.src=e,document.body.appendChild(i),clearInterval(r),r=setInterval(function () {
								window.videoUrl&&(clearInterval(r),n({
									"&#x9AD8;&#x6E05;":videoUrl.data.l
								}))
							},100)
						}
					}
				},100)
			}else {
				var s=document.getElementById("flashbox"),o=s.getAttribute("data-player-tvid");
				e.jsonp("http://zythum.sinaapp.com/youkuhtml5playerbookmark/iqiyi.php?tvid="+o+"&callback=",function (e) {
					if(t)n({
						"&#x9AD8;&#x6E05;":e.data.mpl[0].m3u
					});
					else {
						var i=e.data.mpl[0].m4u,s=document.createElement("script");
						s.src=i,document.body.appendChild(s),clearInterval(r),r=setInterval(function () {
							window.videoUrl&&(clearInterval(r),n({
								"&#x9AD8;&#x6E05;":videoUrl.data.l
							}))
						},100)
					}
				})
			}
		};
		return {
			reg:/iqiyi\.com/.test(window.location.host),call:function (e) {
				return n(function (t) {
					return e({
						urls:t,flashElementId:"flash"
					})
				})
			}
		}
	}),youkuhtml5playerbookmark2.add(function (core,canPlayM3U8) {
		canPlayM3U8=!1;
		var getScript=function () {
			var e=document.getElementsByTagName("script");
			for(var t=0,n=e.length;t<n;t++)if(/LELib\.Revive\.Player/.test(e[t].innerHTML))return e[t];return !1
		},init=function (callback) {
			var script=getScript();
			if(!script)return ;
			var temp=LELib.Revive.Player,isfirst=!0,value;
			LELib.Revive.Player=function () {
				value=arguments[2]
			},eval(script.innerHTML),LELib.Revive.Player=temp;
			var urls={
			};
			canPlayM3U8?(value.v[0]&&(urls["&#x6807;&#x6E05;"]=LETV.Base64.decode(value.v[0])),value.v[1]&&(urls["&#x9AD8;&#x6E05;"]=LETV.Base64.decode(value.v[1]))):(value.v[0]&&(urls["&#x6807;&#x6E05;"]=LETV.Base64.decode(value.v[0]).replace("tss=ios","")),value.v[1]&&(urls["&#x9AD8;&#x6E05;"]=LETV.Base64.decode(value.v[1]).replace("tss=ios",""))),urls&&callback(urls)
		};
		return {
			reg:/letv\.com/.test(window.location.host),call:function (e) {
				return init(function (t) {
					return e({
						urls:t,flashElementId:"fla_box"
					})
				})
			}
		}
	}),youkuhtml5playerbookmark2.add(function (e,t) {
		var n=function (e,t,n) {
			t({
				sina:"http://edge.v.iask.com.sinastorage.com/"+e+".mp4"
			},n)
		},r=function (n,r,i) {
			e.jsonp("http://zythum.sinaapp.com/youkuhtml5playerbookmark/getyoukuid.php?id="+n+"&callback=",function (t) {
				function n(e) {
					var t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/\\:._-1234567890".split(""),n=[],r;
					for(var i=0,s=t.length;i<s;i++)e=(e*211+30031)%65536,r=Math.floor(e/65536*t.length),n.push(t[r]),t.splice(r,1);return n.join("")
				}function s(e,t) {
					var r=n(t),i=e.split("*"),s=[],o;
					for(var u=0;u<i.length;u++)o=parseInt(i[u],10),s.push(r.charAt(o));return s.join("")
				}var o=new Date,u=s(t.data[0].streamfileids["3gphd"],t.data[0].seed),a=o.getTime()+""+(1e3+o.getMilliseconds())+""+parseInt(Math.random()*9e3),f=t.data[0].segs["3gphd"][0].k,l=t.data[0].segs["3gphd"][0].seconds;e.jsonp("http://f.youku.com/player/getFlvPath/sid/"+a+"_00/st/mp4/fileid/"+u+"?K="+f+"&hd=1&myp=0&ts=1156&ypp=0&ymovie=1&callback=",function (e) {
					r({
						"&#x9AD8;&#x6E05;":e[0].server
					},i)
				})
			})
		},i=function (t,n,r) {
			e.jsonp("http://vv.video.qq.com/geturl?otype=json&vid="+t+"&charge=0&callback=",function (e) {
				n({
					"&#x9AD8;&#x6E05;":e.vd.vi[0].url
				},r)
			})
		},s=function (n,r,i) {
			t?r({
				"&#x6807;&#x6E05;":"http://vr.tudou.com/v2proxy/v2.m3u8?it="+n+"&st=2","&#x539F;&#x753B;":"http://vr.tudou.com/v2proxy/v2.m3u8?it="+n+"&st=5"
			},i):e.jsonp("http://vr.tudou.com/v2proxy/v2.js?it="+n+"&st=52%2C53%2C54&pw=&jsonp=",function (e) {
				if(e.code==-1)return ;
				for(var t={
				},n=0,s=e.urls.length;
				n<s;
				n++)t[n]=e.urls[n];
				return r(t,i)
			})
		},o=function (t) {
			var o=location.href.match(/\/(ac[0-9a-zA-Z\_]+)/)[1];
			e.jsonp("http://zythum.sinaapp.com/youkuhtml5playerbookmark/acfun.php?aid="+o+"&callback=",function (e,o,u) {
				o.toLowerCase()=="sina"?n(e,t,u):o.toLowerCase()=="youku"?r(e,t,u):o.toLowerCase()=="qq"?i(e,t,u):o.toLowerCase()=="tudou"?s(e,t,u):"false"
			})
		};
		return {
			reg:/acfun\.tv/.test(window.location.host)&&window.system,call:function (e) {
				return o(function (t,n) {
					return e({
						urls:t,flashElementId:"area-player",comment:n
					})
				})
			}
		}
	}),youkuhtml5playerbookmark2.add(function (e,t) {
		var n=window.aid,r=window.pageno,i=function (e,t,n) {
			var r=e.match(/vid\=([0-9a-zA-Z]+)/);
			r&&(r=r[1],e="http://edge.v.iask.com.sinastorage.com/"+r+".mp4"),t({
				sina:e
			},n)
		},s=function (n,r,i) {
			var s=n.match(/vid\/([0-9a-zA-Z]+)\//);
			s=s[1],e.jsonp("http://zythum.sinaapp.com/youkuhtml5playerbookmark/getyoukuid.php?id="+s+"&callback=",function (t) {
				function n(e) {
					var t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/\\:._-1234567890".split(""),n=[],r;
					for(var i=0,s=t.length;i<s;i++)e=(e*211+30031)%65536,r=Math.floor(e/65536*t.length),n.push(t[r]),t.splice(r,1);return n.join("")
				}function s(e,t) {
					var r=n(t),i=e.split("*"),s=[],o;
					for(var u=0;u<i.length;u++)o=parseInt(i[u],10),s.push(r.charAt(o));return s.join("")
				}var o=new Date,u=s(t.data[0].streamfileids["3gphd"],t.data[0].seed),a=o.getTime()+""+(1e3+o.getMilliseconds())+""+parseInt(Math.random()*9e3),f=t.data[0].segs["3gphd"][0].k,l=t.data[0].segs["3gphd"][0].seconds;e.jsonp("http://f.youku.com/player/getFlvPath/sid/"+a+"_00/st/mp4/fileid/"+u+"?K="+f+"&hd=1&myp=0&ts=1156&ypp=0&ymovie=1&callback=",function (e) {
					r({
						"&#x9AD8;&#x6E05;":e[0].server
					},i)
				})
			})
		},o=function (t,n,r) {
			var i=t.match(/qq\.com\/([0-9a-zA-Z]+)\.mp4/);
			i&&(i=i[1],e.jsonp("http://vv.video.qq.com/geturl?otype=json&vid="+i+"&charge=0&callback=",function (e) {
				n({
					"&#x9AD8;&#x6E05;":e.vd.vi[0].url
				},r)
			}))
		},u=function (e,t,n) {
			t({
				bili:e
			},n)
		},a=function (t) {
			e.jsonp("http://zythum.sinaapp.com/youkuhtml5playerbookmark/bilibili.php?aid="+n+"&page="+r+"&callback=",function (e,n,r) {
				var a=n.durl[0].url;
				a.indexOf("v.iask.com")>=0?i(a,t,r):a.indexOf("v.youku.com")>=0?s(a,t,r):a.indexOf("qq.com")>=0?o(a,t,r):u(a,t,r)
			})
		};
		return {
			reg:/bilibili\.tv/.test(window.location.host)&&window.aid,call:function (e) {
				return a(function (t,n) {
					return e({
						urls:t,flashElementId:"bofqi",comment:n
					})
				})
			}
		}
	}),youkuhtml5playerbookmark2.add(function (e,t) {
		var n=function (e) {
			var t=document.cookie.split("; "),n=0,r=t.length,i,s;
			for(;n<r;n++) {
				i=t[n].split("=");
				if(i[0]===e)return decodeURIComponent(i[1])
			}return null
		},r=function (t) {
			var r=encodeURI(window.location.href),i=decodeURI(r.match(/&url=([0-9a-zA-Z\%\-\_\.]+)/)[1]),s=r.match(/&filename=([0-9a-zA-Z\%\-\_\.]+)/);
			s||(s=r.match(/&folder=([0-9a-zA-Z\%\-\_\.]+)/));
			var o=decodeURI(s[1]);
			e.jsonp("http://i.vod.xunlei.com/req_get_method_vod?url="+i+"&video_name="+o+"&platform=1&userid="+n("userid")+"&vip=1&sessionid="+n("sessionid")+"&cache="+(new Date).getTime().toString ()+"&from=vlist&jsonp=",function (e) {
				var n={
				},r=["&#x6807;&#x6E05;","&#x9AD8;&#x6E05;","&#x8D85;&#x6E05;"],i=e.resp.vodinfo_list;
				for(var s=0,o=i.length;s<o;s++)n[r[s]]=i[s].vod_url;t(n)
			})
		};return {
			reg:/iplay\.html/.test(window.location.pathname)&&window.gCloudVod&&t,call:function (e) {
				return r(function (t) {
					return e({
						urls:t,flashElementId:"XL_CLOUD_VOD_PLAYER"
					})
				})
			}
		}
	}),youkuhtml5playerbookmark2.add(function (e,t) {
		var n=function (e) {
			e({
				"&#x9AD8;&#x6E05;":window.openCourse.getCurrentMovie().appsrc
			})
		};
		return {
			reg:/v\.163\.com/.test(window.location.host)&&window.openCourse&&t,call:function (e) {
				return n(function (t) {
					return e({
						urls:t,flashElementId:"FPlayer"
					})
				})
			}
		}
	}),youkuhtml5playerbookmark2.init()
})()
