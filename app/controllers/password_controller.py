from flask import Blueprint, request, render_template
from app.models.password_model import check_strength, crack_hash, estimate_time_to_crack

password_bp = Blueprint('password', __name__)

@password_bp.route("/", methods=["GET", "POST"])
def password_tools():
    result = None
    cracked = None
    time_to_crack = None

    if request.method == "POST":
        password = request.form.get("password")

        # Check password strength
        result = check_strength(password)

        # Estimate time to crack if password is given and >=7 chars
        if password and len(password) >= 7:
            time_to_crack = estimate_time_to_crack(password)

        # If input looks like a SHA256 hash, try cracking
        if password and len(password) == 64 and all(c in "0123456789abcdef" for c in password.lower()):
            cracked = crack_hash(password)
        else:
            cracked = "Not a hash or not cracked."

    return render_template("password.html", result=result, cracked=cracked, time_to_crack=time_to_crack)
