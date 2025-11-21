import os

class Config:
    """Flask application configuration"""
    
    SECRET_KEY = os.environ.get('SESSION_SECRET') or 'dev-secret-key-change-in-production'
    
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(os.path.abspath(os.path.dirname(__file__)), 'instance', 'database.sqlite')
    
    SQLALCHEMY_TRACK_MODIFICATIONS = False
