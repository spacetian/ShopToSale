﻿
    var data = {
        likes: [
            {
                "proHref": "item/3918",
                "proImg": "http://img01.ningpai.com/1433129397900.jpg",
                "proName": "Apple MacBook Air MJVM2CH/A 11.6英寸宽屏笔记本电脑 128GB 闪存",
                "proPrice": "5888.00"
            }
             ,
            {
                "proHref": "item/3912",
                "proImg": "http://img01.ningpai.com/1433128576304.jpg",
                "proName": "苹果（Apple）iPhone 6 (A1586) 16GB 金色 移动联通电信4G手机",
                "proPrice": "4788.00"
            }
             ,
            {
                "proHref": "item/3914",
                "proImg": "http://img01.ningpai.com/1433128642809.jpg",
                "proName": "苹果（Apple）iPhone 6 (A1586) 16GB 深空灰 移动联通电信4G手机",
                "proPrice": "4788.00"
            }
             ,
            {
                "proHref": "item/3930",
                "proImg": "http://img01.ningpai.com/1433135451671.jpg",
                "proName": "苹果（Apple）iPhone 6 Plus (A1524) 16GB 金色 移动联通电信4G手机",
                "proPrice": "5588.00"
            }
             ,
            {
                "proHref": "item/3940",
                "proImg": "http://img01.ningpai.com/1433136090825.jpg",
                "proName": "苹果(Apple) iPhone 5s (A1530) 16GB 金色 移动联通4G手机",
                "proPrice": "3388.00"
            }
             ,
            {
                "proHref": "item/3937",
                "proImg": "http://img01.ningpai.com/1433136074413.jpg",
                "proName": "佳能（Canon） EOS 70D 单反套机 ",
                "proPrice": "7799.00"
            }
             ,
            {
                "proHref": "item/3974",
                "proImg": "http://img01.ningpai.com/1433139582907.jpg",
                "proName": "松下（Panasonic） XQB60-Q662N 6公斤 全自动波轮洗衣机（灰色）",
                "proPrice": "1288.00"
            }
             ,
            {
                "proHref": "item/3973",
                "proImg": "http://img01.ningpai.com/1433139512638.jpg!160",
                "proName": "华硕（ASUS）A555LF5200 15.6英寸笔记本 ",
                "proPrice": "3999.00"
            }

        ]
    };
var html = template('likes', data);
$(".likes .cont").append(html);
