class Teacher{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

class Student{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

class Classroom{
    constructor(id){
        this.id = id;
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
}

