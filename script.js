// ==============================
// WEBSITE POLISH
// ==============================


// PAGE FADE-IN

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("page-loaded");

});


// SCROLL REVEAL

const revealElements = document.querySelectorAll(
    ".hero-content, .ideas, .why-learn, .facebook, .about-card, .teaching-info"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

           if (entry.isIntersecting) {

    entry.target.classList.add("visible");

} else {

    entry.target.classList.remove("visible");

}
        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// BACK TO TOP BUTTON

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "back-to-top";

topButton.setAttribute(
    "aria-label",
    "Back to top"
);

document.body.appendChild(topButton);


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
