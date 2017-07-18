(function () {
    document.addEventListener('DOMContentLoaded', function () {
    	// deicePixelRatio ：设备像素
		var scale = 1 / devicePixelRatio;
		//设置meta 压缩界面 模拟设备的高分辨率
		document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
		var deviceWidth = document.documentElement.clientWidth > 1300 ? 1300 : document.documentElement.clientWidth;
		document.documentElement.style.fontSize = (deviceWidth / 6.4) + 'px';
    }, false);
	window.onresize = function(){
		// deicePixelRatio ：设备像素
		var scale = 1 / devicePixelRatio;
		//设置meta 压缩界面 模拟设备的高分辨率
		document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
		var deviceWidth = document.documentElement.clientWidth > 1300 ? 1300 : document.documentElement.clientWidth
		document.documentElement.style.fontSize = (deviceWidth / 6.4) + 'px';
    };
})(); 