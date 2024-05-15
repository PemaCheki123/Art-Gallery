// Get the modal
var modal = document.getElementById("lightbox");

// Get the image and caption element
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("caption");
var prevButton = document.querySelector(".previous");
var nextButton = document.querySelector(".next");
var currentIndex = 0;


// Function to open the lightbox modal
function openLightbox(imageSrc, caption ) {
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    captionText.innerHTML = caption;
}

// Function to close the lightbox modal
function closeLightbox() {
    modal.style.display = "none";
}

// Add click event listener to each thumbnail image
var thumbnails = document.querySelectorAll(".thumbnails img");
thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
        var imageSrc = this.getAttribute("data-image");
        var caption = this.getAttribute('alt');
        openLightbox(imageSrc, caption);
    });
});


// Function to show the previous image
function showPrev() {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  var imageSrc = thumbnails[currentIndex].getAttribute("data-image");
  var caption = thumbnails[currentIndex].getAttribute("alt");
  openLightbox(imageSrc, caption);
}

function showNext() {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  var imageSrc = thumbnails[currentIndex].getAttribute("data-image");
  var caption = thumbnails[currentIndex].getAttribute("alt");
  openLightbox(imageSrc, caption);
}

// Add click event listeners to previous and next buttons
prevButton.addEventListener("click", showPrev);
nextButton.addEventListener("click", showNext);