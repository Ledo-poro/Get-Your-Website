// Form validation and enhancement
const serviceForm = document.querySelector('.service-form');

if (serviceForm) {
    serviceForm.addEventListener('submit', function(e) {
        // Optional: Add custom validation if needed
        console.log('Form submitted');
    });

    // Add focus animations
    const inputs = serviceForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });

    // Character counter for textarea
    const description = document.getElementById('description');
    if (description) {
        description.addEventListener('input', function() {
            console.log('Characters: ' + this.value.length);
        });
    }
}