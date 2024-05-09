import "./style.css";

// get list of images
let imageList = Array.from(document.querySelectorAll("img"));

// initialise index to manipulate with buttons
let index = 0;

// set current image as the first pic
let currentImage = imageList[index];

// access the arrows
let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");

// make right arrow show next image
rightArrow.addEventListener("click", () => {
    if (index === (imageList.length - 1)) {
        cycleRightOverlap();
    } else {
        cycleRight();
    }
})

leftArrow.addEventListener("click", () => {
    if (index === 0) {
        cycleLeftOverlap();
    } else {
        cycleLeft();
    }
})

function cycleRight() {
    currentImage = imageList[index];
    currentImage.setAttribute("style", "display: none");
    index++;
    currentImage = imageList[index];
    currentImage.setAttribute("style", "display: block");
    console.log(currentImage);
    console.log(index);
}

function cycleLeft() {
    currentImage = imageList[index];
    currentImage.setAttribute("style", "display: none");
    index--;
    currentImage = imageList[index];
    currentImage.setAttribute("style", "display: block");
    console.log(currentImage);
    console.log(index);
}

function cycleRightOverlap() {
    currentImage = imageList[index];
    currentImage.setAttribute("style", "display: none");
    index = 0;
    currentImage = imageList[index];
    currentImage.setAttribute("style", "display: block");
    console.log(currentImage);
    console.log(index);
}

function cycleLeftOverlap() {
    currentImage = imageList[index];
    currentImage.setAttribute("style", "display: none");
    index = (imageList.length - 1);
    currentImage = imageList[index];
    currentImage.setAttribute("style", "display: block");
    console.log(currentImage);
    console.log(index);
}

console.log(imageList);
console.log(currentImage);