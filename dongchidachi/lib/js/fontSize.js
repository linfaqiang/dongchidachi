(function () {
    document.addEventListener('DOMContentLoaded', function () {
		var deviceWidth = document.documentElement.clientWidth;
		if(parseFloat(deviceWidth)>=640){
             document.documentElement.style.fontSize=100+'px';
		}else{
			document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
		}
		
    }, false);
	window.onresize = function(){
		var deviceWidth = document.documentElement.clientWidth;
		if(parseFloat(deviceWidth)>=640){
             document.documentElement.style.fontSize=100+'px';
		}else{
			document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
		}
};
})(); 