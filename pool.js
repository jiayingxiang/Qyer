const mysql=require('mysql');
//连接mysql数据库模块
const pool=mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'qyer',
	connectionLimit:10
});
//导出连接数据库
module.exports=pool;