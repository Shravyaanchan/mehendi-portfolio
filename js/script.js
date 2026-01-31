document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       MOBILE NAVIGATION
    =============================== */
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    /* ===============================
       HEADER SCROLL EFFECT
    =============================== */
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                navbar.style.background = "#ffffff";
                navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
            } else {
                navbar.style.background = "rgba(255, 255, 255, 0.95)";
                navbar.style.boxShadow = "none";
            }
        });
    }

    /* ===============================
       CONTACT FORM (EMAIL SEND)
    =============================== */
    const form = document.getElementById("contact-form");

    if (form) {
        // Ensure the form action matches the intended email.
        // It's already correct in HTML, but we leave it to the HTML attributes.

        form.addEventListener("submit", (e) => {
            // We do NOT preventDefault() so the form submits natively.
            // This avoids CORS issues and allows FormSubmit to handle redirection/activation.

            const submitBtn = form.querySelector("button[type='submit']");
            const originalText = submitBtn.textContent;

            submitBtn.textContent = "Sending...";

            // Optional: visual feedback only, don't disable to ensure submission goes through
            submitBtn.style.opacity = "0.7";
        });
    } else {
        console.error("Contact form not found!");
    }

    /* ===============================
       LIGHTBOX GALLERY
    =============================== */
    const galleryImages = document.querySelectorAll(".gallery-item img");

    if (galleryImages.length > 0) {
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.className = "lightbox";

        const lightboxImg = document.createElement("img");
        lightboxImg.className = "lightbox-content";

        const closeBtn = document.createElement("span");
        closeBtn.className = "lightbox-close";
        closeBtn.innerHTML = "&times;";

        lightbox.append(lightboxImg, closeBtn);
        document.body.appendChild(lightbox);

        const closeLightbox = () => lightbox.classList.remove("active");

        galleryImages.forEach(img => {
            img.addEventListener("click", () => {
                lightboxImg.src = img.src;
                lightbox.classList.add("active");
            });
        });

        closeBtn.addEventListener("click", closeLightbox);

        lightbox.addEventListener("click", (e) => {
            if (e.target !== lightboxImg) closeLightbox();
        });
    }

});
