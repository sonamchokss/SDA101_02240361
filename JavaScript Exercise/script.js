// Function to validate username
function validateUsername() {
    const username = usernameInput.value;
    if (username.length < 6) {
      usernameError.textContent = "Username must be at least 6 characters long.";
      return false;
    } else {
      usernameError.textContent = "";
      return true;
    }
  }