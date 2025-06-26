bind = "127.0.0.1:8000"
workers = 3
worker_class = "sync"
worker_connections = 1000
timeout = 30
keepalive = 2
max_requests = 1000
max_requests_jitter = 50
preload_app = True
user = "www-data"
group = "www-data"
raw_env = [
    "DJANGO_SETTINGS_MODULE=main.settings_prod",
    "DJANGO_SECRET_KEY=django-insecure-new-secret-key-for-production-change-this",
]