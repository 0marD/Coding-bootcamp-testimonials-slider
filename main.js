const card = document.querySelector("#card");

let response = await fetch("./data.json");
let data = await response.json();

const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
const cardImg = document.querySelector(".top-image__img");
const testimonialL1 = document.querySelector(".bottom-testimonial__L1");
const testimonialL2 = document.querySelector(".bottom-testimonial__L2");
const testimonialL3 = document.querySelector(".bottom-testimonial__L3");
const testimonialL4 = document.querySelector(".bottom-testimonial__L4");
const nameUser = document.querySelector(".bottom-data__name");
const occupation = document.querySelector(".bottom-data__occupation");

let index = 0;

function drawCard(index) {
  cardImg.src = `./images/image-${data[index].img}.jpg`;
  testimonialL1.innerText = `" ${data[index].testimonialLine1}`;
  testimonialL2.innerText = `${data[index].testimonialLine2}`;
  testimonialL3.innerText = `${data[index].testimonialLine3}`;
  testimonialL4.innerText = `${data[index].testimonialLine4}"`;
  nameUser.innerText = `${data[index].name}`;
  occupation.innerText = `${data[index].occupation}`;
}

drawCard(0)

btnPrev.addEventListener("click", () => {
  index = index - 1;
  if (index < 0) {
    index = 1;
  }

  drawCard(index);
});

btnNext.addEventListener("click", () => {
  index = index + 1;
  console.log(index);
  if (index > 1) {
    index = 0;
  }

  drawCard(index);
});
