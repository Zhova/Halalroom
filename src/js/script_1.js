$(document).ready(function () {
  $(".main-slider").slick({
    slideToShow: 1,
    slideToScroll: 1,
    dots: true,
  });
  $(".podcasts-slider ").slick({
    centerMode: true,
    centerPadding: "375px",
    slidesToShow: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "0",
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
