/**
 * Created by IBM on 2016/3/15.
 */

var teacher = require('./teacher');
var students = require('./students');

function add(teacherN,studentsN){
    teacher.add(teacherN);
    studentsN.forEach(function(item,index){
        students.add(item);
    })
}

exports.add =add;
//module.exports=add;