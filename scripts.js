const imageSlider = (() => {
  const images = document.querySelectorAll(".image");
  const navBtns = document.querySelectorAll(".nav-btn");
  let num = 0;

  const hideImages = (idx) => {
    images.forEach((image, index) => {
      image.dataset.index = index;
      if (index !== idx) {
        image.style.display = "none";
      }
    });

    navBtns.forEach((button, index) => {
      button.dataset.index = index;
      if (index !== idx) {
        button.src = "./images/circle-outline.svg";
      } else {
        button.src = "./images/circle-filled.svg";
      }
    });
  };

  hideImages(num);

  const next = () => {
    if (num == 4) {
      num = -1;
    }
    num += 1;
    hideImages(num);
    document.querySelector(`.image[data-index="${num}"]`).style.display =
      "block";
  };

  const previous = () => {
    if (num == 0) {
      num = 5;
    }
    num -= 1;
    hideImages(num);
    document.querySelector(`.image[data-index="${num}"]`).style.display =
      "block";
  };

  const nextBtn = document.querySelector("#rightArrow");
  nextBtn.addEventListener("click", () => {
    next();
  });

  const previousBtn = document.querySelector("#leftArrow");
  previousBtn.addEventListener("click", () => {
    previous();
  });

  navBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      hideImages(index);
      document.querySelector(`.image[data-index="${index}"]`).style.display =
        "block";
    });
  });

  setInterval(next, 5000);
})();
