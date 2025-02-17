document.querySelectorAll(".car-card").forEach(card => {
    card.addEventListener("click", function(event) {
        // Prevent closing when clicking an image in the gallery
        if (event.target.tagName === "IMG" && event.target.classList.contains("gallery-img")) {
            return;
        }

        // Close any other open cards
        document.querySelectorAll(".car-details").forEach(detail => {
            if (detail !== card.querySelector(".car-details")) {
                detail.style.display = "none";
            }
        });

        // Toggle the clicked card details
        const details = card.querySelector(".car-details");
        details.style.display = details.style.display === "block" ? "none" : "block";
    });
});

function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}