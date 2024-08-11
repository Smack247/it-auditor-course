document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
    this.reset();
});
