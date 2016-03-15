/**
 * Created by IBM on 2016/3/15.
 */
//var myclass =require('./class');
//
//myclass.add("shude",['1','2','3'])
//调用myclass模块的add方法，class中还有调用其他模块

var myclass = require('./class');

function add(classes){
    classes.forEach(function(item,index){
        var classnum = item;
        var teacherN = item.teacherN;
        var studentsN = item.studentsN;

        myclass.add(teacherN,studentsN);
    })
}
exports.add= add;