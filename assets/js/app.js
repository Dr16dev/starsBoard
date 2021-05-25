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
        items: 5,
      },
      1100: {
        items: 6,
      }
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

  $("#professions-carousel").owlCarousel({
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
        items: 5,
      },
    },
  });

  $("#online-art-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
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
        items: 3,
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
  $("#hero-search-bar .btn").removeClass("ylo");
  $(this).addClass("ylo");
});

$("#academics-btn").click(function () {
  $("#academics-div").removeClass("d-none");
  $("#professional-div").addClass("d-none");
  $("#hobby-div").addClass("d-none");
  $("#counselling-div").addClass("d-none");
});

$("#professional-btn").click(function () {
  $("#academics-div").addClass("d-none");
  $("#professional-div").removeClass("d-none");
  $("#hobby-div").addClass("d-none");
  $("#counselling-div").addClass("d-none");
});

$("#hobby-btn").click(function () {
  $("#academics-div").addClass("d-none");
  $("#professional-div").addClass("d-none");
  $("#hobby-div").removeClass("d-none");
  $("#counselling-div").addClass("d-none");
});

$("#counselling-btn").click(function () {
  $("#academics-div").addClass("d-none");
  $("#professional-div").addClass("d-none");
  $("#hobby-div").addClass("d-none");
  $("#counselling-div").removeClass("d-none");
});
