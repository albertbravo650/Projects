from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models.user import User
from flask_app.models import comment

@app.route('/dashboard')
def dashboard():
    # print("hellooooo", session['user_id'])
    if 'user_id' not in session:
        return redirect('/')
    data = {
        'id': session['user_id']
    }
    # all_comments = comment.Comment.get_all_comments()
    all_comments = comment.Comment.get_users_with_comments()
    # print("testingg", all_comments)
    # return render_template('dashboard.html', user=User.getById(data), users_players=users_players)
    return render_template('home.html', user=User.getById(data), all_comments=all_comments)

@app.route('/settings')
def settings():
    if 'user_id' not in session:
        return redirect('/')
    return render_template('settings.html')

# @app.route('/settings')
# def new_comment():
#     if 'user_id' not in session:
#         return redirect('/')
#     data = {
#         'id': session['user_id']
#     }
#     return render_template('settings.html',  user = User.getById(data))

@app.route('/addComment', methods=["POST"])
def addComment():
    print("hellooooo", session['user_id'])
    if 'user_id' not in session:
        return redirect('/')
    if not comment.Comment.validateComment(request.form):
        return redirect('/dashboard')
    data = {
        "text" : request.form["text"],
        "textLink" : request.form["textLink"],
        "user_id" : session["user_id"]
    }
    print("helloo", data)
    comment.Comment.save(data)
    return redirect('/dashboard')

# @app.route("/edit/<int:id>")
# def edit(id):
#     if 'user_id' not in session:
#         return redirect('/')
#     data = {
#         "id": id
#     }
#     print("hi", data)
#     onePlayer = player.Player.get_one_player(data)
#     print("testinggg",onePlayer.name)
#     return render_template("edit.html", onePlayer=onePlayer)

# @app.route('/edit_player', methods=['POST'])
# def update():
#     if 'user_id' not in session:
#         return redirect('/')
#     id = request.form['id']
#     if not player.Player.validate_player(request.form):
#         return redirect(f'/edit/{id}')
#     player.Player.update(request.form)
#     return redirect('/dashboard')

@app.route('/destroy/<int:id>')
def destroy(id):
    if 'user_id' not in session:
        return redirect('/')
    data = {
        "id":id
    }
    comment.Comment.destroy(data)
    return redirect('/dashboard')
