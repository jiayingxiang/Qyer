function ajax({url,type,data,dataType}){
  return new Promise(function(open,err){
    var xhr=new XMLHttpRequest();
  //2.绑定监听事件
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
      if(dataType!==undefined
          &&dataType.toLowerCase()==="json")
        var res=JSON.parse(xhr.responseText);
      else
        var res=xhr.responseText
      open(res);
    }
  }
  if(type.toLowerCase()=="get"&&data!=undefined){
    url+="?"+data;
  }
  //3.打开连接
  xhr.open(type,url,true);
  if(type.toLowerCase()==="post")
    //增加：设置请求消息头
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  //4.发送请求
  if(type.toLowerCase()=="post"&&data!==undefined)
    xhr.send(data);
  else
    xhr.send(null);
})
}
	
(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject",	
		type:"get",
		dataType:"json",
		data:"pid=1"
	});
  var {end_day,pic,title,price,style}=res[0];
	var html1=`<img src=${pic}>
						<svg width="128" height="30" viewBox="0 0 128 30" xmlns="http://www.w3.org/2000/svg"><title>Rectangle 4</title><path d="M0 0h128l-6.812 25.546A6 6 0 0 1 115.39 30H0V0z" fill="#FF7362" fill-rule="evenodd"/></svg>
						<p>距结束&nbsp;${end_day}天</p>
						<div class="block">
							<div class="title"><a href="#">${title}</a></div>
							<div class="tag"><a href="#">${style}</a></div>
							<div class="price">¥<em>${price}</em>元起</div>
						</div>`;
		var parent1=document.querySelector(".section-two>.card-list>.card");
		parent1.innerHTML=html1;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject",	
		type:"get",
		dataType:"json",
		data:"pid=2"
	});
  var {end_day,pic,title,price,style}=res[0];
	var html2=`<img src=${pic}>
						<svg width="128" height="30" viewBox="0 0 128 30" xmlns="http://www.w3.org/2000/svg"><title>Rectangle 4</title><path d="M0 0h128l-6.812 25.546A6 6 0 0 1 115.39 30H0V0z" fill="#FF7362" fill-rule="evenodd"/></svg>
						<p>距结束&nbsp;${end_day}天</p>
						<div class="block">
							<div class="title"><a href="#">${title}</a></div>
							<div class="tag"><a href="#">${style}</a></div>
							<div class="price">¥<em>${price}</em>元起</div>
						</div>`;
		var parent2=document.querySelector(".section-two>.card-list>.card:nth-child(2)");
		parent2.innerHTML=html2;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject",	
		type:"get",
		dataType:"json",
		data:"pid=3"
	});
  var {end_day,pic,title,price,style}=res[0];
	var html3=`<img src=${pic}>
						<svg width="128" height="30" viewBox="0 0 128 30" xmlns="http://www.w3.org/2000/svg"><title>Rectangle 4</title><path d="M0 0h128l-6.812 25.546A6 6 0 0 1 115.39 30H0V0z" fill="#FF7362" fill-rule="evenodd"/></svg>
						<p>距结束&nbsp;${end_day}天</p>
						<div class="block">
							<div class="title"><a href="#">${title}</a></div>
							<div class="tag"><a href="#">${style}</a></div>
							<div class="price">¥<em>${price}</em>元起</div>
						</div>`;
		var parent3=document.querySelector(".section-two>.card-list>.card:nth-child(3)");
		parent3.innerHTML=html3;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject",	
		type:"get",
		dataType:"json",
		data:"pid=4"
	});
  var {end_day,pic,title,price,style}=res[0];
	var html4=`<img src=${pic}>
						<svg width="128" height="30" viewBox="0 0 128 30" xmlns="http://www.w3.org/2000/svg"><title>Rectangle 4</title><path d="M0 0h128l-6.812 25.546A6 6 0 0 1 115.39 30H0V0z" fill="#FF7362" fill-rule="evenodd"/></svg>
						<p>距结束&nbsp;${end_day}天</p>
						<div class="block">
							<div class="title"><a href="#">${title}</a></div>
							<div class="tag"><a href="#">${style}</a></div>
							<div class="price">¥<em>${price}</em>元起</div>
						</div>`;
		var parent4=document.querySelector(".section-two>.card-list1>.card:nth-child(1)");
		parent4.innerHTML=html4;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject",	
		type:"get",
		dataType:"json",
		data:"pid=5"
	});
  var {end_day,pic,title,price,style}=res[0];
	var html5=`<img src=${pic}>
						<svg width="128" height="30" viewBox="0 0 128 30" xmlns="http://www.w3.org/2000/svg"><title>Rectangle 4</title><path d="M0 0h128l-6.812 25.546A6 6 0 0 1 115.39 30H0V0z" fill="#FF7362" fill-rule="evenodd"/></svg>
						<p>距结束&nbsp;${end_day}天</p>
						<div class="block">
							<div class="title"><a href="#">${title}</a></div>
							<div class="tag"><a href="#">${style}</a></div>
							<div class="price">¥<em>${price}</em>元起</div>
						</div>`;
		var parent5=document.querySelector(".section-two>.card-list1>.card:nth-child(2)");
		parent5.innerHTML=html5;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject",	
		type:"get",
		dataType:"json",
		data:"pid=6"
	});
  var {end_day,pic,title,price,style}=res[0];
	var html6=`<img src=${pic}>
						<svg width="128" height="30" viewBox="0 0 128 30" xmlns="http://www.w3.org/2000/svg"><title>Rectangle 4</title><path d="M0 0h128l-6.812 25.546A6 6 0 0 1 115.39 30H0V0z" fill="#FF7362" fill-rule="evenodd"/></svg>
						<p>距结束&nbsp;${end_day}天</p>
						<div class="block">
							<div class="title"><a href="#">${title}</a></div>
							<div class="tag"><a href="#">${style}</a></div>
							<div class="price">¥<em>${price}</em>元起</div>
						</div>`;
		var parent6=document.querySelector(".section-two>.card-list1>.card:nth-child(3)");
		parent6.innerHTML=html6;
})();

/****************************************/
(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject/discuss",	
		type:"get",
		dataType:"json",
		data:"uid=1"
	});
  var {pic,discuss_count,user_pic,nick_name,title}=res[0];
	var html1=`<div class="pic">
							<img src=${pic}>
							<div class="discuss"><img src="./img/LT.png"><span>${discuss_count}</span></div>
						</div>
						<div class="user-info">
							<span><img src=${user_pic}></span>
							<span><a href="#">${nick_name}</a></span>
						</div>
						<div class="caption">
							<a href="#">${title}</a>
						</div>
						<div class="icon-three">
							<svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="100" height="64" viewBox="0 0 100 64"><path fill="#ED7063" d="M100 52H0V-1h100v53z"/><path fill="#AE564C" d="M0 52h10v11z"/></svg>
						</div>`;
		var parent1=document.querySelector(".section-three>.palette>.thread>.thread-item:nth-child(1)");
		parent1.innerHTML=html1+parent1.innerHTML;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject/discuss",	
		type:"get",
		dataType:"json",
		data:"uid=2"
	});
  var {pic,discuss_count,user_pic,nick_name,title}=res[0];
	var html2=`<div class="pic">
							<img src=${pic}>
							<div class="discuss"><img src="./img/LT.png"><span>${discuss_count}</span></div>
						</div>
						<div class="user-info">
							<span><img src=${user_pic}></span>
							<span><a href="#">${nick_name}</a></span>
						</div>
						<div class="caption">
							<a href="#">${title}</a>
						</div>
						<div class="icon-three">
							<svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="100" height="64" viewBox="0 0 100 64"><path fill="#ED7063" d="M100 52H0V-1h100v53z"/><path fill="#AE564C" d="M0 52h10v11z"/></svg>
						</div>`;
		var parent2=document.querySelector(".section-three>.palette>.thread>.thread-item:nth-child(2)");
		parent2.innerHTML=html2+parent2.innerHTML;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject/discuss",	
		type:"get",
		dataType:"json",
		data:"uid=3"
	});
  var {pic,discuss_count,user_pic,nick_name,title}=res[0];
	var html3=`<div class="pic">
							<img src=${pic}>
							<div class="discuss"><img src="./img/LT.png"><span>${discuss_count}</span></div>
						</div>
						<div class="user-info">
							<span><img src=${user_pic}></span>
							<span><a href="#">${nick_name}</a></span>
						</div>
						<div class="caption">
							<a href="#">${title}</a>
						</div>
						<div class="icon-three">
							<svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="100" height="64" viewBox="0 0 100 64"><path fill="#ED7063" d="M100 52H0V-1h100v53z"/><path fill="#AE564C" d="M0 52h10v11z"/></svg>
						</div>`;
		var parent3=document.querySelector(".section-three>.palette>.thread>.thread-item:nth-child(3)");
		parent3.innerHTML=html3+parent3.innerHTML;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject/discuss",	
		type:"get",
		dataType:"json",
		data:"uid=4"
	});
  var {pic,discuss_count,user_pic,nick_name,title}=res[0];
	var html4=`<div class="pic">
							<img src=${pic}>
							<div class="discuss"><img src="./img/LT.png"><span>${discuss_count}</span></div>
						</div>
						<div class="user-info">
							<span><img src=${user_pic}></span>
							<span><a href="#">${nick_name}</a></span>
						</div>
						<div class="caption">
							<a href="#">${title}</a>
						</div>
						<div class="icon-three">
							<svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="100" height="64" viewBox="0 0 100 64"><path fill="#ED7063" d="M100 52H0V-1h100v53z"/><path fill="#AE564C" d="M0 52h10v11z"/></svg>
						</div>`;
		var parent4=document.querySelector(".section-three>.palette>.thread>.thread-item:nth-child(4)");
		parent4.innerHTML=html4+parent4.innerHTML;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject/discuss",	
		type:"get",
		dataType:"json",
		data:"uid=5"
	});
  var {pic,discuss_count,user_pic,nick_name,title}=res[0];
	var html5=`<div class="pic">
							<img src=${pic}>
							<div class="discuss"><img src="./img/LT.png"><span>${discuss_count}</span></div>
						</div>
						<div class="user-info">
							<span><img src=${user_pic}></span>
							<span><a href="#">${nick_name}</a></span>
						</div>
						<div class="caption">
							<a href="#">${title}</a>
						</div>
						<div class="icon-three">
							<svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="100" height="64" viewBox="0 0 100 64"><path fill="#ED7063" d="M100 52H0V-1h100v53z"/><path fill="#AE564C" d="M0 52h10v11z"/></svg>
						</div>`;
		var parent5=document.querySelector(".section-three>.palette>.thread1>.thread-item:nth-child(1)");
		parent5.innerHTML=html5+parent5.innerHTML;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject/discuss",	
		type:"get",
		dataType:"json",
		data:"uid=6"
	});
  var {pic,discuss_count,user_pic,nick_name,title}=res[0];
	var html6=`<div class="pic">
							<img src=${pic}>
							<div class="discuss"><img src="./img/LT.png"><span>${discuss_count}</span></div>
						</div>
						<div class="user-info">
							<span><img src=${user_pic}></span>
							<span><a href="#">${nick_name}</a></span>
						</div>
						<div class="caption">
							<a href="#">${title}</a>
						</div>
						<div class="icon-three">
							<svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="100" height="64" viewBox="0 0 100 64"><path fill="#ED7063" d="M100 52H0V-1h100v53z"/><path fill="#AE564C" d="M0 52h10v11z"/></svg>
						</div>`;
		var parent6=document.querySelector(".section-three>.palette>.thread1>.thread-item:nth-child(2)");
		parent6.innerHTML=html6+parent6.innerHTML;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject/discuss",	
		type:"get",
		dataType:"json",
		data:"uid=7"
	});
  var {pic,discuss_count,user_pic,nick_name,title}=res[0];
	var html7=`<div class="pic">
							<img src=${pic}>
							<div class="discuss"><img src="./img/LT.png"><span>${discuss_count}</span></div>
						</div>
						<div class="user-info">
							<span><img src=${user_pic}></span>
							<span><a href="#">${nick_name}</a></span>
						</div>
						<div class="caption">
							<a href="#">${title}</a>
						</div>
						<div class="icon-three">
							<svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="100" height="64" viewBox="0 0 100 64"><path fill="#ED7063" d="M100 52H0V-1h100v53z"/><path fill="#AE564C" d="M0 52h10v11z"/></svg>
						</div>`;
		var parent7=document.querySelector(".section-three>.palette>.thread1>.thread-item:nth-child(3)");
		parent7.innerHTML=html7+parent7.innerHTML;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject/discuss",	
		type:"get",
		dataType:"json",
		data:"uid=8"
	});
  var {pic,discuss_count,user_pic,nick_name,title}=res[0];
	var html8=`<div class="pic">
							<img src=${pic}>
							<div class="discuss"><img src="./img/LT.png"><span>${discuss_count}</span></div>
						</div>
						<div class="user-info">
							<span><img src=${user_pic}></span>
							<span><a href="#">${nick_name}</a></span>
						</div>
						<div class="caption">
							<a href="#">${title}</a>
						</div>
						<div class="icon-three">
							<svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="100" height="64" viewBox="0 0 100 64"><path fill="#ED7063" d="M100 52H0V-1h100v53z"/><path fill="#AE564C" d="M0 52h10v11z"/></svg>
						</div>`;
		var parent8=document.querySelector(".section-three>.palette>.thread1>.thread-item:nth-child(4)");
		parent8.innerHTML=html8+parent8.innerHTML;
})();

/****************************************/
(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject/TJ",	
		type:"get",
		dataType:"json",
		data:"tid=1"
	});
  var {pic,type,nick_name,place,price,count,title}=res[0];
	var html1=`<div>${type}</div>
						<video src=${pic} preload controls loop></video>
						<a href="#" class="info">${title}</a><br>
						<span class="bottom-title">${nick_name}</span>
						<span class="bottom-place">${place}</span>`;
		var parent1=document.querySelector(".section>.wrapper>.recommend>.recommend-item:nth-child(1)");
		parent1.innerHTML=html1;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject/TJ",	
		type:"get",
		dataType:"json",
		data:"tid=2"
	});
  var {pic,type,nick_name,place,price,count,title}=res[0];
	var html2=`<div>${type}</div>
						<img src=${pic} class="image">
						<a href="#">${title}</a><br>
						<span class="bottom-title">${place}</span>
						<span class="bottom-place"><em>${price}</em>元起</span>`;
		var parent2=document.querySelector(".section>.wrapper>.recommend>.recommend-item:nth-child(2)");
		parent2.innerHTML=html2;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject/TJ",	
		type:"get",
		dataType:"json",
		data:"tid=3"
	});
  var {pic,type,nick_name,place,price,count,title}=res[0];
	var html3=`<div>${type}</div>
						<img src=${pic} class="image">
						<a href="#">${title}</a><br>
						<span class="bottom-title">${nick_name}</span>
						<span class="bottom-place">${count}人浏览过</span>`;
		var parent3=document.querySelector(".section>.wrapper>.recommend>.recommend-item:nth-child(3)");
		parent3.innerHTML=html3;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject/TJ",	
		type:"get",
		dataType:"json",
		data:"tid=4"
	});
  var {pic,type,nick_name,place,price,count,title}=res[0];
	var html4=`<div>${type}</div>
						<img src=${pic} class="image">
						<a href="#">${title}</a><br>
						<span class="bottom-title">${place}</span>
						<span class="bottom-place"><em>${price}</em>元起</span>`;
		var parent4=document.querySelector(".section>.wrapper>.recommend1>.recommend-item:nth-child(1)");
		parent4.innerHTML=html4;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject/TJ",	
		type:"get",
		dataType:"json",
		data:"tid=5"
	});
  var {pic,type,nick_name,place,price,count,title}=res[0];
	var html5=`<div>${type}</div>
						<img src=${pic} class="image">
						<a href="#">${title}</a><br>
						<span class="bottom-title">${nick_name}</span>
						<span class="bottom-place">${count}人浏览过</span>`;
		var parent5=document.querySelector(".section>.wrapper>.recommend1>.recommend-item:nth-child(2)");
		parent5.innerHTML=html5;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject/TJ",	
		type:"get",
		dataType:"json",
		data:"tid=6"
	});
  var {pic,type,nick_name,place,price,count,title}=res[0];
	var html6=`<div>${type}</div>
						<img src=${pic} class="image">
						<a href="#">${title}</a><br>
						<span class="bottom-title">${nick_name}</span>
						<span class="bottom-place">${count}人浏览过</span>`;
		var parent6=document.querySelector(".section>.wrapper>.recommend1>.recommend-item:nth-child(3)");
		parent6.innerHTML=html6;
})();

(async function(){
	var res=await ajax({
		url:"http://127.0.0.1:3000/myProject/TJ",	
		type:"get",
		dataType:"json",
		data:"tid=7"
	});
  var {pic,type,nick_name,place,price,count,title}=res[0];
	var html7=`<div>${type}</div>
						<img src=${pic} class="image">
						<a href="#">${title}</a><br>
						<span class="bottom-title">${nick_name}</span>
						<span class="bottom-place">${count}人浏览过</span>`;
		var parent7=document.querySelector(".section>.wrapper>.recommend1>.recommend-item:nth-child(4)");
		parent7.innerHTML=html7;
})();