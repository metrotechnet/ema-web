"""
Simple local frontend server with .env variable templating.
Serves HTML from templates/ and static assets from static/.
"""

import http.server
import os
import socketserver
from pathlib import Path
from urllib.parse import unquote

from dotenv import load_dotenv

load_dotenv()

PORT = int(os.getenv("FRONTEND_PORT", "3000"))
BASE_DIR = Path(__file__).parent


class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path: str) -> str:
        """Translate URL path to local filesystem path or template marker."""
        path = unquote(path)
        path = path.split("?", 1)[0].split("#", 1)[0]

        if path in {"/", "/index", "/index.html"}:
            return "SERVE_INDEX_TEMPLATE"
        if path in {"/help", "/help.html"}:
            return "SERVE_HELP_TEMPLATE"
        if path in {"/log_report", "/log_report.html"}:
            return "SERVE_LOG_REPORT_TEMPLATE"

        if path.startswith("/static/"):
            return str(BASE_DIR / path.lstrip("/"))

        if path.startswith("/api/"):
            return str(BASE_DIR / path.lstrip("/"))

        return str(BASE_DIR / path.lstrip("/"))

    def do_GET(self) -> None:
        path = self.translate_path(self.path)

        template_map = {
            "SERVE_INDEX_TEMPLATE": "index.html",
            "SERVE_HELP_TEMPLATE": "help.html",
            "SERVE_LOG_REPORT_TEMPLATE": "log_report.html",
        }

        if path in template_map:
            template_path = BASE_DIR / "templates" / template_map[path]
            try:
                content = template_path.read_text(encoding="utf-8")

                replacements = {
                    "{{FIREBASE_PROJECT_ID}}": os.getenv("FIREBASE_PROJECT_ID", ""),
                    "{{FIREBASE_API_KEY}}": os.getenv("FIREBASE_API_KEY", ""),
                    "{{FIREBASE_AUTH_DOMAIN}}": os.getenv("FIREBASE_AUTH_DOMAIN", ""),
                    "{{FIREBASE_STORAGE_BUCKET}}": os.getenv("FIREBASE_STORAGE_BUCKET", ""),
                    "{{FIREBASE_MESSAGING_SENDER_ID}}": os.getenv("FIREBASE_MESSAGING_SENDER_ID", ""),
                    "{{FIREBASE_APP_ID}}": os.getenv("FIREBASE_APP_ID", ""),
                    "{{FIREBASE_MEASUREMENT_ID}}": os.getenv("FIREBASE_MEASUREMENT_ID", ""),
                    "{{RECAPTCHA_SITE_KEY}}": os.getenv("RECAPTCHA_SITE_KEY", ""),
                    "{{APP_CHECK_ENABLED}}": os.getenv("APP_CHECK_ENABLED", "false"),
                    "{{APP_CHECK_DEBUG_TOKEN}}": os.getenv("APP_CHECK_DEBUG_TOKEN", ""),
                    "{{BACKEND_URL}}": os.getenv("BACKEND_URL", ""),
                }

                for placeholder, value in replacements.items():
                    content = content.replace(placeholder, value)

                encoded = content.encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(len(encoded)))
                self.end_headers()
                self.wfile.write(encoded)
                return
            except Exception as exc:
                self.send_error(500, f"Template rendering error: {exc}")
                return

        super().do_GET()


if __name__ == "__main__":
    with socketserver.TCPServer(("localhost", PORT), CustomHandler) as httpd:
        print("=" * 60)
        print(f"Frontend server running at: http://localhost:{PORT}")
        print(f"Backend URL: {os.getenv('BACKEND_URL', 'NOT SET')}")
        print(f"Firebase Project: {os.getenv('FIREBASE_PROJECT_ID', 'NOT SET')}")
        print(f"App Check Enabled: {os.getenv('APP_CHECK_ENABLED', 'false')}")
        print("Press Ctrl+C to stop")
        print("=" * 60)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped")
