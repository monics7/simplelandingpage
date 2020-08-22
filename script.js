const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top >= 1) {
    nav.classList.add("red-nav");
  } else {
    nav.classList.remove("red-nav");
  }
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("description");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" opacity-100", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " opacity-100";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
