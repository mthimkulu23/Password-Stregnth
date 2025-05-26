from flask import Flask

def create_app():
    app = Flask(__name__, template_folder='templates', static_folder='static')

    # Register blueprints
    from app.controllers.password_controller import password_bp
    from app.controllers.chat_controller import chat_bp # Import your new chat blueprint!

    app.register_blueprint(password_bp)
    app.register_blueprint(chat_bp) # Register the chat blueprint!

    return app