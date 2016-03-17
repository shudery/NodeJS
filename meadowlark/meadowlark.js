/**
 * Created by IBM on 2016/3/16.
 * 先将统一创建好的模板放在layouts中，在view中放入需要填充到模板里的代码，
 * 实现了固定模板和变化内容的分离，斯阔以！
 */

var express = require('express');
var app = express();
var number = require('./lib/getNumber.js')
//require默认的搜索位置是node_modules

//var numbers = [1,2,3,4,5]//在about发送动态内容

var handlebars = require('express3-handlebars')
    .create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
//创建了一个视图引擎，并对express进行了配置，将其作为默认的视图引擎
//创建handlebars实例时默认使用的是views中的layouts中的main模板
app.set('port',process.env.PORT || 3000);
//给页面加上路由，注意必须写在404定制页面函数之前

app.use(express.static(__dirname+'/public'));
//static中间件可以将多个目录指派为包含静态资源的目录，其中资源不经过处理直接送到客户端
//static为所有静态文件创建路由，注意要加在所有路由之前

//app.get('/',function(req,res){
//    res.type('text/plain');
//    res.send('this is shudery nodejs express');
//    //res.set,res.status代替了node 的res.writeHead
//    //res.send代替了Node 的 res.end
//});
//app.get('/about',function(req,res){
//    res.type('text/plain') ;
//    res.send('this is about page');
//});

app.get('/',function(req,res){
    res.render('home');
    //不再需要制定内容类型，默认返回的是text/html类型
    //这些替换{{{body}}}的内容存储在views下
})
app.get('/about',function(req,res){
    res.render('about',{numbers:number.randomNumbers()});
    //给about页面中的{{number}}发送randomNumbers数据
})

////定制404,500页面
//app.use(function(req,res){
//    res.type('text/plain');
//    res.status(404);
//    res.send('404-no found');
//});
//app.use(function(err,req,res,next){
//    console.error(err.stack);
//    res.type('text/plain');
//    res.status(500);
//    res.send('500-server error');
//});
app.use(function(req,res,next){
    //next有啥用？
    res.status(404);
    res.render('404');
})
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
})

app.listen(app.get('port'),function(){
    console.log('express started on http://localhost:'+app.get('port')+';press ctrl+c to terminate!');
});