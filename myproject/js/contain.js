//DOM操作
function $(id){
	return document.getElementById(id);
} 
//创建异步函数
function createXhr(){
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject("microsoft.XMLHttp");
	}
	return xhr;
}
//注册
function register(){
	var xhr=createXhr();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			var result=xhr.responseText;
			alert(result);
			uname_blur();
			uphone_blur();
		}
	}
	xhr.open("post","/myProject/register",true);
	var uname=$("uname").value;
	var upwd=$("upwd").value;
	/*var cpwd=$("cpwd").value;*/
	var uphone=$("uphone").value;
	var uemail=$("uemail").value;
	var formdata="uname="+uname+"&upwd="+upwd+"&uphone="+uphone+"&uemail="+uemail;
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.send(formdata);
}

//帐号框失去焦点时判断是否符合
function uname_blur(){
	var xhr=createXhr();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			var result=xhr.responseText;
			if($("uname").value.length<6){
				$("button").disabled=true;
				$("showUname").innerHTML="帐号不得少于6位数";
			}else if(result=="用户名已存在"){
				$("button").disabled=true;	
				$("showUname").innerHTML=result;
			}else{
				$("button").disabled=false;
				$("showUname").innerHTML=result;
			}
		}
	}
	var uname=$("uname").value;
	xhr.open("get","/myProject/checkUname?uname="+uname,true);
	xhr.send(null);
}
//密码框失去焦点时判断是否符合
function upwd_blur(){
	if(!$("upwd").value || $("upwd").value.search(/^[a-zA-Z][0-9a-zA-Z]{6,}/)==-1){
		$("button").disabled=true;
		$("showUpwd").innerHTML="请输入正确格式的密码";
	}else{
		$("button").disabled=false;
		$("showUpwd").innerHTML="";
	}
}
//判断两次密码输入是否一致
function cpwd_blur(){
	if($("cpwd").value==$("upwd").value){
		$("showCpwd").innerHTML="两次密码一致";
	}else{
		$("showCpwd").innerHTML="密码不一致";
		$("button").disabled=true;
	}
}
//判断手机号是否被注册
function uphone_blur(){
	var xhr=createXhr();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			var result=xhr.responseText;
			if($("uphone").value.length<11 || $("uphone").value.search(/1[3-8]\d{9}/)==-1){
				$("button").disabled=true;
				$("showPhone").innerHTML="请重新输入";
			}else if(result=="手机号已被注册"){
				$("button").disabled=true;
				$("showPhone").innerHTML="手机已被注册";
			}else{
				$("button").disabled=false;
				$("showPhone").innerHTML="手机可注册";
			}
		}
	}
	var uphone=$("uphone").value
	xhr.open("get","/myProject/checkPhone?uphone="+uphone,true);
	xhr.send(null);
}
//失去焦点时判断邮箱是否符合
function email_blur(){
	if(!$("uemail").value || $("uemail").value.search(/[^.@]+@[^.@]+\.(com|cn|net)(\.cn)?/)==-1){
		$("button").disabled=true;
		$("showEmail").innerHTML="请输入正确的邮箱";
	}else{
		$("showEmail").innerHTML="邮箱可用";
	}
}