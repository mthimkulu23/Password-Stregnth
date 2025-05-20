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


  function togglePassword() {
    const input = document.querySelector('input[name="password"]');
    input.type = input.type === 'password' ? 'text' : 'password';
  }
  

  // Initialize sections
  document.querySelectorAll('#about p').forEach(p => {
    p.classList.add('visible'); // Start with all visible for demo
    // In production, you might want to start collapsed:
    // p.classList.remove('visible');
  });

  function toggleSection(header) {
    const content = header.nextElementSibling;
    header.classList.toggle('expanded');
    content.classList.toggle('visible');
  }

  // Add floating icons dynamically
  const icons = ['🔒', '🔑', '🛡️', '💻', '🌐', '🔍', '⚡', '🔐', '📊', '🚀'];
  const floatingIcons = document.querySelector('.floating-icons');
  
  for (let i = 0; i < 15; i++) {
    const icon = document.createElement('div');
    icon.className = 'floating-icon';
    icon.textContent = icons[Math.floor(Math.random() * icons.length)];
    icon.style.left = `${Math.random() * 100}%`;
    icon.style.animationDelay = `${Math.random() * 15}s`;
    icon.style.animationDuration = `${10 + Math.random() * 20}s`;
    floatingIcons.appendChild(icon);
  }