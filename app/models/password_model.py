import re
import bcrypt
import hashlib

def check_strength(password):
    errors = []
    if len(password) < 8:
        errors.append("Too short (min 8 characters).")
    if not re.search(r"[A-Z]", password):
        errors.append("Add at least one uppercase letter.")
    if not re.search(r"[a-z]", password):
        errors.append("Add at least one lowercase letter.")
    if not re.search(r"\d", password):
        errors.append("Include at least one number.")
    if not re.search(r"[!@#$%^&*]", password):
        errors.append("Use at least one special character.")

    if not errors:
        hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
        return f"✅ Strong password. Hashed with bcrypt: {hashed}"
    else:
        return "⚠️ Weak password: " + ", ".join(errors)

def crack_hash(hash_to_crack):
    try:
        with open("wordlist.txt", "r") as file:
            for line in file:
                word = line.strip()
                hashed_word = hashlib.sha256(word.encode()).hexdigest()
                if hashed_word == hash_to_crack:
                    return f"✅ Match found: {word}"
        return "❌ No match found in wordlist."
    except FileNotFoundError:
        return "⚠️ Wordlist file not found."


