（一）
	javascript代码的最佳位置为</body>之前，因为浏览器为自上而下加载和渲染内容的，把代码放在最后，能确保
	文档内容已全部加载完。事实上，如果浏览器在页面中间加载javascript代码，就会中断正在进行的加载与渲染。
	jQuery(document).ready(function){};
	$(function(){});
	$(document).ready(function_callbak);
	以上三种方法可确保在页面加载完后执行代码
	
（二）
	使用parseInt()将字符串转化为数字
	直接使用$("#paddleA").css("top")返回的是带单位的值，如：100px
(三)
	从检测到一次按键就调用一次移动方法，变为，保存哪个键按下和放开的状态，再使用一个JavaScript每隔30毫秒就
	进行一次按键检测。使可以同时移动两个球拍。
（四）
	setInterval(expression,milliseconds)
	expression：将执行的回调函数或代码表达式
	milliseconds：执行表达式的间隔，单位毫秒
