document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const themeStylesheet = document.getElementById("themeStylesheet");

    if (localStorage.getItem("theme") === "theme2") {
        themeStylesheet.setAttribute("href", "css/theme2.css");
    }

    themeToggle.addEventListener("click", function () {
        if (themeStylesheet.getAttribute("href") === "css/theme1.css") {
            themeStylesheet.setAttribute("href", "css/theme2.css");
            localStorage.setItem("theme", "theme2");
        } else {
            themeStylesheet.setAttribute("href", "css/theme1.css");
            localStorage.setItem("theme", "theme1");
        }
    });

    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    console.log(slides);

    function showSlides() {
        if (slides.length === 0) {
            console.error("No slides found!");
            return;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";

        setTimeout(showSlides, 3000);
    }

    showSlides();
});
