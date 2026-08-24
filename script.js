// ==============================
// WEBSITE POLISH
// ==============================


// PAGE FADE-IN

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("page-loaded");

});


// SCROLL REVEAL

const revealElements = document.querySelectorAll(
    ".hero-content, .ideas, .why-learn, .facebook, .contact, .about-card, .teaching-info"
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

// ==============================
// ACTIVE NAVIGATION
// ==============================

const navLinks = document.querySelectorAll("nav a");

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const currentHash =
    window.location.hash;


navLinks.forEach((link) => {

    const linkURL = new URL(
        link.href,
        window.location.origin
    );

    const linkPage =
        linkURL.pathname.split("/").pop() || "index.html";

    const linkHash =
        linkURL.hash;


    // CONTACT

    if (
        linkHash === "#contact" &&
        currentHash === "#contact"
    ) {

        link.classList.add("active");

    }


    // HOME / ABOUT

    else if (
        !linkHash &&
        linkPage === currentPage &&
        !currentHash
    ) {

        link.classList.add("active");

    }

});
