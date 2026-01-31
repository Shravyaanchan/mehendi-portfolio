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
        form.action = "https://formsubmit.co/hennabynishitha1@gmail.com";

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector("button[type='submit']");
            const originalText = submitBtn.textContent;

            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            // Honeypot safety
            const honeyPot = form.querySelector("input[name='_honey']");
            if (honeyPot) honeyPot.value = "";

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                });

                if (response.ok) {
                    form.reset();
                    window.location.href = "thanks.html";
                } else {
                    const data = await response.json();
                    alert(data.message || "Something went wrong. Please try again.");
                }

            } catch (error) {
                console.error("Form submission error:", error);
                alert("Network error. Please check your internet connection.");
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
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
