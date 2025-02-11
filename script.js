document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Testimonial slider effect
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function rotateTestimonials() {
        testimonials[index].classList.remove("active");
        index = (index + 1) % testimonials.length;
        testimonials[index].classList.add("active");
    }

    setInterval(rotateTestimonials, 3000);
});
