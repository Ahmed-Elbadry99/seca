

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


// slider اخر الاخبار
const track = document.querySelector(".slider-track");
if(track){
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

}

// slider اخر الاخبار end




// statistics numbers







if ($(".counter").length) {
  var a = 0;
  $(window).scroll(function () {
    var oTop = $(".counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-number");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 2550,
            easing: "swing",
            step: function () {
              //$this.text(Math.ceil(this.countNum));
              $this.text(Math.ceil(this.countNum).toLocaleString("en"));
            },
            complete: function () {
              $this.text(Math.ceil(this.countNum).toLocaleString("en"));
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }
  });

  const animationDuration = 4000;

  const frameDuration = 1000 / 60;

  const totalFrames = Math.round(animationDuration / frameDuration);

  const easeOutQuad = (t) => t * (2 - t);

  const animateCountUp = (el) => {
    let frame = 0;
    const countTo = parseInt(el.innerHTML, 10);

    const counter = setInterval(() => {
      frame++;

      const progress = easeOutQuad(frame / totalFrames);

      const currentCount = Math.round(countTo * progress);

      if (parseInt(el.innerHTML, 10) !== currentCount) {
        el.innerHTML = currentCount;
      }

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };

  const countupEls = document.querySelectorAll(".timer");
  countupEls.forEach(animateCountUp);

  $(".animated-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress") + "%",
      },
      2100
    );
    $(this).text($(this).attr("data-progress") + "%");
  });
}




// social-media-icons

const socialMediaIcons = document.querySelector(".social-media-icons");
const openIcon = document.querySelector(".open-icon");
const listIcons = document.querySelector(".list-icons");

openIcon.addEventListener("click", () => {
  socialMediaIcons.classList.toggle("active");
});

listIcons.addEventListener("click", () => {
  socialMediaIcons.classList.remove("active");
});

