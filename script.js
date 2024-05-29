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
        alert("Request sent successfully!");
      },
      function (error) {
        console.error("FAILED...", error);
        alert("Failed to send request. Please try again later.");
      }
    );

    // Optionally clear the form
    document.getElementById("joinForm").reset();
  });
