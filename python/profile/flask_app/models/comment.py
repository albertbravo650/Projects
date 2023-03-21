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
        ( text,  textLink, createdAt, updatedAt ) 
        VALUES ( %(text)s , %(textLink)s, NOW() , NOW() );'''
        return connectToMySQL(mydb).query_db( query, data )

    @classmethod
    def getById(cls, data):
        query = " SELECT * FROM comments WHERE id = %(id)s;"
        results = connectToMySQL(mydb).query_db( query, data )
        print(results)
        return cls(results[0])