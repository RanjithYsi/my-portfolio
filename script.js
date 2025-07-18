document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("form-status").textContent = "Sending...";
  
  setTimeout(() => {
    document.getElementById("form-status").textContent = "Message sent successfully!";
    this.reset();
  }, 1000);
});
