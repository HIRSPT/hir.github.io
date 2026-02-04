// Simple alert after form submission
document.getElementById('appointment-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Appointment submitted! We'll contact you soon.");
});

document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});
