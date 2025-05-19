from flask import Flask

def create_app():
    app = Flask(__name__, template_folder='templates', static_folder='static')

    from app.controllers.password_controller import password_bp
    app.register_blueprint(password_bp)

    return app
