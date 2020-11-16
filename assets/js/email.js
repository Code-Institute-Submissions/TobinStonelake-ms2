/**
 * Allows EmailJS to function correctly with the necessary information input by the User.
 * @param {*} contactForm this sets the parameters for the contact form and logs to the console whether the information has been inputted correctly.
 */

function sendMail(contactForm) {
	emailjs.send("gmail", "java", {
			"from_name": contactForm.name.value,
			"from_email": contactForm.emailaddress.value,
			"project_request": contactForm.projectsummary.value
		})
		.then(
			function (response) {
				console.log("SUCCESS", response);
			},
			function (error) {
				console.log("FAILED", error);
			}
		);
	return false;
};

/**
 * @name {formSubmit} creates an alert box once the form has been submitted.
 * @type {object}
 * @return {alert}
 * @type {string}
 * @param {alert} informs the User that there form has been submitted and gives indication of the timescale for a response.
 */

function formSubmit() {
	alert('Thank you for submitting your query!\nWe will be back in contact within 3-5 working days.')
};