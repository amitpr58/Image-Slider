// Get the DOM elements for the image carousel
const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll(".carousel img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 0;

// A function that updates the carousel display to show the specified image
const slideImage = () => {
  // Update the carousel display to show the specified image
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// A function that updates the carousel display to show the next or previous image
const updateClick = (direction) => {
  // Calculate the updated image index based on the button clicked
  imageIndex = direction === "next" ? (imageIndex + 1) % images.length : (imageIndex - 1 + images.length) % images.length;
  slideImage(imageIndex);
};

// Add event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", (e) => updateClick(e.target.id)));

// Add mouseover event listener to wrapper element to stop manual sliding
wrapper.addEventListener("mouseover", () => wrapper.classList.add("paused"));
// Add mouseleave event listener to wrapper element to resume manual sliding
wrapper.addEventListener("mouseleave", () => wrapper.classList.remove("paused"));
