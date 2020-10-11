document.addEventListener("DOMContentLoaded", function(){

  // show message after someone contacts me
  if (document.querySelector('#messageDiv')) {
    setTimeout(function(){
    document.querySelector('#messageDiv').style.animationPlayState = "running";
  }, 4000)
  }

// to remove dublicated names in category select dropdown
  var usedNames = {};
  $("select > option").each(function () {
    if(usedNames[this.text]) {
       $(this).remove();
   } else {
       usedNames[this.text] = this.value;
   }});
})

// to show the projects from the selected category and hide the others
function categorySelect(){

  var e = $("#demo-category :selected").text();
  allProjects = document.querySelectorAll(".projectCategory");

  if (e == "All") {
    allProjects.forEach((prj, i) => {
      prj.style.display = "block";
    });
  }else {

    for (var i = 0; i < allProjects.length; i++) {
      if (allProjects[i].className.includes(e)) {
        allProjects[i].style.display = "block";
      }else {allProjects[i].style.display = "none";}
    }
  }
}


function snackbar() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
}
