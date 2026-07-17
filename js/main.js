// ===========================
// Load Saved Theme
// ===========================

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

// ===========================
// Animated Counter
// ===========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.dataset.target;
        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ===========================
// Contact Form Validation
// ===========================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");
        const message = document.getElementById("formMessage");

        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
            }
        });

        if (isValid) {

            message.textContent = "✅ Message sent successfully!";
            message.style.color = "#00ff88";
            form.reset();

        } else {

            message.textContent = "❌ Please fill in all fields.";
            message.style.color = "#ff4d4d";

        }

    });

}

// ===========================
// Mobile Menu
// ===========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}

// ===========================
// Dark / Light Mode
// ===========================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    // Set correct icon on page load
    if (document.body.classList.contains("light-mode")) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';

        }

    });

}
// ===========================
// Scroll Reveal Animation
// ===========================

ScrollReveal({

    distance: "60px",
    duration: 1200,
    delay: 200,
    reset: false

});

ScrollReveal().reveal(".hero-content", {
    origin: "left"
});

ScrollReveal().reveal(".hero-image", {
    origin: "right"
});

ScrollReveal().reveal(".about-image", {
    origin: "left"
});

ScrollReveal().reveal(".about-content", {
    origin: "right"
});

ScrollReveal().reveal(".skill", {
    origin: "bottom",
    interval: 150
});

ScrollReveal().reveal(".education-item", {
    origin: "bottom",
    interval: 150
});

ScrollReveal().reveal(".experience-item", {
    origin: "bottom",
    interval: 150
});

ScrollReveal().reveal(".stat-card", {
    origin: "bottom",
    interval: 150
});

ScrollReveal().reveal(".project-card", {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    interval: 200
});
ScrollReveal().reveal(".timeline-item", {
    origin: "left",
    distance: "50px",
    duration: 1000,
    interval: 200
});

ScrollReveal().reveal(".contact-container", {
    origin: "bottom"
});