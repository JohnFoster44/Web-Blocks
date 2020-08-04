// in sticky
var header = document.querySelector("header");
// in burger
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");


// ---------------- sticky nav ------------------------
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
  burger.classList.toggle('sticky', window.scrollY > 0);
});

// ------------------- burger nav ---------------------
const navSlide = () => {
  //   toggle the nav burger
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //   animate the links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    // burger anim
    burger.classList.toggle("toggle");
  });
};

navSlide();
