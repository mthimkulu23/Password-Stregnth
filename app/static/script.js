function togglePassword() {
    const input = document.querySelector('input[name="password"]');
    input.type = input.type === 'password' ? 'text' : 'password';
  }
  

  function togglePassword() {
    const passwordInput = document.querySelector('input[name="password"]');
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }


  
  