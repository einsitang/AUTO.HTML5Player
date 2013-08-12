var openAutoHtml5 = true;

var autoHtml5Player = function(tabId,changeInfo,tab){
	


	chrome.pageAction.show(tabId);

		var iconPath,titleStr;
		if(tab.status=='complete'){

			if(openAutoHtml5){
				iconPath = 'icon_open.png';
				titleStr = '你已经开启了自动HTML5视频播放';

				chrome.tabs.insertCSS(tab.id,{
					file : 'source/autoHtml5Player.css'
				},null);

				console.log(chrome.extension);

				chrome.tabs.executeScript(tab.id, {
					file:'source/importScript.js',
					allFrames : true
				}, function(){
					
				});

				
				
			}else{
				iconPath = 'icon.png';
				titleStr = '自动HTML5视频播放器关闭中';
			}
			chrome.pageAction.setIcon({
				tabId : tab.id,
				path : iconPath
			});
			chrome.pageAction.setTitle({
				tabId : tab.id,
				title : titleStr
			});
		}
		
}

chrome.tabs.onUpdated.addListener(autoHtml5Player);