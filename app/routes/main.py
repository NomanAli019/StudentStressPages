from flask import Blueprint, render_template
from flask_login import login_required, current_user

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    """Home page"""
    if current_user.is_authenticated:
        return render_template('dashboard.html', user=current_user)
    return render_template('index.html')

@bp.route('/dashboard')
@login_required
def dashboard():
    """User dashboard - protected route"""
    return render_template('dashboard.html', user=current_user)
