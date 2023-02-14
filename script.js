// slide-up

const $front = $("#front");
const $screen = $("#screen");

$front.delay(3000).animate({ top: "50px", opacity: "0" }, function () {
  $front.hide();
});
$screen.delay(2000).animate({ height: "0" }, 100);



// parallax

var slideWrapper = document.querySelector(".container");
var slides = document.querySelectorAll(".item");
var totalSlides = slides.length;

var sliderWidth = slideWrapper.clientWidth;
var slideIndex = 0;
var slider = document.querySelector(".slider");

slider.style.width = sliderWidth * totalSlides + "px";

showSlides();

function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slider.style.left = -(sliderWidth * slideIndex) + "px";
  }
  slideIndex++;
  if (slideIndex === totalSlides) {
    slideIndex = 0;
  }
  setTimeout(showSlides, 2000);
}



// fade_in

const $section1 = $("#fade-in-1");
const $section2 = $("#fade-in-2");
const $section3 = $("#fade-in-3");

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 1500) {
    $section1.addClass("fade-in");
  } else {
    $section1.removeClass("fade-in");
  }
});
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 3300) {
    $section2.addClass("fade-in");
  } else {
    $section2.removeClass("fade-in");
  }
});
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 4800) {
    $section3.addClass("fade-in");
  } else {
    $section3.removeClass("fade-in");
  }
});



// scroll indicator

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  document.getElementById("myBar").style.width = scrolled + "%";
}



// pop_up_image

$(function () {
  var imageButton = $(".item-box .item-img a");
  var popup = $(".img-popup");
  var closeButton = popup.find("> .popup-inner > .close-btn");
  var htmlAndBody = $("html, body");
  var focusTarget;

  // 팝업 생성
  imageButton.on("click", function (e) {
    e.preventDefault();
    var popupImg = popup.find("> .popup-inner > img");
    var image = $(this).find("> img");
    var src = image.attr("src");
    var alt = image.attr("alt");
    focusTarget = $(this);
    popupImg.attr("src", src).attr("alt", alt);
    createPopup();
  });

  // 팝업 제거
  popup.on("click", function () {
    removePopup();
  });
  closeButton.on("click", function (e) {
    e.preventDefault();
    removePopup();
  });

  // 팝업창 검은배경과 닫기 버튼을 제외한 나머지 부분 클릭시 닫히지 않도록 하기
  popup.find("> .popup-inner").on("click", function (e) {
    e.stopPropagation();
  });

  // 팝업 생성 함수
  function createPopup() {
    popup.addClass("active");
    htmlAndBody.css("overflow-y", "hidden");
    setTimeout(function () {
      closeButton.focus();
    }, 50);
  }
  // 팝업 제거 함수
  function removePopup() {
    popup.removeClass("active");
    focusTarget.focus();
    htmlAndBody.css("overflow-y", "visible");
  }
});
