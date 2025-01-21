// JavaScript for Form Submission
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate form submission
  alert(`Thank you, ${name}! Your message has been received.`);

  // Clear form fields
  form.reset();
});