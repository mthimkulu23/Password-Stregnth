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

  const responses = {
    "dictionary attack": {
      summary: "🧠 A dictionary attack tries common passwords. Examples: 'password123', 'qwerty'.",
      more: "💡 Strategy: Use unique, random passwords with a manager. Avoid predictable words like names or birthdays."
    },
    "brute-force": {
      summary: "💥 Brute-force attacks test every combination. Longer passwords = more protection.",
      more: "🔐 Strategy: Use long passphrases. Brute-force tools struggle with complexity — 'horse battery staple' style is great."
    },
    "data breach": {
      summary: "📂 A data breach is when hackers access private data — like emails, passwords, etc.",
      more: "🛡️ Strategy: Check leaks at haveibeenpwned.com. Change passwords regularly after any breach."
    },
    "phishing": {
      summary: "🎣 Phishing tricks users into giving credentials via fake emails or sites.",
      more: "⚠️ Strategy: Check links before clicking. Real sites won’t ask for login through shady emails."
    },
    "2fa": {
      summary: "🔐 Two-Factor Authentication helps protect even if your password is stolen.",
      more: "✅ Strategy: Use app-based 2FA instead of SMS to avoid SIM-swaps."
    },
    "strong password": {
      summary: "🔑 A strong password is 12+ characters, random, and unique for each site.",
      more: "💪 Strategy: Use a password manager to generate and store strong, unique passwords."
    },
    "malware": {
      summary: "🦠 Malware is malicious software like viruses, worms, ransomware, or spyware.",
      more: "🧰 Strategy: Keep software updated, use antivirus, avoid unknown downloads or USB devices."
    },
    "social engineering": {
      summary: "🧠 Social engineering manipulates people into revealing confidential information.",
      more: "🎯 Strategy: Always verify identities. Don’t share private info unless fully sure of the request source."
    },
    "firewall": {
      summary: "🔥 A firewall filters incoming/outgoing traffic to protect your network.",
      more: "🛡️ Strategy: Use both hardware & software firewalls. Regularly audit access logs."
    },
    "ransomware": {
      summary: "💸 Ransomware locks your files until you pay a ransom.",
      more: "🔐 Strategy: Back up data regularly. Never download suspicious files or links."
    },
    "vulnerability": {
      summary: "🚨 Vulnerabilities are security flaws hackers can exploit.",
      more: "🛠️ Strategy: Regular updates & patch management are critical. Perform vulnerability scans often."
    },
    "zero-day": {
      summary: "📅 A zero-day is a vulnerability unknown to the vendor and exploited by attackers before it's patched.",
      more: "🕵️ Strategy: Apply virtual patching, threat detection, and follow vendors’ security bulletins quickly."
    }
  };

  let lastTopic = "";

  function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;

    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="user-msg">${message}</div>`;

    setTimeout(() => {
      let reply = "🤔 I’m not sure about that. Try asking about phishing, malware, or strong passwords.";

      if (message.toLowerCase().includes("tell me more")) {
        if (lastTopic && responses[lastTopic]) {
          reply = responses[lastTopic].more;
        } else {
          reply = "📘 Please ask a topic first like 'What is phishing?' before asking for more.";
        }
      } else {
        for (let key in responses) {
          if (message.toLowerCase().includes(key)) {
            reply = responses[key].summary;
            lastTopic = key;
            break;
          }
        }

        if (message.toLowerCase().includes("how to hack")) {
          reply = "🚫 I can't help with hacking. But I can teach you how to protect yourself from hackers!";
          lastTopic = "";
        }
      }

      chatBox.innerHTML += `<div class="bot-msg">${reply}</div>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);

    input.value = "";
  }

  document.getElementById("user-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") sendMessage();
  });

  function toggleChat() {
    const chat = document.getElementById("educational-chat");
    chat.style.display = (chat.style.display === "none" || chat.style.display === "") ? "block" : "none";
  }






  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

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
  });


