from .settings import *
import os

# Продакшен настройки
DEBUG = False
ALLOWED_HOSTS = ['itdesigners.online', 'www.itdesigners.online', '83.166.244.209']

# Настройки статических файлов
STATIC_URL = '/static/'
STATIC_ROOT = '/var/www/itdesigners.online/main/staticfiles/'

# Настройки медиа файлов
MEDIA_URL = '/media/'
MEDIA_ROOT = '/var/www/itdesigners.online/main/media/'

# Секретный ключ
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-new-secret-key-for-production-change-this')

# SQLite база данных
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# CORS настройки
CORS_ALLOWED_ORIGINS = [
    "https://itdesigners.online",
    "https://www.itdesigners.online",
    "http://itdesigners.online",
    "http://www.itdesigners.online",
]

CORS_ALLOW_CREDENTIALS = True

# Дополнительные настройки безопасности
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = 'DENY'

# Настройки для HTTPS (после установки SSL)
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True