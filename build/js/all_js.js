"use strict";

$(document).ready(function () {
  $(".main-slider").slick({
    slideToShow: 1,
    slideToScroll: 1,
    dots: true
  });
  $(".podcasts-slider ").slick({
    centerMode: true,
    centerPadding: "375px",
    slidesToShow: 1,
    dots: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        centerPadding: "0",
        arrows: false,
        centerMode: false,
        slidesToShow: 1
      }
    }]
  });

  function layoutOfSlides() {
    $(".podcasts .slick-slide").removeClass("origin-left");
    $(".podcasts .slick-slide").removeClass("origin-right");
    $(".podcasts .slick-center").next().addClass("origin-left");
    $(".podcasts .slick-center").prev().addClass("origin-right");
  }

  layoutOfSlides();
  $(".podcasts-slider").on("beforeChange", function () {
    setTimeout(function () {
      layoutOfSlides();
    }, 0);
  });
  $(".header .menu--2").click(function () {
    if ($(".menu--2 input").is(":checked")) {
      $(".header .nav-menu").fadeIn(500);
      $(".header .burger-lang").addClass("open");
    } else {
      $(".header .nav-menu").fadeOut(500);
      $(".header .burger-lang").removeClass("open");
    }
  });
});