const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`
});

let counter = 0;

nextBtn.addEventListener("click", ()=> {
    counter++;
    carousel();
});
prevBtn.addEventListener("click", ()=> {
    counter--;
    carousel();
});

prevBtn.style.display = "none";

function carousel() {
    slides.forEach((slide) => {
      
        // working with slides

        // prevBtn.style.display = "none";
        // if (counter === slides.length) {
        //     counter = 0;
        // }
        // if (counter < 0) {
        //     counter = slides.length - 1;
        // }

        // working with buttons

        if (counter < slides.length - 1) {
            nextBtn.style.display = "block";
        } else {
            nextBtn.style.display = "none";
        } if (counter > 0) {
            prevBtn.style.display = "block";
        } else {
            prevBtn.style.display = "none"; 
        }
        // "-" cz we need to move them to the left
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}