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