from flask import Blueprint, render_template, request
from app.models.password_model import check_strength, crack_hash

password_bp = Blueprint('password', __name__)

@password_bp.route("/", methods=["GET", "POST"])
def password_tools():
    result = None
    cracked = None

    if request.method == "POST":
        password = request.form.get("password")

        # Connect to model's check_strength function
        result = check_strength(password)

        # If input looks like a SHA256 hash (64 hex characters), try cracking
        if password and len(password) == 64 and all(c in "0123456789abcdef" for c in password.lower()):
            cracked = crack_hash(password)
        else:
            cracked = "Not a hash or not cracked."

    return render_template("password.html", result=result, cracked=cracked)

