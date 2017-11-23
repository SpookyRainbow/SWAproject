
var database = firebase.database();
var refTeachers = database.ref('Teachers');
var refStudents = database.ref('Students');
var refCourses = database.ref('Courses');

refTeachers.on('value', getTeachersFromDB, error1);
refStudents.on('value', getStudentsFromDB, error2);
refCourses.on('value', getCoursesFromDB, error3);
var listOfStudents = [];
var listOfTeachers = [];
var listOfCourses = [];


class Teacher{
    constructor(id, name, course){
        this.id = Number(id);
        this.name = name;
        this.course = null;
    }
        getInfo(){
            return "Teacher:" +  this.id + ' ' + this.name + " </br> " + this.course.getInfo();
        }

        changeCourse(obj){
            this.course = obj;
        }



}

class Student{
    constructor(id, name){
        this.id = Number(id);
        this.name = name;
        this.course = [];
    }

    getInfo(){
        return "Student:" +  this.id + ' ' + this.name;
    }

    addCourse(obj){
        this.course.push(obj)
    }

    getStudentInfo(){
        var cou = "";
        for(var i =  0; i < this.course.length; i++){
            cou += " </br> " + this.course[i].getInfo();
        }
        return this.id + " " + this.name + " " + cou;
    }

    getStudentId(){
        return this.id;
    }

}

class Classroom{
    constructor(id){
        this.id = id;
    }
    getInfo(){
        return "Classroom:" +  this.id;
    }
}

class Course{
    constructor(id,subject,time,day,teacher,classroom){
        this.id = id;
        this.subject = subject;
        this.time = time;
        this.day = day;
        this.students = [];
        this.teacher = teacher;
        this.classroom = classroom
    }

    addStudents(obj){
        this.students.push(obj)
    }

    toStringCourse(){
        console.log(this.id + " " + this.subject + " " + this.time + " " + this.day + " " + this.teacher.getInfo() + " " + this.classroom.getInfo());
        for(var i =  0; i < this.students.length; i++){
            console.log(this.students[i].getInfo());
        }

    }

    getCourseInfo(){
        var sts = "";
        for(var i =  0; i < this.students.length; i++){
            sts += " </br> " + this.students[i].getInfo();
        }
        return this.id + " " + this.subject + " " + this.time + " " + this.day + " " + this.teacher.getInfo() + " " + this.classroom.getInfo() + " " + sts;
    }

    getInfo(){
        return "Subject:" + this.subject + " || Time:" + this.time + " || Day:" + this.day; + " || Teacher:" + this.teacher;
    }


}

function addTeacher(id,name){
    if (id != 0 || name != "")
    {
        refTeachers.push(new Teacher(id,name));
        listOfTeachers.push(new Teacher(id,name));
        alert("Successfully added!"); 
    }
    else
    {
        alert("Something went wrong!");
    }
}

function addStudent(id,name){
    if (id != 0 || name != "")
    {
        refStudents.push(new Student (id,name));
        listOfStudents.push(new Student(id,name));
        alert("Successfully added!")
    }
    else
    {
        alert("Something went wrong!");
    }
}




function getStudentsFromDB(data){
    console.log(data.val());
    var students = data.val();
    var Skeys = Object.keys(students);  //array of students from DB
    console.log(Skeys);
    for (var i = 0; i < Skeys.length; i++){
        var k = Skeys[i];
        console.log(students[k]);
        listOfStudents.push(students[k]);
        console.log(listOfStudents[i]);

    }
  }

function getTeachersFromDB(data){
   console.log(data.val());
   var teachers = data.val();
   var Skeys = Object.keys(teachers);
   console.log(Skeys);
   for (var i = 0; i < Skeys.length; i++){
       var k = Skeys[i];
       console.log(teachers[k]);
       listOfTeachers.push(teachers[k]);
       console.log(listOfTeachers[i]);
   }
}

function getCoursesFromDB(data){
    console.log(data.val());
    var courses = data.val();
    var Skeys = Object.keys(courses);
    console.log(Skeys);
    for (var i = 0; i < Skeys.length; i++){
        var k = Skeys[i];
        console.log(courses[k]);
        listOfCourses.push(courses[k]);
        console.log(listOfCourses[i]);
    }
 }


function error1(err){
    console.log('Error!');
    console.log(err);
}

function error2(err){
    console.log('Error!');
    console.log(err);
}

function error3(err){
    console.log('Error!');
    console.log(err);
}

getStudentsFromDB();
getTeachersFromDB();
getCoursesFromDB();