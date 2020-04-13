$(document).ready(function (){

  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });
  
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
  });
});

var deadline = new Date("June 10, 2020 15:37:25").getTime(); 
var x = setInterval(function() { 
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById("countdown-timer").innerHTML = days + "d "  
+ hours + "h " + minutes + "m " + seconds + "s "; 
    if (t < 0) { 
        clearInterval(x); 
        document.getElementById("countdown-timer").innerHTML = "EXPIRED"; 
    } 
}, 1000); 