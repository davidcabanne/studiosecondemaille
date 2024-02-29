const handleInputs = () => {
  let nameInput = document.querySelector('input[name="name"]');
  if (nameInput) {
    nameInput.placeholder = "Your Name";
  }

  let emailInput = document.querySelector('input[name="email"]');
  if (emailInput) {
    emailInput.placeholder = "Your Email";
  }

  let subjectInput = document.querySelector('input[name="subject"]');
  if (subjectInput) {
    subjectInput.placeholder = "Subject";
  }

  let messageInput = document.querySelector('textarea[name="message"]');
  if (messageInput) {
    messageInput.placeholder = "Your Message";
  }
};
