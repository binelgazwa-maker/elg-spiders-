document.addEventListener("DOMContentLoaded", function () {

    // Automatically update the copyright year.
    document.querySelectorAll(".year").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // Mobile navigation.
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    function closeNavigation() {
        if (!menuButton || !navigation) return;

        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        menuButton.textContent = "☰";
    }

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("open");

            menuButton.setAttribute("aria-expanded", String(isOpen));

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            menuButton.textContent = isOpen ? "✕" : "☰";

        });

        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeNavigation);
        });

        // Close menu when Escape is pressed.
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeNavigation();
            }
        });

        // Close menu when clicking outside it.
        document.addEventListener("click", function (event) {

            if (
                !navigation.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                closeNavigation();
            }

        });
    }

    // Contact form functionality.
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        const serviceField = document.getElementById("service");

        // Automatically select a service from a service-specific link.
        const requestedService =
            new URLSearchParams(window.location.search).get("service");

        if (serviceField && requestedService) {

            const matchingOption = Array.from(serviceField.options).find(
                function (option) {
                    return option.text.trim().toLowerCase() ===
                        requestedService.trim().toLowerCase();
                }
            );

            if (matchingOption) {
                serviceField.value = matchingOption.value;
            }
        }

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const service = serviceField
                ? serviceField.value
                : "General Enquiry";

            const message =
                document.getElementById("message").value.trim();

            const subject = encodeURIComponent(
                "ELG-SPIDERS Project Enquiry - " + service
            );

            const body = encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\nService: " + service +
                "\n\nMessage:\n" + message
            );

            // Open the visitor's email application.
            window.location.href =
                "mailto:binelgazwa@gmail.com?subject=" +
                subject + "&body=" + body;

        });
    }

});
