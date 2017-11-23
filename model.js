
var database = firebase.database();
var refTeachers = database.ref('Teachers');
var refStudents = database.ref('Students');

refTeachers.on('value', getTeachersFromDB, error);
refStudents.on('value', getStudentsFromDB, error);


class Teacher{
    constructor(id, name, course){
        this.id = id;
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
        this.id = id;
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
    refTeachers.push(new Teacher(id,name,null));
    listOfTeachers.push(new Teacher(id,name,null));
    
    
    
}

function addStudent(id,name){
    refStudents.push(new Student(id,name));   
    listOfStudents.push(new Student(id,name));
}

function getTeachersFromDB(data){
   // console.log(data.val());
    var teachers = data.val();
    var Tkeys = Object.keys(teachers);  //array of teachers from DB
    //console.log(Tkeys);
}

function getStudentsFromDB(data){
  //  console.log(data.val());
  var students = data.val();
  var Skeys = Object.keys(students);  //array of students from DB
  //console.log(Skeys);
}

function error(err){
    console.log('Error!');
    console.log(err);
}



stu1 = new Student(1,"Bob");
stu2 = new Student(2,"Joe");
stu3 = new Student(3,"Doe");

tea1 = new Teacher(1,"Henry");
tea2 = new Teacher(2,"Ole");

class1 = new Classroom(25);



cou1 = new Course(1,"JavaScript","15:30","Monday",tea1,class1)
cou1.addStudents(stu1);
stu1.addCourse(cou1);
/*
cou1.addStudents(stu2);
stu2.addCourse(cou1);
*/

cou2 = new Course(2,"SWA","8:30","Friday",tea2,class1)
cou2.addStudents(stu2);
cou2.addStudents(stu3);
stu2.addCourse(cou2);
stu3.addCourse(cou2);


cou1.addStudents(stu3);
stu3.addCourse(cou1);

tea1.changeCourse(cou1);
tea2.changeCourse(cou2);

var listOfStudents = [stu1, stu2, stu3];
var listOfTeachers = [tea1, tea2];
var listOfClassrooms = [class1];
var listOfCourses = [cou1, cou2];


//cou1.toStringCourse();
