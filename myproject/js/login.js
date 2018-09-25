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
//登录
function names_blur(){
			if(!$("uname").value){
				$("shownames").innerHTML="用户名不能为空";
			}else{
				$("shownames").innerHTML="";
			}
		}
	function upwd_blur(){
			if(!$("upwd").value){
				$("showupwd").innerHTML="密码框不能为空";
			}else{
				$("showupwd").innerHTML="";
			}
		}
		function getLogin(){
			var xhr=createXhr();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4 && xhr.status==200){
					var result=xhr.responseText;
					alert(result);
				}
			}
			xhr.open("post","/myProject/login",true);
			var uname=$("uname").value;
			var upwd=$("upwd").value
			var formdata="uname="+uname+"&upwd="+upwd;
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			xhr.send(formdata);
		}