// change nav backgroung on scroll 
document.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    const header = document.querySelector("#header");
    header.classList.add("scroll-class");
  } else {
    header.classList.remove("scroll-class");
  }
})

// mobile menu toggle
const mobileMenu = document.querySelector(".mobile-menu");
mobileMenu.addEventListener("click", () => {
  const header = document.querySelector("#header");
  header.classList.toggle("active");
});

// slick slider 
$(".slick-slider").slick({
  slidesToShow: 3,
  infinite: false,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  ],
});