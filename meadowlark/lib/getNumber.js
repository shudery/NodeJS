/**
 * Created by IBM on 2016/3/17.
 */
var numbers = [1,2,3,4,5];//在about发送动态内容

//node模块，提供了一个模块化和封装的机制
exports.randomNumbers=function(){
    var a = numbers[Math.floor(Math.random()*numbers.length)];
    return a;
}