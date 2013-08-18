
var CONFIG_FILE = 'config.xml' ;
var myport,req;
var config ={};
//加载配置文件信息
var loadConfigFile = function(fileName){
	req = new XMLHttpRequest();
    req.onload = loadConfigPro;
    //从config.xml文件中读取配置信息
    req.open("GET",fileName,false);
    req.send(null);
}
//ajax加载配置文件处理进程
var loadConfigPro=function(){
	//加载配置信息
    if( this.readyState == 4 ) 
    {
        var config=req.responseXML;
        madeSetting(config);
    }
}
//设置配置
var setConfig = function(config){
	this.config = $.extend(this.config,config);

	//更新配置
	chrome.tabs.getSelected(null,function(tab){
		updatePluginStatus(tab);
	});
	

	//写入配置文件
	//writeConfigFile(config,'config.xml');
}
//写入修改的配置文件
var writeConfigFile = function(config,fileName){
	console.log('this function(-- writeConfigFile --) to be writeing...');
	var fileReader = new FileReader();
	console.log(fileReader);
	fileReader.onload = function(e){
		console.log(e);
		console.log(e.target);
		var contents = e.target.result;
		console.log(contents);
	}
	var text = fileReader.readAsText(CONFIG_FILE);
	console.log('done!');
	console.log(text);
}
//获取配置文件信息
var madeSetting = function(configXML){
	if(configXML){
		this.config = {};
		var param = configXML.getElementsByTagName('param');
		madeParamSetting(param);
		var params = configXML.getElementsByTagName('params');
		madeParamsSetting(params);

	}

}
//获取配置文件信息[param]
var madeParamSetting = function(list){
	var item;
	for(var i = 0;i<list.length;++i){
		item = list[i];
		config[item.attributes['name'].value] = item.textContent ; 
	}
}
//获取配置文件信息[params]
var madeParamsSetting = function(list){
	var item,param,args,arg;
	for(var i = 0; i < list.length ; ++i){
		item = list[i];
		args = item.childNodes;
		param = config[item.attributes['name'].value] = [];
		for(var l = 0; l <args.length; ++l){
			arg = args[l]
			if(arg.nodeType==document.ELEMENT_NODE)
				param.push(arg.textContent);
		}
	}
}
//初始化
var init = function(tab){
	//加载配置文件
	loadConfigFile(CONFIG_FILE);
}
//开启插件
var openHtml5Player = function(tab){
	iconPath = 'icon_open.png';
	titleStr = '你已经开启了自动HTML5视频播放';

	chrome.tabs.insertCSS(tab.id,{
					file : '/source/autoHtml5Player.css'
				},null);


	chrome.tabs.executeScript(tab.id, {
					file:'/source/importScript.js',
					allFrames : true
				}, function(){
					
				});
	setTabShow(tab,titleStr,iconPath);
}
//关闭插件
var closeHtml5Player = function(tab){
	iconPath = 'icon.png';
	titleStr = '自动HTML5视频播放器关闭中';
/*
	chrome.tabs.executeScript(tab.id, {
					code:'/source/importScript.js',
					allFrames : true
				}, function(){
					
				});
*/
	setTabShow(tab,titleStr,iconPath);

}
//设置插件图标显示信息
var setTabShow = function(tab,titleStr,iconPath){
	chrome.pageAction.setIcon({
		tabId : tab.id,
		path : iconPath
	});
	chrome.pageAction.setTitle({
		tabId : tab.id,
		title : titleStr
	});
}

//更新插件状态
var updatePluginStatus = function(tab){
	chrome.pageAction.show(tab.id);
	if(tab.status=='complete'){
		var autoStart = this.config['AUTO.START.HTML5.PLAYER'];
		if(autoStart == 'true'||autoStart == true){
			openHtml5Player(tab);
				
		}else{
			closeHtml5Player(tab);
				
		}

			
	}
}

var autoHtml5Player = function(tabId,changeInfo,tab){
	
	updatePluginStatus(tab);	
		
}

//消息通讯监听
chrome.extension.onRequest.addListener(
  function(request, sender, response) {
  	var order = request.todo;
  	switch(order){
  		case 'config':
  			response({config:this.config});
  			break;
  		case 'setConfig':
  			
  			setConfig(request.config);
  			break;
  	}
  	
  }
 );

chrome.tabs.onCreated.addListener(init);

chrome.tabs.onUpdated.addListener(autoHtml5Player);