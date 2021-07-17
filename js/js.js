//image modal
// create references to the modal...
var modal = document.getElementById("photoModal");
// to all images -- note I'm using a class!
var images = document.getElementsByClassName("modal-images");
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("modal-caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt){
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}
var span = document.getElementsByClassName("modal-close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});


