document.addEventListener("DOMContentLoaded", function() {
    const seeMoreButtons = document.querySelectorAll(".see-more-btn");

    seeMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const projectLinks = this.parentElement;
            const projectMore = projectLinks.nextElementSibling;
            
            if (projectMore && projectMore.classList.contains('project-more')) {
                if (projectMore.style.display === "block") {
                    projectMore.style.display = "none";
                    this.textContent = "View Details";
                } else {
                    projectMore.style.display = "block";
                    this.textContent = "Hide Details";
                }
            }
        });
    });
});