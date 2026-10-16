# Aung Ko Ko Khant — Portfolio Backend (Python + Flask)

A lightweight, beginner-friendly **Python + Flask** REST API service for handling portfolio contact form inquiries with SQLite storage and CORS security for Netlify.

---

## ⚡ Tech Stack

- **Python 3.10+**
- **Flask**: Micro web framework
- **Flask-CORS**: Cross-Origin Resource Sharing middleware
- **Gunicorn**: Production WSGI HTTP server
- **SQLite3**: Built-in Python database for message persistence

---

## 🚀 Running Locally

### 1. Create a Python Virtual Environment
Open your terminal in this `backend` folder:
```bash
python -m venv venv
```

Activate the virtual environment:
- **Windows (PowerShell)**:
  ```powershell
  .\venv\Scripts\Activate.ps1
  ```
- **macOS / Linux**:
  ```bash
  source venv/bin/activate
  ```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Start the Flask Development Server
```bash
python app.py
```
The API server will run at `http://127.0.0.1:5000`.

---

## 🌐 Deploying to Render (Free Web Service)

Render provides free hosting for Python web services.

### Step-by-Step Instructions:

1. **Push your code to GitHub**:
   Ensure this `backend` folder is pushed to your GitHub repository.

2. **Sign up or log in to Render**:
   Go to [render.com](https://render.com) and sign in with your GitHub account.

3. **Create a New Web Service**:
   - In your Render dashboard, click **"New +"** > **"Web Service"**.
   - Select your portfolio repository.

4. **Configure the Service Settings**:
   - **Name**: `akk-portfolio-api` (or any name you prefer)
   - **Language**: `Python 3`
   - **Root Directory**: `backend` (if in the same repo, or leave blank if a separate repo)
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Instance Type**: `Free`

5. **Set Environment Variables on Render**:
   Under **"Environment Variables"**, add:
   - `FLASK_ENV`: `production`
   - `SECRET_KEY`: *(Click "Generate" or type a random secret string)*
   - `ALLOWED_ORIGINS`: `http://localhost:5173,https://your-site-name.netlify.app` *(Replace with your real Netlify URL)*
   - `MESSAGE_STORAGE_MODE`: `sqlite`

6. **Deploy**:
   Click **"Create Web Service"**. Render will build your app and give you a public URL like:
   `https://akk-portfolio-api.onrender.com`

7. **Connect Frontend on Netlify**:
   In your Netlify site settings (under **Site Configuration** > **Environment variables**), add:
   - `VITE_API_BASE_URL`: `https://akk-portfolio-api.onrender.com`
   Trigger a redeploy on Netlify!

