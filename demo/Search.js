/**
 * Created by IBM on 2016/3/17.
 */
var http =require('http');
var cheerio = require('cheerio');
//cheerio是一个语法与jq相似的库
var url = 'http://www.imooc.com/learn/348';
//将URL上的html代码全部爬下来
function filterChapters(html){
    var $ =cheerio.load(html);
    var chapters = $('.chapter');

    var courseData =[];
    //放大章的一个数组
    chapters.each(function(item){

        var chapterData = {
            chapterTitle:chapterTitle,
            videos:[]
        }
        //每章中的内容，包括一个标题，和若干小节
        var chapter = $(this);//item不可以
        var chapterTitle = chapter.find('strong').text();
        chapterData.chapterTitle = chapterTitle;
        var videos = chapter.find('.video').children('li');
        videos.each(function(item){
            var video = $(this).find('.studyvideo');
            var videoTitle = video.text();
            var id = video.attr('href').split('video/')[1];

            chapterData.videos.push({
                title:videoTitle,
                id:id
            })
            //每节的内容，包括标头和ID
        })
        courseData.push(chapterData);
    })

    return courseData
}

//输出函数
function printCourseInfo(courseData){

    courseData.forEach(function(item){
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle+'\n');
        item.videos.forEach(function(video){
            console.log(video.id+':'+video.title);
        })
    })
}

http.get(url,function(res){
    var html= '';
    res.on('data',function(data){
        html += data;
    })

    res.on('end',function(){
        var courseData  = filterChapters(html)
        //过滤得到的代码
        printCourseInfo(courseData);
        //输出所要爬的内容
    })
}).on('error',function(){
    console.log('there are some error')
})