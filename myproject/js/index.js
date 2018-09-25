window.onload=function(){
document.getElementById("content1").style.display="block";
var tabs=document.querySelectorAll("[data-toggle=tab]");
for(var tab of tabs){
    tab.onclick=function(e){
        e.preventDefault();
        var tab=this;
        var divs=document.querySelectorAll(
            ".form-control>div"
        );
        for(var div of divs){
            div.style.display="none";
        }
        var id=tab.getAttribute("data-target");
        document.querySelector(id).style.display="block";
    }
}
/***********************倒计时器******************************/
		function task(){
		var end=new Date("2018/10/01 00:00:00");
    var now=new Date();
    var s=parseInt((end-now)/1000);
		if(s>0){
    var d=parseInt(s/3600/24);
    if(d<10) d="0"+d;
    var h=parseInt(s%(3600*24)/3600);
    if(h<10) h="0"+h;
    var m=parseInt(s%3600/60);
    if(m<10) m="0"+m;
    s%=60;
    if(s<10) s="0"+s;
    var span=document.getElementById("time");
    span.innerHTML="距离结束："+d+"天"+h+"小时"+m+"分"+s+"秒";
		} else {
				clearIterval(timer);
				timer=null;
				span.innerHTML="活动已结束";
			}
	}
	task();
	var timer=setInterval(task,1000);

	/**************鼠标移动切换*************/	
 var tabs=document.querySelectorAll("[data-toggle=tab]")
		for(var tab of tabs){
    tab.onmousemove=function(e){
        e.preventDefault();
        var tab=this;
        var imgs=document.querySelectorAll(
            "#pic>img"
        );
        for(var img of imgs){
            img.style.zIndex="";
        }
        var id=tab.getAttribute("data-target");
        document.querySelector(id).style.zIndex=1;
    }
}

/**********************轮播图************************/
	setInterval(()=>{
		if($('.carousel-inner>div:first-child>.active').next().length!=0){
			$('.carousel-inner>div:first-child>.active').addClass('lineImg')
				.removeClass('active').next().addClass('active');
		}else{
			$('.carousel-inner>div:first-child>.active').addClass('lineImg').removeClass('active');
			$($('.carousel-inner>div:first-child>div')[0]).addClass('active');
		}
		var start1=0;
		if(start1==0){
				setTimeout(()=>{
					var img=$('.carousel-inner>div:first-child>div');
					var i1,i2,i3,i4,i5;
					for(var i=0;i<img.length;i++){
						if($(img[i]).css('z-index')==5){
							i5=i;
						}else if($(img[i]).css('z-index')==4){
							i4=i;
						}else if($(img[i]).css('z-index')==3){
							i3=i;
						}else if($(img[i]).css('z-index')==2){
							i2=i;
						}else if($(img[i]).css('z-index')==1){
							i1=i;
						}
					}
					$(img[i4]).css('z-index',5);
					$(img[i3]).css('z-index',4);
					$(img[i2]).css('z-index',3);
					$(img[i1]).css('z-index',2);
					$(img[i5]).css('z-index',1);
					var start2=0;
					if(start2==0){
						setTimeout(()=>{
								$(img[i5]).removeClass('lineImg');
						},1000);
					}
				},2000)
		}
	},4000);
}
