﻿
//设置球拍初始位置
$(function(){
	$("#paddleB").css("top","20px");
	$("#paddleA").css("top","60px");
});

/*
var KEY={
	UP:38,
	DOWN:40,
	W:87,
	S:83
}

$(function(){
//	监听按键事件
	$(document).keydowm(function(e){
		switch(e.which){
			case KEY.UP://向上键
				获取球拍B的当前位置,转化为int类型,将其向上移动5个像素
				var top=parseInt($("#paddleB").css("top")) ;
				$("#paddleB").css("top",top-5);
				break;
			case KEY.DOWN:
				var top=parseInt($("#paddleB").css("top")) ;
				$("#paddleB").css("top",top+5);
				break;
			//w,s键改变球拍A的位置
			case KEY.W:
				var left=parseInt($("#paddleA").css("top")) ;
				$("#paddleA").css("top",top-5);
				break;
			case KEY.S:
				var top=parseInt($("#paddleA").css("top")) ;
				$("#paddleA").css("top",top+5);
				break;
		}
	});
});

$(docement).keydown(function(e){
	console.log(e.which);
});


