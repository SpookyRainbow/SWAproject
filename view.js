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
    if (index == -1)
      {
        document.getElementById("number").innerHTML = "No student found";
      }
    else 
      {
        document.getElementById("number").innerHTML = listOfStudents[index].getInfo();
      }
  }

  
/*
  function displayTeacher(id)
  {

  }

  function displayClassroom(id)
  {

  }*/