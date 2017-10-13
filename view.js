function selectType() {
    document.getElementById("selectionDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
  
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  

  function displayStudent()
  {
    var student_id = parseInt(document.getElementById("studentId").value);
    var index = listOfStudents.map(function(el) {
      return el.id;
    }).indexOf(student_id);
    var courseindex = listOfCourses.map(function(el) {
      return el.id;
    }).indexOf(student_id);
    if (index == -1)
      {
        document.getElementById("number").innerHTML = "No student found";
      }
    else 
      {
        document.getElementById("number").innerHTML = listOfStudents[index].getInfo();
      }
    if (courseindex == -1)
      {
          document.getElementById("course").innerHTML = "No courses found";
      }
    else 
      {
          document.getElementById("course").innerHTML = listOfCourses[index].getInfo();
      }
  }
  

  function displayTeacher()
  {
    var teacher_id = parseInt(document.getElementById("teacherId").value);
    var index = listOfTeachers.map(function(el) {
      return el.id;
    }).indexOf(teacher_id);
    if (index == -1)
      {
        document.getElementById("number").innerHTML = "No teacher found";
      }
    else 
      {
        document.getElementById("number").innerHTML = listOfTeachers[index].getInfo();
      }
  }

  function displayClassroom()
  {
    var classroom_id = parseInt(document.getElementById("classroomId").value);
    var index = listOfClassrooms.map(function(el) {
      return el.id;
    }).indexOf(classroom_id);
    if (index == -1)
      {
        document.getElementById("number").innerHTML = "No classroom found";
      }
    else 
      {
        document.getElementById("number").innerHTML = listOfClassrooms[index].getInfo();
      }
  }