const images = ["assets/img/why-choose.png", "assets/img/why-choose.png"];

let currentImageIndex = 0;

function changeImage(direction) {
  currentImageIndex =
    (currentImageIndex + direction + images.length) % images.length;

  const mainImage = document.getElementById("mainImage");

  mainImage.style.opacity = "0";

  setTimeout(() => {
    mainImage.src = images[currentImageIndex];
    mainImage.style.opacity = "1";
  }, 300);
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (sidebar.classList.contains("translate-x-full")) {
    sidebar.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } else {
    sidebar.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

function toggleFAQ(element) {
  // Close all other FAQ answers
  const allAnswers = document.querySelectorAll(".faq-answer");
  const allIcons = document.querySelectorAll(".faq-question i");

  allAnswers.forEach((answer) => {
    if (answer !== element.nextElementSibling) {
      answer.classList.add("hidden");
    }
  });

  allIcons.forEach((icon) => {
    if (icon !== element.querySelector("i")) {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    }
  });

  // Toggle the clicked FAQ
  const answer = element.nextElementSibling;
  const icon = element.querySelector("i");

  answer.classList.toggle("hidden");

  if (answer.classList.contains("hidden")) {
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  } else {
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "slide",
    perPage: 3,
    perMove: 1,
    gap: "1rem",
    pagination: true,
    arrows: true,
    breakpoints: {
      768: {
        perPage: 1,
      },
      1024: {
        perPage: 2,
      },
    },
  }).mount();
});

let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Scrolling down
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});

function toggleDropdown() {
  const dropdown = document.getElementById("productsDropdown");
  dropdown.classList.toggle("hidden");
}

// Show the button when the user scrolls down 300px
window.onscroll = function () {
  let scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


//carousal
document.addEventListener("DOMContentLoaded", () => {
  const carouselImages = document.getElementById("carousel-images");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  let currentIndex = 0;

  function updateCarousel(index) {
    const offset = -index * 100; // Shift by 100% per image
    carouselImages.style.transform = `translateX(${offset}%)`;
    currentIndex = index;
  }

  prevButton.addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateCarousel(newIndex);
  });

  nextButton.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % thumbnails.length;
    updateCarousel(newIndex);
  });

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      updateCarousel(index);
    });
  });
});
