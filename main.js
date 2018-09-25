/*引入项目所需要的包*/
const express=require('express');
const bodyParser=require('body-parser');
const myProject=require('./routes/myProject.js');
/*使用express创建web服务器*/
var app=express();
app.listen(3000);
//托管静态资源
app.use(express.static('./myProject'));
//配置body-parser
app.use(bodyParser.urlencoded({
	extended:false
}));
/*使用路由器管理所有用户模块下的路由*/
app.use('/myProject',myProject);