import * as flsFunctions from "./modules/functions.js";
import * as bootstrap from "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import $ from "jquery";
import Inputmask from "../../node_modules/inputmask/dist/jquery.inputmask.min.js";
import * as slick from "../../node_modules/slick-carousel/slick/slick.min.js";
import * as WOW from"../../node_modules/wowjs/dist/wow.js";
import { Fancybox } from "@fancyapps/ui/";

// flsFunctions.isWebp();

window.addEventListener("DOMContentLoaded", () => {
  window.$ = $;
  window.wow = new WOW.WOW();
  window.wow.init();

  Fancybox.bind("[data-fancybox]", {
    // Your options go here
  });
  $(".slider-main").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    fade: true,
    cssEase: "linear",
    prevArrow:
      '<button type="button" class="slick-prev slider-arrow slider-arrow--prev">' +
        '<svg class="slider-arrow-img" viewBox="0 0 133 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
          '<path class="slider-arrow-path" d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9H133V7H1V9Z"/>' +
        "</svg>" +
      "</button>",
    nextArrow:
      '<button type="button" class="slick-next slider-arrow slider-arrow--next">' +
        '<svg class="slider-arrow-img" viewBox="0 0 133 16" fill="none" xmlns="http://www.w3.org/2000/svg" >' +
         '<path class="slider-arrow-img" d="M132.707 7.29289C133.098 7.68342 133.098 8.31658 132.707 8.70711L126.343 15.0711C125.953 15.4616 125.319 15.4616 124.929 15.0711C124.538 14.6805 124.538 14.0474 124.929 13.6569L130.586 8L124.929 2.34315C124.538 1.95262 124.538 1.31946 124.929 0.928932C125.319 0.538408 125.953 0.538408 126.343 0.928932L132.707 7.29289ZM132 9H0V7H132V9Z" />' +
       '</svg>' +
      "</button>",
      responsive: [
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
  });
  $('input[type="tel"]').inputmask("+7 (999) 999-99-99");


  // const elements = document.querySelectorAll('.animate__animated');
  // if(elements[0].scr)
});