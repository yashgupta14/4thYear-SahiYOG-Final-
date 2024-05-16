document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var contactNo = document.getElementById("contactno").value;
    var email = document.getElementById("email").value;
    var businessName = document.getElementById("businessName").value;
    var businessCategory = document.getElementById("businessCategory").value;


  
    
    // Validate email and password (e.g., format validation)
    
    // Send data to server for authentication
    authenticateUser(email, password);
  });
  
  function authenticateUser(email, password) {
    // You would typically use an AJAX request to send the data to the server
    // Here's a simplified example using fetch to demonstrate the concept
    fetch("authenticate.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Redirect to dashboard or another page upon successful login
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("message").textContent = data.message;
      }
    })
    .catch(error => console.error("Error:", error));
  }
  