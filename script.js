document.addEventListener("DOMContentLoaded", function () {
    const greetings = ["Hello ...", "Niaje ...", "Sawubona ..."];
    let index = 0;
    const greetingElement = document.getElementById("greeting");
    const transitionElement = document.getElementById("transition");

    function changeGreeting() {
        greetingElement.textContent = greetings[index]; // Set new text

        if (index < greetings.length - 1) {
            index++;
            setTimeout(changeGreeting, 1000); // Change greeting every 2 seconds
        } else {
            setTimeout(() => {
                transitionElement.style.transform = "translateY(0)"; // Trigger garage door effect
                setTimeout(() => {
                    window.location.href = "portfolio.html"; // Redirect after animation
                }, 1500); // Matches CSS transition time
            }, 2000);
        }
    }

    setTimeout(changeGreeting, 2000);
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    const nav = document.querySelector("nav ul");
    const indicator = document.createElement("div");

    indicator.classList.add("indicator");
    nav.appendChild(indicator);

    function moveIndicator(link) {
        const { left, width } = link.getBoundingClientRect();
        const navLeft = nav.getBoundingClientRect().left;
        indicator.style.width = `${width}px`;
        indicator.style.transform = `translateX(${left - navLeft}px)`;
    }

    function updateIndicator() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 80;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
                moveIndicator(link);
            }
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    window.addEventListener("scroll", updateIndicator);
    updateIndicator(); // Initialize on load
});
