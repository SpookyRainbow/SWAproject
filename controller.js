function controller(initialState, updater) {
    let model = initialState
    function showModel() {
        updater(model, controller)
    }

    return { showModel }
}



function checkTeacherID(id){
    if (id === parseInt(id, 10)){
        alert("Not added");
        return false;
    }
    else if(id === listOfTeachers.map(function(el) {return el.id;}).indexOf(id)){
        alert("Not added");
        return false;
    }else{
        return true;
    }
}

function checkTeacherName(name){
    if(name != null && typeof name === "string"){
        return true
    }else
    {
        alert("Not added");
        return false
    }
}


function checkTeacher(){
    var teacher_id = document.getElementById("teacherId").value;
    var teacher_name = document.getElementById("teacherName").value;
    if(checkTeacherID(teacher_id) === true && checkTeacherName(teacher_name) === true){
        addTeacher(teacher_id,teacher_name);
        alert(" Added " + teacher_id + " " + teacher_name)
    }

}