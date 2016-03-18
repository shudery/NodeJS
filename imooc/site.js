/* Created by IBM on 2016/3/18.*/

var express = require('express');
var app = express();
var port = process.env.PORT || 3000
var path = require('path')

app.use(express.static(path.join(__dirname,'bower_components')))
app.use(express.bodyParser());
app.set('view engine','jade')
app.set('views','./views/pages');
app.listen(port);

    app.get('/',function(req,res){
    res.render('index',{
        title:'imooc',
        movies:[{
            title:'机械战警',
            _id:1,
            poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },{
            title:'机械战警',
            _id:2,
            poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },
            {
                title:'机械战警',
                _id:3,
                poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title:'机械战警',
                _id:4,
                poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            }
        ,{
                title:'机械战警',
                _id:5,
                poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title:'机械战警',
                _id:6,
                poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            }]
    })
})
app.get('/movie/:id',function(req,res){
    res.render('detail',{title:'imooc详情',
        moive:{
            doctor:'何塞-趴地利亚',
            country:'美国',
            title:'机械战警',
            year:2014,
            poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
            language:'english',
            flash:"http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf",
            summary:'翻盘自1087年同名科幻经典。由精英部队导演何塞这道的新版机械战警发布首款预告片，大热美剧谋杀男星巧儿换身新机械战警酷黑展架两项，家里奥德曼，三大硒鼓绿叶呼哈'

        }
    })
})
app.get('/admin/movie',function(req,res){
    res.render('admin',{
        title:'imooc后台录入',
        movie:{
            title:'',
            doctor:'',
            country:'',
            year:'',
            poster:'',
            flash:'',
            summary:'',
            language:''
        }
    })
})
app.get('/admin/list',function(req,res){
    res.render('list',{title:'imooc列表',
        moive:{
            title:'机械战警',
            _id:1,
            doctor:'何塞-趴地利亚',
            country:'美国',
            title:'机械战警',
            year:2014,
            poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
            language:'english',
            flash:"http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf",
            summary:'翻盘自1087年同名科幻经典。由精英部队导演何塞这道的新版机械战警发布首款预告片，大热美剧谋杀男星巧儿换身新机械战警酷黑展架两项，家里奥德曼，三大硒鼓绿叶呼哈'

        }
    })
})

console.log('start Server:'+port);
