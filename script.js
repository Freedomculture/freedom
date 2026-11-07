// FREEDOM CULTURE - Website interactions

document.addEventListener("DOMContentLoaded", () => {

    // SMOOTH SCROLLING

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    // SCROLL REVEAL ANIMATION

    const sections = document.querySelectorAll(
        ".collection, .about, footer"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        sections.forEach(section => {

            section.classList.add("reveal-section");

            observer.observe(section);

        });

    }

    console.log("FREEDOM CULTURE website is ready!");

});