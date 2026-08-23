// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }

});


// ==============================
// CLOSE MOBILE MENU
// ==============================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

    menuBtn.textContent = "☰";

  });

});


// ==============================
// CURRENT YEAR
// ==============================

document.getElementById("year").textContent =
  new Date().getFullYear();


// ==============================
// WHATSAPP
// ==============================

const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", function (event) {

  event.preventDefault();

  const phoneNumber = "254796684350";

  const message =
    "Hello Nolly, I found your portfolio and I would like to discuss a website project with you.";

  const whatsappURL =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");

});


// ==============================
// SCROLL ANIMATION
// ==============================

const animatedElements = document.querySelectorAll(
  ".card, .project, .skill, .about-text, .code-card"
);

const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },

  {
    threshold: 0.15
  }

);

animatedElements.forEach(element => {

  element.classList.add("animate");

  observer.observe(element);

});