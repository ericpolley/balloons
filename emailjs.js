document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    // Show a loading message
    const statusMessage = document.getElementById("statusMessage");
    statusMessage.textContent = "Sending...";
  
    // Form data
    const formData = {
      user_name: document.getElementById("name").value,
      user_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    // Use EmailJS to send the form data
    emailjs
      .send("service_orwfkol", "template_a0dg138", formData)
      .then(
        function () {
          statusMessage.textContent = "Message sent successfully!";
          statusMessage.style.color = "green";
        },
        function (error) {
          statusMessage.textContent = "Failed to send message. Please try again.";
          statusMessage.style.color = "red";
          console.error("EmailJS error:", error);
        }
      );
  });
  