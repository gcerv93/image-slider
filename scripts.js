const images = document.querySelectorAll(".image");
let num = 0;

const hideImages = (idx) => {
  images.forEach((image, index) => {
    image.dataset.index = index;
    if (index !== idx) {
      image.style.display = "none";
    }
  });
};

hideImages(num);

const next = () => {
  if (num == 4) {
    return;
  }
  num += 1;
  hideImages(num);
  document.querySelector(`.image[data-index="${num}"]`).style.display = "block";
};

const previous = () => {
  if (num == 0) {
    return;
  }
  num -= 1;
  hideImages(num);
  document.querySelector(`.image[data-index="${num}"]`).style.display = "block";
};

const nextBtn = document.querySelector("#rightArrow");
nextBtn.addEventListener("click", () => {
  next();
});

const previousBtn = document.querySelector("#leftArrow");
previousBtn.addEventListener("click", () => {
  previous();
});
