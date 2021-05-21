var carouselHeader = document.querySelector("#carouselHeader");
var carousel = new bootstrap.Carousel(carouselHeader, {
  interval: 2000,
  wrap: true,
  touch: true,
});
$(document).ready(function () {
  $("#exams-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });

  $("#instructors-btn-carousel").owlCarousel({
    nav: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 7,
      },
    },
  });

  $("#hero-search-bar .btn").click(function () {
    $("#hero-search-bar .btn").removeClass("ylo");
    $("#hero-search-bar .btn").addClass("br-btm");
    $(this).addClass("ylo");
    $(this).removeClass("br-btm");
  });
});
var slideIndex = 0;
