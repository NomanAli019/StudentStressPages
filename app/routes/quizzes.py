import csv
import os
from flask import Blueprint, render_template, abort
from flask_login import login_required

bp = Blueprint('quizzes', __name__)

def load_quiz_data():
    """Load quiz data from CSV file"""
    csv_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'quizzes.csv')
    quizzes = []
    
    if not os.path.exists(csv_path):
        return quizzes
    
    with open(csv_path, 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            quizzes.append(row)
    
    return quizzes

def get_chapters():
    """Get unique chapters from quiz data"""
    quizzes = load_quiz_data()
    chapters = {}
    
    for quiz in quizzes:
        chapter_num = quiz['chapter_number']
        if chapter_num not in chapters:
            chapters[chapter_num] = {
                'number': chapter_num,
                'name': quiz['chapter_name'],
                'topics': []
            }
        chapters[chapter_num]['topics'].append({
            'topic': quiz['topic'],
            'quiz_file': quiz['quiz_file']
        })
    
    return sorted(chapters.values(), key=lambda x: int(x['number']))

@bp.route('/chapters')
@login_required
def chapters():
    """Display all chapters"""
    chapters_list = get_chapters()
    return render_template('chapters.html', chapters=chapters_list)

@bp.route('/chapter/<int:chapter_id>')
@login_required
def chapter_detail(chapter_id):
    """Display chapter detail with topics"""
    chapters_list = get_chapters()
    
    chapter = None
    for ch in chapters_list:
        if int(ch['number']) == chapter_id:
            chapter = ch
            break
    
    if not chapter:
        abort(404)
    
    return render_template('chapter_detail.html', chapter=chapter)

@bp.route('/quiz/<path:quiz_file>')
@login_required
def quiz(quiz_file):
    """Display a specific quiz"""
    quizzes = load_quiz_data()
    
    quiz_info = None
    for q in quizzes:
        if q['quiz_file'] == quiz_file:
            quiz_info = q
            break
    
    if not quiz_info:
        abort(404)
    
    return render_template(quiz_file, quiz=quiz_info)
