const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboximg = document.getElementById("lightboximg");

const closebtn = document.querySelector(".close");
const prevbtn = document.querySelector(".prev");
const nextbtn = document.querySelector(".next");

let currentIndex = 0;

/* OPEN LIGHTBOX */
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboximg.src = img.src;
        currentIndex = index;
    });
});

/* CLOSE LIGHTBOX */
closebtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

/* CLICK OUTSIDE CLOSE */
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

/* PREVENT IMAGE CLICK CLOSE */
lightboximg.addEventListener("click", (e) => {
    e.stopPropagation();
});

/* NEXT */
nextbtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    lightboximg.src = galleryImages[currentIndex].src;
});

/* PREVIOUS */
prevbtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }
    lightboximg.src = galleryImages[currentIndex].src;
});

/* FILTER FUNCTION */
function filtersection(category) {
    const items = document.querySelectorAll(".gallery-item");

    items.forEach((item) => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}