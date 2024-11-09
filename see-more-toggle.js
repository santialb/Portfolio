document.addEventListener("DOMContentLoaded", function() {
    const seeMoreButtons = document.querySelectorAll(".see-more-btn");

    seeMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const moreContent = this.nextElementSibling;
            moreContent.style.display = moreContent.style.display === "block" ? "none" : "block";
            this.textContent = moreContent.style.display === "block" ? "See Less" : "See More";
        });
    });
});
