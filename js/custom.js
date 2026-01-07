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
