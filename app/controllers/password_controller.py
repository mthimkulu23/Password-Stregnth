from flask import Blueprint, request, render_template
from app.models.password_model import check_strength, crack_hash, estimate_time_to_crack

password_bp = Blueprint('password', __name__)  # ← THIS MUST EXIST

@password_bp.route("/", methods=["GET", "POST"])
def password_tools():
    result = None
    cracked = None
    time_to_crack = None

    if request.method == "POST":
        password = request.form.get("password")

        if password:
            if len(password) == 64 and all(c in "0123456789abcdef" for c in password.lower()):
                cracked = crack_hash(password)
                result = "Hash cracking attempted"
            else:
                result = check_strength(password)
                if len(password) >= 7:
                    time_to_crack = estimate_time_to_crack(password)

    return render_template("password.html", result=result, cracked=cracked, time_to_crack=time_to_crack)
