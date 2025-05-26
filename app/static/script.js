// --- Password Visibility Toggle ---
function togglePassword() {
    const input = document.querySelector('input[name="password"]');
    input.type = input.type === 'password' ? 'text' : 'password';
  }
  
  // --- Section Toggling (for About/FAQ, if applicable) ---
  // Initialize sections (adjust as needed for your specific layout.html or password.html)
  document.addEventListener("DOMContentLoaded", function() {
      document.querySelectorAll('#about p').forEach(p => {
          p.classList.add('visible'); // Start with all visible for demo
          // In production, you might want to start collapsed:
          // p.classList.remove('visible');
      });
  });
  
  
  function toggleSection(header) {
    const content = header.nextElementSibling;
    header.classList.toggle('expanded');
    content.classList.toggle('visible');
  }
  
  // --- Floating Icons (if applicable) ---
  // Add floating icons dynamically
  const icons = ['🔒', '🔑', '🛡️', '💻', '🌐', '🔍', '⚡', '🔐', '📊', '🚀'];
  const floatingIcons = document.querySelector('.floating-icons');
  
  // Only run if the floatingIcons element exists
  if (floatingIcons) {
    for (let i = 0; i < 15; i++) {
      const icon = document.createElement('div');
      icon.className = 'floating-icon';
      icon.textContent = icons[Math.floor(Math.random() * icons.length)];
      icon.style.left = `${Math.random() * 100}%`;
      icon.style.animationDelay = `${Math.random() * 15}s`;
      icon.style.animationDuration = `${10 + Math.random() * 20}s`;
      floatingIcons.appendChild(icon);
    }
  }
  
  
  // --- Chatbot Functionality ---
  function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;
  
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="user-msg">${message}</div>`; // Display user message
    input.value = ""; // Clear input immediately
  
    // Send message to the Flask backend
    fetch('/ask_cybersec_bot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message }),
    })
    .then(response => response.json())
    .then(data => {
      const botReply = data.response;
      chatBox.innerHTML += `<div class="bot-msg">${botReply}</div>`; // Display bot's response
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    })
    .catch((error) => {
      console.error('Error:', error);
      chatBox.innerHTML += `<div class="bot-msg">Oops! Something went wrong. Please try again.</div>`; // Error message
      chatBox.scrollTop = chatBox.scrollHeight;
    });
  }
  
  document.getElementById("user-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") sendMessage();
  });
  
  // Your existing toggleChat function to show/hide the chat window
  function toggleChat() {
    const chat = document.getElementById("educational-chat");
    chat.style.display = (chat.style.display === "none" || chat.style.display === "") ? "block" : "none";
  }
  
  // --- Contact Form Submission (if applicable) ---
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
  
    // Only run if the contact form element exists
    if (form) {
        // Escape HTML special characters to prevent XSS
        function sanitizeInput(input) {
          return input
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        }
  
        form.addEventListener("submit", function (e) {
          const name = form.elements["name"].value.trim();
          const email = form.elements["email"].value.trim();
          const category = form.elements["category"].value;
          const message = form.elements["message"].value.trim();
  
          let errors = [];
  
          if (!name) errors.push("Name is required.");
          if (!email) errors.push("Email is required.");
          if (!category) errors.push("Please select a category.");
          if (!message) errors.push("Message is required.");
  
          // Optional: Basic XSS pattern detection (script tags or event handlers)
          const xssPattern = /<scrip|on\w+=|javascript:/gi;
          if (xssPattern.test(name + email + message)) {
            errors.push("Potential XSS detected. Please remove suspicious characters.");
          }
  
          if (errors.length > 0) {
            e.preventDefault(); // Stop form from submitting
            alert(errors.join("\n"));
            return;
          }
  
          // Sanitize fields (Formspree doesn't need it, but this is good hygiene)
          form.elements["name"].value = sanitizeInput(name);
          form.elements["email"].value = sanitizeInput(email);
          form.elements["message"].value = sanitizeInput(message);
        });
    }
  });
  
  // --- Toggle Fact (if applicable for FAQ or similar) ---
  function toggleFact(element) {
    element.classList.toggle('open');
  }