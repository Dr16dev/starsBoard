var carouselHeader = document.querySelector("#carouselHeader");
var carousel = new bootstrap.Carousel(carouselHeader, {
  interval: 2000,
  wrap: true,
  touch: true,
});

$(document).ready(function () {
  $("#stars-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
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

  $("#exams-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoplay: true,
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

  $("#city-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
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
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 8,
      },
    },
  });
});
var slideIndex = 0;

$("#hero-search-bar .btn").click(function () {
  $("#hero-search-bar .btn").removeClass("blu");
  $(this).addClass("blu");
});

$('#academics-btn').click(function () {
  $("#academics-div").removeClass("d-none");
  $("#professional-div").addClass("d-none");
  $("#hobby-div").addClass("d-none");
  $("#counselling-div").addClass("d-none");
})

$('#professional-btn').click(function () {
  $("#academics-div").addClass("d-none");
  $("#professional-div").removeClass("d-none");
  $("#hobby-div").addClass("d-none");
  $("#counselling-div").addClass("d-none");
})

$('#hobby-btn').click(function () {
  $("#academics-div").addClass("d-none");
  $("#professional-div").addClass("d-none");
  $("#hobby-div").removeClass("d-none");
  $("#counselling-div").addClass("d-none");
})

$('#counselling-btn').click(function () {
  $("#academics-div").addClass("d-none");
  $("#professional-div").addClass("d-none");
  $("#hobby-div").addClass("d-none");
  $("#counselling-div").removeClass("d-none");
})
