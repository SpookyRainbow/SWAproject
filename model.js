
class Teacher{
    constructor(id, name, course){
        this.id = id;
        this.name = name;
        this.course = null;
    }
        getInfo(){
            return "Teacher:" +  this.id + ' ' + this.name;
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


}

function getStudentInfo(id){


}


stu1 = new Student(1,"Bob");
stu2 = new Student(2,"Joe");
stu3 = new Student(3,"Doe");

tea1 = new Teacher(1,"Henry");

class1 = new Classroom(25);

cou1 = new Course(1,"JavaScript","15:30","Monday",tea1,class1)
cou1.addStudents(stu1);
stu1.addCourse(cou1);

cou1.addStudents(stu2);
stu2.addCourse(cou1);

cou1.addStudents(stu3);
stu3.addCourse(cou1);

tea1.changeCourse(cou1);


cou1.toStringCourse();





