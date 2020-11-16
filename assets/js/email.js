/**
 * Uses EmailJS to interpret the necessary contact information input by the User and send and recieve emails to the user and author of the site.
 * @param {*} contactForm this sets the parameters for the contact form and creates an alert dependent on whether the form has sent correctly or not. Will also clear the form upon submission,
 */
function sendMail(contactForm) {
  emailjs.send("gmail", "java", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "project_request": contactForm.projectsummary.value
    })
    .then(
      function (response) {
        $('#contactForm').trigger("reset"),
        alert('Thank you for submitting your query!\nWe will be back in contact within 3-5 working days.');
      },
      function (error) {
        alert('There seems to be an error?!\nPlease double check that all fields have been filled correctly.');
      }
    );
  return false;
};

