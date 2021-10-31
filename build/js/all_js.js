"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _settings;

  $(".main-slider").slick({
    slideToShow: 1,
    slideToScroll: 1,
    dots: true
  });
  $(".general-page .podcasts-slider").slick({
    centerMode: true,
    centerPadding: "375px",
    slidesToShow: 1,
    dots: true,
    responsive: [{
      breakpoint: 1750,
      settings: (_settings = {
        centerPadding: "0"
      }, _defineProperty(_settings, "centerPadding", "150px"), _defineProperty(_settings, "slidesToShow", 1), _settings)
    }, {
      breakpoint: 1024,
      settings: {
        centerPadding: "0",
        arrows: false,
        centerMode: false,
        slidesToShow: 1
      }
    }]
  });
  $(".arhive-podcasts .podcasts-slider").slick({
    slidesToShow: 1,
    dots: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
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