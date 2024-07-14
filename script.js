import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
      641: {
        slidesPerView: 3,
      },
      961: {
        slidesPerView: 4,
      },
    },

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

const projectCards = document.querySelectorAll(".project-card");
const imageUrls = [
  "assets/image2.avif",
  "assets/image.png",
  "assets/image3.avif",
];

projectCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const image = document.querySelector(".dynamic-img");
    console.log(index);

    if (index < imageUrls.length) {
      image.setAttribute("src", imageUrls[index]);
    }

    document.querySelector(".active").classList.remove("active");
    card.classList.add("active");
  });
});

const contactBtn = document.querySelector(".btn");
contactBtn.addEventListener("click", () => {
  const overlay = document.querySelector(".form-overlay");
  const form = document.querySelector(".contact-form");
  overlay.style.display = "flex";
  form.style.transform = "scale(1)";
});

document.querySelector(".close").addEventListener("click", () => {
  const overlay = document.querySelector(".form-overlay");
  const form = document.querySelector(".contact-form");
  overlay.style.display = "none";
  form.style.transform = "scale(0)";
});
