const btnPrev = document.getElementById("button-prev");
const btnNext = document.getElementById("button-next");
const sliderWrapper = document.querySelector(".slider-content");
let activePerson = 7;
sliderWrapper.childNodes[activePerson].className += " is-active__slider";

const personSrc = [
  "images/person/thrower.png",
  "images/person/thrower-active.svg",
  "images/person/football.png",
  "images/person/football-active.svg",
  "images/person/athlet.png",
  "images/person/athlet-active.svg",
  "images/person/heavylifter.png",
  "images/person/heavylifter-active.svg",
  "images/person/fencer.png",
  "images/person/fencer-active.svg",
  "images/person/gymnast.png",
  "images/person/gymnast-active.svg",
  "images/person/karate.png",
  "images/person/karate-active.svg",
  "images/person/pirate.png",
  "images/person/pirate-active.svg"
];
btnPrev.addEventListener("click", function() {
  sliderWrapper.childNodes[activePerson].classList.remove("is-active__slider");
  sliderWrapper.childNodes[activePerson].childNodes[1].src =
    personSrc[activePerson - 1];
  if (activePerson < 2) {
    activePerson = 15;
  } else {
    activePerson -= 2;
  }
  sliderWrapper.childNodes[activePerson].className += " is-active__slider";
  sliderWrapper.childNodes[activePerson].childNodes[1].src =
    personSrc[activePerson];
});

btnNext.addEventListener("click", function() {
  sliderWrapper.childNodes[activePerson].classList.remove("is-active__slider");
  sliderWrapper.childNodes[activePerson].childNodes[1].src =
    personSrc[activePerson - 1];
  if (activePerson > 14) {
    activePerson = 1;
  } else {
    activePerson += 2;
  }
  sliderWrapper.childNodes[activePerson].className += " is-active__slider";
  sliderWrapper.childNodes[activePerson].childNodes[1].src =
    personSrc[activePerson];
});
