# Sentellect - Mathematics Learning Platform

## Project Overview

**Sentellect** is a Flask web application for 12th Class Mathematics (Pakistan Board) learning. This is part of a Final Year Project (FYP) focusing on personalized mathematics education. The application integrates static quiz pages from the [StudentStressPages](https://github.com/NomanAli019/StudentStressPages) repository with a complete authentication and user management system.

## Recent Changes (November 21, 2025)

### Template Format Update
- Recreated all templates (base, index, login, signup, dashboard, chapters) to match the exact format from the GitHub repository
- Extracted complete CSS from Quiz1.html into `/app/static/css/sentellect.css`
- Preserved original design: blue gradient hero sections, orange accent colors, floating shapes, card styling
- Added JavaScript for header scroll effects, mobile menu functionality, and scroll animations
- Maintained original repository look and feel across all pages

### Project Structure
Complete modular Flask application with:
- User authentication (signup, login, logout) with Flask-Login
- SQLite database for user management  
- Blueprint-based routing (auth, main, quizzes)
- CSV-driven quiz data management
- Protected routes requiring authentication

## Project Architecture

### Folder Structure
```
project/
├── app.py                          # Main application entry point
├── config.py                       # Flask configuration
├── requirements.txt                # Python dependencies
├── instance/
│   └── database.sqlite            # SQLite database
├── app/
│   ├── __init__.py                # App factory pattern
│   ├── models.py                  # User model
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── auth.py                # Authentication routes
│   │   ├── quizzes.py             # Quiz display routes
│   │   └── main.py                # Main/dashboard routes
│   ├── static/
│   │   ├── css/
│   │   │   └── sentellect.css     # Complete styling from repo
│   │   ├── js/
│   │   └── images/
│   ├── templates/
│   │   ├── base.html              # Base template (repo format)
│   │   ├── index.html             # Landing page
│   │   ├── login.html             # User login
│   │   ├── signup.html            # User registration
│   │   ├── dashboard.html         # User dashboard
│   │   ├── chapters.html          # Chapter listing
│   │   └── [quiz files].html      # Quiz pages from repo
│   └── data/
│       └── quizzes.csv            # Quiz metadata
```

### Features

#### 1. User Authentication
- **Sign Up**: Email, username, password with validation
- **Login**: Username/password authentication with "remember me"
- **Logout**: Session management
- **Password Security**: Werkzeug password hashing
- **Protected Routes**: Login required for dashboard and quizzes

#### 2. Quiz System
- **24 Quizzes** across 3 chapters (Functions & Limits, Differentiation, Integration)
- **Difficulty Levels**: Low stress, moderate, high stress variants
- **CSV-Based Management**: Easy to add/modify quiz mappings
- **Dynamic Routing**: `/quiz/<quiz_file>` for any quiz page

#### 3. Dashboard
- Welcome message with username
- Statistics overview (chapters, quizzes, progress)
- Quick access to all chapters
- Visual chapter cards with quiz counts

### Database Schema

#### User Model
```python
- id (Integer, Primary Key)
- email (String, Unique, Indexed)
- username (String, Unique, Indexed)
- password_hash (String)
- created_at (DateTime)
```

### Routes

#### Main Routes (`main.py`)
- `GET /` - Landing page (index.html)
- `GET /dashboard` - User dashboard (login required)

#### Authentication Routes (`auth.py`)
- `GET/POST /signup` - User registration
- `GET/POST /login` - User login
- `GET /logout` - User logout

#### Quiz Routes (`quizzes.py`)
- `GET /chapters` - List all chapters
- `GET /chapter/<int:id>` - Chapter detail
- `GET /quiz/<path:quiz_file>` - Display specific quiz

### User Preferences

**Design Philosophy**: All templates match the exact visual format from the StudentStressPages repository:
- Blue gradient backgrounds (#1e40af to #004e92)
- Orange accent colors (#f59e0b) for highlights
- Floating animation shapes in hero sections
- Rounded card components with shadows
- Responsive design with mobile menu
- MathJax support for mathematical notation

## Running the Application

```bash
python app.py
```

The application runs on `http://0.0.0.0:5000` with debug mode enabled.

## Technologies Used

- **Backend**: Flask 3.0.0, Flask-SQLAlchemy 3.1.1, Flask-Login 0.6.3
- **Database**: SQLite
- **Frontend**: HTML5, CSS3 (from repo), JavaScript
- **Styling**: Custom CSS with CSS variables, responsive design
- **Icons**: Font Awesome 6.4.0
- **Math**: MathJax 3 for LaTeX rendering
- **Charts**: Chart.js for potential progress visualizations

## Quiz Data Structure (CSV)

```csv
chapter_number,chapter_name,topic,quiz_file
4,Functions & Limits,Functions (High Stress),4.1 (high stress).html
...
```

## No AI Integration

This part of the FYP does NOT include AI features. It focuses purely on the web application structure, user management, and quiz delivery system using static HTML pages.

## Security Notes

- Passwords are hashed using Werkzeug's `generate_password_hash`
- Session secret key from environment variable `SESSION_SECRET`
- SQLite database for development (replace with PostgreSQL for production)
- Login required decorators protect sensitive routes

## Development Guidelines

- Maintain the exact visual format from the repository
- All new templates must use the `sentellect.css` stylesheet
- Follow the existing color scheme and component styling
- Test responsive behavior on mobile devices
- Ensure MathJax renders correctly for mathematical content
