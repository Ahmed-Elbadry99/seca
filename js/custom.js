

// menu responsive


console.log("menu responsive");

$(".btns_menu_responsive").click(function (e) {
  close();
});

$(".remove-mune").click(function () {
  $("#menu-div").removeClass("active");
  $(".bg_menu").removeClass("active");
  $(".times-ican").removeClass("active");
  $(".navicon").removeClass("is-active");
});


$(".remove_mune").click(function () {
  $("#menu-div").removeClass("active");
  $(".bg_menu").removeClass("active");
});

function open() {
  $(".navicon").addClass("is-active");
  $("#menu-div").addClass("active");
  $("#times-ican").addClass("active");
  $(".bg_menu").addClass("active");
}

function close() {
  $(".navicon").removeClass("is-active");
  $("#menu-div").removeClass("active");
  $("#times-ican").removeClass("active");
  $(".bg_menu").removeClass("active");

  $(".remove-mune").click(function () {
    $("#menu-div").removeClass("active");
    $(".bg_menu").removeClass("active");
    $(".times-ican").removeClass("active");
  });
}

$("#times-ican").click(function () {
  if ($(this).hasClass("active")) {
    close();
  } else {
    open();
  }
});

$(".btns_menu_responsive").click(function (e) {
  close();
});

$(".remove-mune").click(function () {
  $("#menu-div").removeClass("active");
  $(".bg_menu").removeClass("active");
  $(".times-ican").removeClass("active");
  $(".navicon").removeClass("is-active");
});

$("#menu-div a").click(function () {
  e.preventDefault();
});





$(".partners-carousel").owlCarousel({
  loop: true,
  nav: false,
  items: 5,
  dots: false,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplaySpeed: 2500, // Smooth transition speed (ms)
  slideTransition: 'linear', // Optional: makes the transition linear
  rtl: true,
  responsive: {
      0: {
          items: 2,
          margin: 10,
      },
      600: {
          items: 3,
          margin: 10,
      },
      1000: {
          items: 5.5,
          margin: 30,
      }
  }
});


var $winl = $(window); // or $box parent container
var $boxl = $("#menu-div, #times-ican ,.btn-all-categories ,  .all-categories");
$winl.on("click.Bst", function (event) {
  if (
    $boxl.has(event.target).length === 0 && //checks if descendants of $box was clicked
    !$boxl.is(event.target) //checks if the $box itself was clicked
  ) {
    close();
  }
});


const track = document.querySelector(".slider-track");
const cards = Array.from(track.querySelectorAll(".card-article"));


cards.forEach((card) => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
});

let totalWidth = 0;
const gap = 20;

gsap.utils.toArray(".card-article").forEach((card) => {
  totalWidth += card.offsetWidth + gap;
});
const sliderTween = gsap.to(track, {
  x: `${totalWidth / 2}`,
  duration: 20,
  ease: "none",
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
  },
});

track.addEventListener("mouseenter", () => {
  gsap.to(sliderTween, { timeScale: 0, duration: 0.4 });
});

track.addEventListener("mouseleave", () => {
  gsap.to(sliderTween, { timeScale: 1, duration: 0.4 });
});



