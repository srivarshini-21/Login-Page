document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();     
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Mock credentials
      const mockUsername = "user";
      const mockPassword = "123";
  
      if (username === mockUsername && password === mockPassword) {
        alert("Login successful!");
        window.location.href ="https://www.linkedin.com/in/srivarshini-r-s-21f2004"; // Redirect URL
      } else {
        alert("Invalid username or password.");
      }
    });
  