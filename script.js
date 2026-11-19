document.addEventListener("DOMContentLoaded", function () {

    // Automatic copyright year
    document.querySelectorAll(".year").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // Mobile navigation
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            navigation.classList.toggle("open");

            menuButton.textContent =
                navigation.classList.contains("open") ? "✕" : "☰";
        });
    }

    // Contact form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value.trim();

            const subject = encodeURIComponent(
                "New ELG-SPIDERS Enquiry - " + service
            );

            const body = encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\nService: " + service +
                "\n\nMessage:\n" + message
            );

            const mailto =
                "mailto:binelgazwa@gmail.com" +
                "?subject=" + subject +
                "&body=" + body;

            window.location.href = mailto;
        });
    }

});
