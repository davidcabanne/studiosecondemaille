document.addEventListener("DOMContentLoaded", function () {
  var nameInput = document.querySelector('input[name="name"]');
  if (nameInput) {
    nameInput.placeholder = "Your Name";
  }

  var emailInput = document.querySelector('input[name="email"]');
  if (emailInput) {
    emailInput.placeholder = "Your Email";
  }

  var subjectInput = document.querySelector('input[name="subject"]');
  if (subjectInput) {
    subjectInput.placeholder = "Subject";
  }

  var messageInput = document.querySelector('textarea[name="message"]');
  if (messageInput) {
    messageInput.placeholder = "Your Message";
  }
});
