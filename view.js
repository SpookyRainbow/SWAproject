function selectType() {
    document.getElementById("selectionDropdown").classList.toggle("show");
}

function selectCreateType() {
  document.getElementById("selectionCreateDropdown").classList.toggle("show");
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
    if (index == -1)
      {
        document.getElementById("number").innerHTML = "No student found";
      }
    else 
      {
        document.getElementById("number").innerHTML = listOfStudents[index].getStudentInfo();
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

  function displayCourse()
  {
    var course_id = parseInt(document.getElementById("courseId").value);
    var index = listOfCourses.map(function(el) {
      return el.id;
    }).indexOf(course_id);
    //console.log(el.id);
    if (index == -1)
      {
        console.log(course_id);
        document.getElementById("number").innerHTML = "No course found";
      }
    else 
      {
        document.getElementById("number").innerHTML = listOfCourses[index].getCourseInfo();
      }
  }