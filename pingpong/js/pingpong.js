var KEY={
	UP:38,
	DOWN:40,
	W:87,
	S:83
};
$(function(){
//	监听按键事件
	$(document).keydown(function(e){
		//通过调用even对象的which来获得按键代码
		//控制台日志功能并观察按键的对应整数值
		console.log(e.which);

		switch(e.which){
			case KEY.UP://向上键
				//获取球拍B的当前位置,转化为int类型,将其向上移动5个像素
				var top=parseInt($("#paddleB").css("top")) ;
				$("#paddleB").css("top",top-5);
				break;
			case KEY.DOWN:
				var top=parseInt($("#paddleB").css("top")) ;
				$("#paddleB").css("top",top+5);
				break;
			//w,s键改变球拍A的位置
			case KEY.W:
				var top=parseInt($("#paddleA").css("top")) ;
				$("#paddleA").css("top",top-5);
				break;
			case KEY.S:
				var top=parseInt($("#paddleA").css("top")) ;
				$("#paddleA").css("top",top+5);
				break;
		}
	});
});

//$(docement).keydown(function(e){
//	console.log(e.which);
//});