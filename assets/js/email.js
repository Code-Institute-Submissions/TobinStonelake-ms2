function sendMail(contactForm) {
    emailjs.send("gmail","java", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
};

function formSubmit() {
            alert('Thank you for submitting your query!\nWe will be back in contact within 3-5 working days.')
            };

