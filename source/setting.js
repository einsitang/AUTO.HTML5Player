var autoStartToggleBtn = $('#autoStartToggleBtn');

var isAutoStart = false;


chrome.extension.sendRequest({todo:'config'},function(response){
	var config = response.config;
	isAutoStart = config['AUTO.START.HTML5.PLAYER'];

	if(isAutoStart=='true' || isAutoStart == true)
		autoStartToggleBtn.bootstrapSwitch('setState', true);
	else
		autoStartToggleBtn.bootstrapSwitch('setState', false);

	autoStartToggleBtn.on('switch-change',function(e,data){
		if(data.value){
			openAutoHtml5Player();
		
		}else{
			closeAutoHtml5Player();
		}

	});
});

var openAutoHtml5Player = function(){
	var config = {
		"AUTO.START.HTML5.PLAYER" : true
	};
	chrome.extension.sendRequest({todo:'setConfig',config:config});
}

var closeAutoHtml5Player = function(){
	var config = {
		"AUTO.START.HTML5.PLAYER" : false
	}
	chrome.extension.sendRequest({todo:'setConfig',config:config});
}
