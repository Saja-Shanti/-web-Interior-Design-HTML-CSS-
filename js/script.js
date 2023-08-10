
/**************************************************assssmaaaa********************************************************************************/
let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction();myFunction() ; };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}







/*************************************************scrolbar*******************************************************************************/



// When the user scrolls the page, execute myFunction 
//window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


///////////////////////////

$(document).ready(function () {
  $("#about").on("click", function () {
    $("#about").css("right", "0");
    $("#blog").css("right", "-60px");
    $("#projects").css("right", "-60px");
    $("#contact").css("right", "-60px");
    $("a").css("right", "0");
  });//End of about click

  $("#blog").on("click", function () {
    $("#blog").css("right", "0");
    $("#about").css("right", "-60px");
    $("#projects").css("right", "-60px");
    $("#contact").css("right", "-60px");
  });//End of blog click

  $("#projects").on("click", function () {
    $("#projects").css("right", "0");
    $("#about").css("right", "-60px");
    $("#blog").css("right", "-60px");
    $("#contact").css("right", "-60px");
  });//End of projects click

  $("#contact").on("click", function () {
    $("#contact").css("right", "0");
    $("#about").css("right", "-60px");
    $("#blog").css("right", "-60px");
    $("#projects").css("right", "-60px");
  });//End of contact click

});//End of document ready
