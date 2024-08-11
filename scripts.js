// Accordion functionality
document.querySelectorAll('.accordion-title').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            document.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');
            content.style.display = "block";
        }
    });
});

// Form submission alert
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
    this.reset();
});


