使用transition与transform来实现动画效果。在chrome与safari上需要使用-webkit-。
transform: transform-function1 transform-function2;可对目标元素进行移动、缩放、旋转、倾斜.
2D变换：
rotate(angle)旋转  translate(tx,ty)移动  translateX/Y(number)单独移动  scale(sx,sy)缩放元素  scaleX/Y(number)单独缩放
3D变换：
rotate3d(x,y,z,angle)  scale3d(sx,sy,sz)  

transition: property_name duration timing_function delay;让样式平滑地过渡
property_name:应用CSS3转换的属性名，可为all
duration:转换过程的时间
timing_function:指定开始值与结束值之间的插值法，默认有ease，还有ease-in,ease-out,linear
delay:指定延迟的秒数后进行转换
