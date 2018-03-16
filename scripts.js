var currentImage = 1;
showImage (currentImage);

function activeImage(n) {
 showImage (currentImage = n);
}

function showImage(n) {
 currentImage = n;
 var imageNumber = document.getElementsByClassName("previewImage");
 var activeThumbnail = document.getElementsByClassName("thumbnail img");
 for ( i = 0; i < imageNumber.length; i++) {
  imageNumber[i].style.display = "none";
 }
 for ( i = 0; i < activeThumbnail.length; i++) {
  activeThumbnail[i].className = activeThumbnail[i].className.replace(" active", "");
 }
 imageNumber[currentImage-1].style.display = "block";
 activeThumbnail[currentImage-1].className += " active";
}

function messageAlert() {
 alert("Apron purchased!");
}

var exp = document.getElementsByClassName("expandButtonClosed")

for (i = 0; i < exp.length; i++) {
 exp[i].addEventListener("click", function() {
  this.classList.toggle("activeExpand");
  var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}