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

    if errors:
        return "⚠️ Weak password: " + ", ".join(errors)
    else:
        return "✅ Strong password."

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

def estimate_time_to_crack(password):
    length = len(password)
    complexity = 0
    if re.search(r"[a-z]", password): complexity += 26
    if re.search(r"[A-Z]", password): complexity += 26
    if re.search(r"\d", password): complexity += 10
    if re.search(r"[!@#$%^&*]", password): complexity += 8

    try:
        combinations = complexity ** length
    except OverflowError:
        return "🕒 Estimated time to crack: Practically unbreakable"

    seconds = combinations / 1e9
    years = seconds / (60 * 60 * 24 * 365)

    if years < 1:
        return f"🕒 Estimated time to crack: {seconds:.2f} seconds"
    else:
        return f"🕒 Estimated time to crack: {years:.2f} years"
