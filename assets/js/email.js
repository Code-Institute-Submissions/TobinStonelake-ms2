function sendMail(contactForm) {
    emailjs.send("gmail","java", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            document.getElementById('sendForm').addEventListener('click', function() {
            alert('Thank you for submitting your query!\nWe will be back in contact within 3-5 working days.')
            });
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
};

