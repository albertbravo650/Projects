from flask_app import app
from flask import render_template, request, redirect, session
from flask_app.models.user import User
from flask_app.models import comment
from flask_bcrypt import Bcrypt
from flask import flash

bcrypt = Bcrypt(app)

@app.route('/')
def index():
    all_comments = comment.Comment.get_users_with_comments()
    return render_template('login.html', all_comments=all_comments)

@app.route('/register/user', methods=['post'])
def register():
    if not User.validateRegistration(request.form):
        return redirect('/')
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    data = {
        "firstName" : request.form['firstName'],
        "lastName" : request.form['lastName'],
        "email" : request.form['email'],
        "password" : pw_hash
    }
    session['user_id'] = User.save(data)
    return redirect('/dashboard')

@app.route('/login', methods=['post'])
def login():
    data = { "email" : request.form["email"] }
    user_in_db = User.getByEmail(data)
    if not user_in_db:
        flash("Invalid Email/Password", 'loginError')
        return redirect('/')
    if not bcrypt.check_password_hash(user_in_db.password, 
    request.form['password']):
        # if we get False after checking the password
        flash("Invalid Email/Password", 'loginError')
        return redirect('/')
    # if the passwords matched, we set the user_id into session
    session['user_id'] = user_in_db.id
    # never render on a post!!!
    return redirect('/dashboard')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')