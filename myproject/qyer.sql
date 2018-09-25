SET NAMES utf8;
DROP DATABASE IF EXISTS qyer;
CREATE DATABASE qyer CHARSET=utf8;
USE qyer;
DROP TABLE IF EXISTS User;
CREATE TABLE User(
	uid int PRIMARY KEY AUTO_INCREMENT,		#用户编号
	uname varchar(16) NOT NULL,				#用户账号
	upwd varchar(16),							#用户密码
	uphone varchar(32),						#手机号码
	uemail varchar(16)							#用户邮箱
);

#储存图片
DROP TABLE IF EXISTS Product_list;
CREATE TABLE Product_list(
	pid int NOT NULL, #商品编号
	end_day int,						#结束时间
	pic varchar(128),					#图片地址
	title varchar(64),					#商品标题
	price decimal(10,2),				#商品价格
	style varchar(16)					#商品样式
);
INSERT INTO Product_list VALUES('1','10','./img/product-1.jpg','【国内包邮】欧洲铁路两国自选通票(欧铁官方一级...','982','秒杀');
INSERT INTO Product_list VALUES('2','10','./img/product-2.jpg','上海直飞返斯里兰卡+马尔代夫9天8晚自由行（...','6999','限时立减100元');
INSERT INTO Product_list VALUES('3','10','./img/product-3.jpg','【秒杀】限时特惠 泰国普吉岛 皇帝岛珊瑚岛 双层...','189','秒杀');
INSERT INTO Product_list VALUES('4','10','./img/product-4.jpg','[中秋][国庆]北京往返苏梅岛5-7天自由行(亲子/蜜...','4490','限时立减100元');
INSERT INTO Product_list VALUES('5','10','./img/product-5.jpg','泰国普吉岛 遨游号豪华游艇 水陆双拼攀牙湾一日...','400','秒杀');
INSERT INTO Product_list VALUES('6','10','./img/product-6.jpg','深圳/广州直飞沙巴5-6天自由行(赠接送机+电话...','2380','限时立减150元');

#评论留言
DROP TABLE IF EXISTS User_Comment;
CREATE TABLE User_Comment(
	uid int NOT NULL,							#用户编号
	pic varchar(128),							#图片地址
	discuss_count int,							#评论数量
	user_pic varchar(64),						#用户头像
	nick_name varchar(16),						#用户昵称
	title varchar(64)							#评论标题
);
INSERT INTO User_Comment VALUES(1,'./img/section-7.jpg',14,'./img/head-portrait-1.jpg','穷游大秘书','今日话题|中秋国庆怎么High？进来看看能否同行约伴~');
INSERT INTO User_Comment VALUES(2,'./img/section-8.jpg',22,'./img/head-portrait-2.jpg','小A家的饭团','维京游轮旅游全攻略｜再游多瑙河，听时光与音乐共鸣');
INSERT INTO User_Comment VALUES(3,'./img/section-9.jpg',31,'./img/head-portrait-3.jpg','小盒饭','【盒饭看世界】雪山与森林之歌，迥然不同的霓虹：日本中部山区全');
INSERT INTO User_Comment VALUES(4,'./img/section-10.jpg',15,'./img/head-portrait-4.jpg','硕饱儿','北非之春——多彩摩洛哥，环线自驾两千公里|卡萨布兰卡、马拉喀');
INSERT INTO User_Comment VALUES(5,'./img/section-11.jpg',32,'./img/head-portrait-5.jpg','荒梁','法罗群岛自驾+徒步：探秘北大西洋最后的遗世秘境');
INSERT INTO User_Comment VALUES(6,'./img/section-12.jpg',14,'./img/head-portrait-6.jpg','Tino-Leung','印度绝色：过最疯狂的节日，看最幸福的笑脸——洒红节狂欢指南');
INSERT INTO User_Comment VALUES(7,'./img/section-13.jpg',14,'./img/head-portrait-7.jpg','相交平行线Jack','纵行巴尔干--1车4人3国9日（塞尔维亚+波黑+黑山“浮潜”游');
INSERT INTO User_Comment VALUES(8,'./img/section-14.jpg',14,'./img/head-portrait-8.jpg','Helen晓世界','邂逅欧若拉，枫叶做霓裳——加拿大秋日自驾国家公园极光之旅');

#今日推荐
DROP TABLE IF EXISTS Today_TJ;
CREATE TABLE Today_TJ(
	tid int NOT NULL,				#编号
	pic varchar(128),				#图片/视频路径
	type varchar(8),				#类型
	nick_name varchar(16),			#用户昵称
	place varchar(16),				#游玩地区
	price decimal(10,2),			#价格
	count int,						#浏览人数
	title varchar(64)				#标题
);
INSERT INTO Today_TJ VALUES(1,"./video/c9af.mp4	","视频","元气大暴走","伦敦",NULL,NULL,"小墨阿猴寻味伦敦唐人街—榴莲月饼大写的好吃");
INSERT INTO Today_TJ VALUES(2,"./img/section-2.jpg","折扣",NULL,"上海","999",NULL,"[国庆][中秋][暑期]上海直飞甲米6-7天往返含税机票(含一晚甲米品");
INSERT INTO Today_TJ VALUES(3,"./img/section-3.jpg","游记","阿呀阿拉蕾",NULL,NULL,35917,"【阿拉蕾】逃离炎夏，去昆士兰过个不冷的冬天（凯恩斯、道格");
INSERT INTO Today_TJ VALUES(4,"./img/section-4.jpg","折扣",NULL,"天津","999",NULL,"[全年爆款][国庆][枫叶季]天津直飞大阪/东京6天往返含税机票(可");
INSERT INTO Today_TJ VALUES(5,"./img/section-1.jpg","游记","空心大哥",NULL,NULL,14038,"【阿拉蕾】逃离炎夏，去昆士兰过个不冷的冬天（凯恩斯、道格");
INSERT INTO Today_TJ VALUES(6,"./img/section-5.jpg" ,"游记","飘来荡去宝宝酱",NULL,NULL,19250,"最后的清流，四万十川。四国的秘境，大步危。龙马的故乡，高");
INSERT INTO Today_TJ VALUES(7,"./img/section-6.jpg" ,"游记","fbird22",NULL,NULL,41510,"有冰雪的圣诞节，在白天最短的日子去了白天最短的地方，挪威");