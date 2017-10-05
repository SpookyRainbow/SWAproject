/*
class Teacher{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
        getInfo(){
            return "Teacher:" +  this.id + ' ' + this.name;
        }
    
}

class Student{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    getInfo(){
        return "Student:" +  this.id + ' ' + this.name;
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
    constructor(id,subject,time,date,teacher,classroom){
        this.id = id;
        this.subject = subject;
        this.time = time;
        this.date = date;
        this.students = [];
        this.teacher = teacher;
        this.classroom = classroom
    }

    addStudents(obj){
        this.students.push(obj)
    }

    toStringCourse(){
        console.log(this.id + " " + this.subject + " " + this.time + " " + this.date + " " + this.teacher.getInfo() + " " + this.classroom.getInfo());
        for(var i =  0; i < this.students.length; i++){
            console.log(this.students[i].getInfo());
        }

    }
}


stu1 = new Student(1,"Bob");
stu2 = new Student(2,"Joe");
stu3 = new Student(3,"Doe");

tea1 = new Teacher(1,"Henry");

class1 = new Classroom(25);

cou1 = new Course(1,"JavaScript","15:30","12/01",tea1,class1)
cou1.addStudents(stu1);
cou1.addStudents(stu2);
cou1.addStudents(stu3);

cou1.toStringCourse();
*/



