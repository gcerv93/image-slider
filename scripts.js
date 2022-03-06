const images = document.querySelectorAll(".image");

const hideImages = (idx) => {
  images.forEach((image, index) => {
    image.dataset.index = index;
    if (index !== idx) {
      image.style.display = "none";
    }
  });
};

hideImages(0);
