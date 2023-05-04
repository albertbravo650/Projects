from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

mydb = 'profile_app'

class Comment:
    def __init__(self, data):
        self.id = data['id']
        self.text = data['text']
        self.textLink = data['textLink']
        self.createdAt = data['createdAt']
        self.updatedAt = data['updatedAt']

    @classmethod
    def save(cls, data):
        query = '''INSERT INTO comments 
        ( text,  textLink, createdAt, updatedAt, user_id ) 
        VALUES ( %(text)s , %(textLink)s, NOW() , NOW(), %(user_id)s );'''
        return connectToMySQL(mydb).query_db( query, data )

    @classmethod
    def getById(cls, data):
        query = " SELECT * FROM comments WHERE id = %(id)s;"
        results = connectToMySQL(mydb).query_db( query, data )
        print(results)
        return cls(results[0])
    
    @staticmethod
    def validateComment(comment):
        is_valid = True # we assume this is true
        # query = "SELECT * FROM comments WHERE email = %(email)s;"
        # results = connectToMySQL(mydb).query_db(query, comment)
        if len (comment['text']) < 1:
            flash("Cannot be blank", 'commentError')
            is_valid = False
        return is_valid
    
    @classmethod
    def get_all_comments(cls):
        query = "SELECT * FROM comments LEFT JOIN users ON ;"
        results = connectToMySQL(mydb).query_db(query)
        comments = []
        for comment in results:
            comments.append(cls(comment))
        return comments
    
    @classmethod
    def get_users_with_comments(cls):
        query = "SELECT * FROM users LEFT JOIN comments ON comments.user_id = users.id ORDER BY comments.createdAt DESC;"
        results = connectToMySQL(mydb).query_db( query )
        users_comments = []
        for row_from_db in results:
            data = {
                "text" : row_from_db['text'],
                "textLink" : row_from_db['textLink'],
                "comment_id" : row_from_db["comments.id"],
                "user_id" : row_from_db["id"]
            }
            users_comments.append(data)
        return users_comments