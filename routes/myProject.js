const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
//注册
router.post('/register',(req,res)=>{
	var obj=req.body;
	var uname=obj.uname;
	if(!uname){
		res.send({code:401,msg:'用户名不能为空'});
		return;
	}
	var upwd=obj.upwd;
	if(!upwd){
		res.send({code:402,msg:'密码不能为空'});
		return;
	}
	var uphone=obj.uphone;
	if(!uphone){
		res.send({code:403,msg:'手机号码不能为空'});
		return;
	}
	var uemail=obj.uemail;
	if(!uemail){
		res.send({code:404,msg:'邮箱不能为空'});
		return;
	}
	var sql=`insert into User values(NULL,?,?,?,?)`;
	pool.query(sql,[uname,upwd,uphone,uemail],(err,result)=>{
		if(err) throw err;
		res.send('注册成功');
	});
});
router.get('/checkUname',(req,res)=>{
			var uname=req.query.uname;
			if(!uname){
				res.send('请输入用户名');
				return;
			}
			var sql=`SELECT * FROM User WHERE	uname=?`;
			pool.query(sql,[uname],(err,result)=>{
				if(err)throw err;
				if(result.length>0){
					res.send('用户名已存在');
				}else{
					res.send('用户名可注册');
				}
			});
});
router.get('/checkPhone',(req,res)=>{
	var uphone=req.query.uphone;
	if(!uphone){
		res.send('请输入手机号');
		return;
	}
	var sql=`SELECT * FROM User WHERE	uphone=?`;
			pool.query(sql,uphone,(err,result)=>{
				if(err)throw err;
				if(result.length>0){
					res.send('手机号已被注册');
				}else{
					res.send('手机号可注册');
				}
			});
});

//登录
router.post('/login',(req,res)=>{
	var uname=req.body.uname;
	if(!uname){
		res.send('请输入用户名');
		return;
	}
	var upwd=req.body.upwd;
	if(!upwd){
		res.send('请输入密码');
		return;
	}
	var sql=`SELECT * FROM User WHERE uname=? AND upwd=?`;
	pool.query(sql,[uname,upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('登录成功');
		}else{
			res.send('用户名或密码错误');
		}
	});
});

router.get('/',(req,res)=>{
	var pid=req.query.pid;
	var sql=`select * from Product_list where pid=?`;
	pool.query(sql,[pid],(err,result)=>{
		if(err) throw err;
		res.send(result);
		console.log(result);
	});
});

router.get('/discuss',(req,res)=>{
	var uid=req.query.uid;
	var sql=`select * from User_Comment where uid=?`;
	pool.query(sql,[uid],(err,result)=>{
		if(err) throw err;
		res.send(result);
		console.log(result);
	});
});

router.get('/TJ',(req,res)=>{
	var tid=req.query.tid;
	var sql=`select * from Today_TJ where tid=?`;
	pool.query(sql,[tid],(err,result)=>{
		if(err) throw err;
		res.send(result);
		console.log(result);
	});
});

module.exports=router;