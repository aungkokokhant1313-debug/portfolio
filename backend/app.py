import os
import re
import sqlite3
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables from .env file (if present locally)
load_dotenv()

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "dev-secret-key-akk-portfolio")

# ---------------------------------------------------------------------------
# CORS Configuration: Allows requests from your Netlify domain and localhost
# ---------------------------------------------------------------------------
allowed_origins_env = os.getenv(
    "ALLOWED_ORIGINS",
    "http://localhost:5173,http://localhost:4173,http://127.0.0.1:5173"
)
allowed_origins = [origin.strip() for origin in allowed_origins_env.split(",") if origin.strip()]

CORS(
    app,
    resources={r"/api/*": {"origins": allowed_origins}},
    supports_credentials=False,
    methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Accept"],
)

# ---------------------------------------------------------------------------
# Database Initialization (SQLite for lightweight message storage)
# ---------------------------------------------------------------------------
DB_PATH = os.path.join(os.path.dirname(__file__), "messages.db")
STORAGE_MODE = os.getenv("MESSAGE_STORAGE_MODE", "sqlite").lower()

def init_db():
    if STORAGE_MODE == "sqlite":
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute(
                """
                CREATE TABLE IF NOT EXISTS contact_messages (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    email TEXT NOT NULL,
                    subject TEXT,
                    message TEXT NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    ip_address TEXT
                )
                """
            )
            conn.commit()

init_db()

# ---------------------------------------------------------------------------
# Helper: Email Regex Validator
# ---------------------------------------------------------------------------
EMAIL_REGEX = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")

# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------
@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "service": "Aung Ko Ko Khant Portfolio API",
        "status": "online",
        "endpoints": {
            "health": "/api/health",
            "contact": "/api/contact"
        }
    }), 200


@app.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({
        "status": "healthy",
        "service": "portfolio-backend",
        "storage_mode": STORAGE_MODE,
        "timestamp": datetime.utcnow().isoformat() + "Z"
    }), 200


@app.route("/api/contact", methods=["POST"])
def submit_contact():
    data = request.get_json(silent=True)

    if not data or not isinstance(data, dict):
        return jsonify({
            "success": False,
            "error": "Invalid request payload. Expected JSON body."
        }), 400

    name = str(data.get("name", "")).strip()
    email = str(data.get("email", "")).strip()
    subject = str(data.get("subject", "")).strip()
    message = str(data.get("message", "")).strip()

    errors = {}

    if not name:
        errors["name"] = "Name is required."
    elif len(name) > 100:
        errors["name"] = "Name cannot exceed 100 characters."

    if not email:
        errors["email"] = "Email address is required."
    elif not EMAIL_REGEX.match(email):
        errors["email"] = "Please provide a valid email address."

    if not message:
        errors["message"] = "Message is required."
    elif len(message) < 10:
        errors["message"] = "Message must be at least 10 characters long."
    elif len(message) > 4000:
        errors["message"] = "Message cannot exceed 4000 characters."

    if errors:
        return jsonify({
            "success": False,
            "errors": errors
        }), 400

    # Handle storage / forwarding
    if STORAGE_MODE == "sqlite":
        try:
            client_ip = request.headers.get("X-Forwarded-For", request.remote_addr)
            with sqlite3.connect(DB_PATH) as conn:
                cursor = conn.cursor()
                cursor.execute(
                    """
                    INSERT INTO contact_messages (name, email, subject, message, ip_address)
                    VALUES (?, ?, ?, ?, ?)
                    """,
                    (name, email, subject, message, client_ip)
                )
                conn.commit()

            return jsonify({
                "success": True,
                "message": "Thank you! Your message has been received safely.",
                "timestamp": datetime.utcnow().isoformat() + "Z"
            }), 200

        except Exception as e:
            return jsonify({
                "success": False,
                "error": "Database error while storing message. Please use email fallback.",
                "fallback_to_mailto": True
            }), 500

    # If storage is disabled or in fallback mode
    return jsonify({
        "success": False,
        "fallback_to_mailto": True,
        "message": "Direct message storage is not active. Please send via your email client."
    }), 200


if __name__ == "__main__":
    # Local development runner
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)

