(function () {

    // invocation
    smoothScrollLinks();
    scalingDiplom();
    showSlides();

    ////smoothScroll

    function smoothScrollLinks() {
        [...document.querySelectorAll('a[href^="#"]')].forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    ///scaling diplom on click

    function scalingDiplom() {
        let img = document.querySelector(".diplom__img");

        img.addEventListener("click", function () {
            img.classList.toggle("scaled");
        })
    }

    ///show adding to diplom at click

    function showSlides() {
        let initSlider = document.querySelector(".slider");
        let slider = document.querySelector(".slideshow-container");
        let slides = [...slider.querySelectorAll(".mySlides")];

        initSlider.addEventListener("click", function () {
            slider.classList.remove("hide");
            setInterval(showAuto, 3000);
        })

        function showAuto() {
            slides.forEach((slide) => slide.classList.toggle("showSlide"));
        }
        slider.addEventListener("click", () => slider.classList.add("hide"))
    }


})();