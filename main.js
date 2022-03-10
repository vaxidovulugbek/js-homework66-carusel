// // var item = document.querySelectorAll("#list").children;
// // var elleft = document.querySelector("#btn");
// // var elright = document.querySelector("#button") ;
// // var total = item.length;

// const lists = document.querySelectorAll("#list")
// const imgs = document.querySelector("imgs")
// const left = document.querySelector("#btn")
// const right = document.querySelector("#button")

// // elright.onclick = function() {
// //   // images.style.transform = "translate(-100px)"
// //   console.log("hello");
// // }

// function slider () {
//   // imgs.style.transform = "translate(-100%)"
//   imgs.style.transform = "translate(-100px)"
// }
// left.addEventListener("click", slider())


// // elbtn.addEventListener("click" ,() => {
// //   // div.style.backgroundColor = "blue"
// //   elimgs.style.transform = 
// // })






const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let a = 0;
const maxSlide = slides.length;

const slide = function (slide = 1) {
  slides.forEach((s, i) => {
    s.style.transform = `translatex(${100 * (i - slide)}%)`;
  });
};
const nextSlide = function () {
  if (a === maxSlide - 1) {
    a = 0;
  } else {
    a++;
  }
  slide(a);
};
const prevSlide = function () {
  if (a === 0) {
    a = maxSlide - 1;
  } else {
    a--;
  }
  slide(a);
};
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
const init = function () {
  slide(0);
};
init();
















