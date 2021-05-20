var carouselHeader = document.querySelector("#carouselHeader");
var carousel = new bootstrap.Carousel(carouselHeader, {
  interval: 2000,
  wrap: true,
  touch: true,
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 40,
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
        items: 5,
      },
    },
  });

  $("#hero-search-bar .btn").click(function () {
    $("#hero-search-bar .btn").removeClass("active-search");
    $(this).addClass("active-search");
  });
});
var slideIndex = 0;
