from flask import Blueprint, render_template, request

password_bp = Blueprint('password', __name__)

@password_bp.route("/", methods=["GET", "POST"])
def password_tools():
    result = None
    cracked = None

    if request.method == "POST":
        password = request.form.get("password")
        # Add logic here to check password strength
        result = "Strong"  # example
        cracked = "Not cracked"

    return render_template("password.html", result=result, cracked=cracked)
