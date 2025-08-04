const img_url = ["./img/supernova.jpeg", "./img/cafe.jpeg"]

const my_slide = document.getElementsByClassName("slideshow")[0]

let img1 = false
my_slide.addEventListener("click", ()=>{
    //my_slide.style.background = `url(${img_url[img1 == 1? 1:0]})`
    img1 = !img1 
    console.log("helloooo")
})













///////
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

