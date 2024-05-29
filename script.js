document
  .getElementById("joinForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    // Basic email validation
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    // Prepare the parameters to send with EmailJS
    const templateParams = {
      user_email: email,
      customer_name: email,
    };

    // Send the email using EmailJS
    emailjs.send("service_xgxgvdm", "template_djskq5s", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        showNotification("Join request sent successfully!", "success");
      },
      function (error) {
        console.error("FAILED...", error);
        showNotification(
          "Failed to send request. Please try again later.",
          "error"
        );
      }
    );

    // Clear the form
    document.getElementById("joinForm").reset();
  });

function showNotification(message, type) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.add(type);

  // Remove notification after 5 seconds
  setTimeout(function () {
    notification.textContent = "";
    notification.classList.remove(type);
  }, 5000);
}
