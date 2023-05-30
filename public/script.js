var i = 0;
var txt = "ARAVIND ANKIREDDY."; /*  The text */
var speed = 130; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("section_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.getElementById("section_text").addEventListener("onload",setTimeout(typeWriter,500) );

//document.querySelectorAll(".cv_button").addEventListener("click",alert("CV Downloaded"));
function downloadalert (){
alert("CV Downloading in Process.");
}









