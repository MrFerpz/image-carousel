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

// access the nav buttons
let nav1 = document.querySelector("#nav1");
let nav2 = document.querySelector("#nav2");
let nav3 = document.querySelector("#nav3");
let nav4 = document.querySelector("#nav4");
let nav5 = document.querySelector("#nav5");
let navList = [nav1, nav2, nav3, nav4, nav5];

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
    updateNavBar();
}

function cycleLeft() {
    currentImage = imageList[index];
    currentImage.setAttribute("style", "display: none");
    index--;
    currentImage = imageList[index];
    currentImage.setAttribute("style", "display: block");
    console.log(currentImage);
    console.log(index);
    updateNavBar();
}

function cycleRightOverlap() {
    currentImage = imageList[index];
    currentImage.setAttribute("style", "display: none");
    index = 0;
    currentImage = imageList[index];
    currentImage.setAttribute("style", "display: block");
    console.log(currentImage);
    console.log(index);
    updateNavBar();
}

function cycleLeftOverlap() {
    currentImage = imageList[index];
    currentImage.setAttribute("style", "display: none");
    index = (imageList.length - 1);
    currentImage = imageList[index];
    currentImage.setAttribute("style", "display: block");
    console.log(currentImage);
    console.log(index);
    updateNavBar();
}

function updateNavBar() {
    for (let i = 0; i < 5; i++) {
        if (index === i) {
            navList[i].setAttribute("style", "color: white");
        } else {
            navList[i].setAttribute("style", "color: black");
        }
    }
}

function updateImage() {
    currentImage.setAttribute("style", "display: none");
    currentImage = imageList[index];
    currentImage.setAttribute("style", "display: block");
}

for (let i = 0; i < 5; i++) {
    navList[i].addEventListener("click", () => {
        index = i;
        updateImage();
        updateNavBar();
    })}



console.log(imageList);
console.log(currentImage);